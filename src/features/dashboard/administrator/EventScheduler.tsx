import { toggleRevealEventScheduler } from "@/features/slices/navSlice";
import { useAppDispatch, useCreateEvent } from "@/features/utils/hooks";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { GoLocation } from "react-icons/go";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Swal from "sweetalert2";
import AccountFormInput from "../account/AccountFormInput";
import { formValues } from "../account/ChangeContactForm";
import { DatePicker } from "../account/DatePicker";
import DeleteButton from "./DeleteButton";
import { useSocket } from "@/context/SocketContext";
export type eventSchedulerFormValues = formValues & {
  title: string;
  venue: string;
  time: string;
  eventImage: File;
  date: Date;
};
function EventScheduler() {
  const dispatch = useAppDispatch();
  const [eventImg, setEventImg] = useState<File | null>(null);
  const socket = useSocket()
  const { register, control, handleSubmit } =
    useForm<eventSchedulerFormValues>();
  const { handleCreateEvent } = useCreateEvent();
  async function handleCreateNewEvent(data: eventSchedulerFormValues) {
    const result = await Swal.fire({
      title: "Are you sure?",
      heightAuto:false,
          backdrop:false,
      text: "This event will be created.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e8590c",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
    });

    if (result.isConfirmed) {
      console.log('ttt',data.date.toISOString())
      const formData = new FormData();
      formData.append("eventImg", eventImg as File);
      formData.append("title", data.title);
      formData.append("venue", data.venue);
      formData.append("eventDate", data.date.toISOString());
      formData.append("time", data.time);
      handleCreateEvent(formData);
    socket?.emit('notification',{content:`New event:${data.title}.Check dashboard for more information`,type:'Event'})
      dispatch(toggleRevealEventScheduler());
    }
  }

  const onSubmit = async (data: eventSchedulerFormValues) => {
    console.log("damian");
    console.log(data);
    if (!data) console.log("goku");

    handleCreateNewEvent(data);

  };
  return (
    <form
      className="bg-white fixed  inset-0 -top-1  z-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <DeleteButton dispatch={() => dispatch(toggleRevealEventScheduler())} />

      <div className="text-center pt-10 font-poppins font-semibold">
        Schedule Event
      </div>
      <label
        htmlFor="file-upload"
        className="flex justify-center  border mx-4 border-dashed relative rounded-lg overflow-hidden border-dasadeep group"
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) setEventImg(e?.target?.files[0] as File);
          }}
        />
        <HiOutlinePlusSmall className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-44 opacity-85 hidden group-hover:block transition-all " />
        <img
          src={
            eventImg
              ? URL.createObjectURL(eventImg)
              : "https://i.ibb.co/n8hRM6d/dasalogo-removebg.png"
          }
          alt=""
          className={`size-72 ${eventImg && "w-full"}`}
        />
      </label>
      <div className="pt-2">
        <label
          htmlFor=""
          className="flex justify-center flex-col mx-6 space-y-1"
        >
          <div className="pl-1">Event name</div>
          <AccountFormInput
            required
            inputName="title"
            register={register}
            placeholder="eg. General Meeting"
            iconBorder={true}
            icon={<MdOutlineEmojiEvents className="opacity-60" />}
          />
        </label>
        <label
          htmlFor=""
          className="flex justify-center flex-col mx-6 space-y-1"
        >
          <div className="pl-1">Event date</div>
          <Controller
            control={control}
            name="date"
            render={({ field }) => <DatePicker field={field} />}
          />
        </label>
        <label
          htmlFor=""
          className="flex justify-center flex-col mx-6 space-y-1"
        >
          <div className="pl-1">time</div>
          <AccountFormInput
            required
            placeholder="eg. 5:00pm"
            inputName="time"
            register={register}
            iconBorder={true}
            icon={<IoMdTime className="opacity-60" />}
          />
        </label>
        <label
          htmlFor=""
          className="flex justify-center flex-col mx-6 space-y-1"
        >
          <div className="pl-1">venue</div>
          <AccountFormInput
            required
            inputName="venue"
            register={register}
            type="text"
            placeholder="e.g. Labadi Beach"
            iconBorder={true}
            icon={<GoLocation className="opacity-60" />}
          />
        </label>
      </div>
      <div className="mx-10 py-2">
        <button className="bg-dasadeep w-full py-2 rounded-md  text-lg font-semibold font-poppins text-[#4c4132]">
          Create event
        </button>
      </div>
      <Toaster />
    </form>
  );
}

export default EventScheduler;
