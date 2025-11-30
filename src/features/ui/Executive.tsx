import Socials from "./Socials";

export type executiveProps = {
  imgUrl: string;
  name: string;
  role: string;
  desc: string;
};

function Executive({ imgUrl, name, role, desc }: executiveProps) {
  return (
    <div className="flex flex-col justify-center items-center border-b-2 pb-10 border-dasalight">
      <img
        src={imgUrl}
        alt={name}
        className="h-[15.8rem] w-60 scale-75 rounded-full object-cover"
      />

      <div className="text-center px-2 mt-4">
        <h1 className="font-bold text-lg text-[#4c4945]">{name}</h1>
        <p className="font-bold text-[#4c4945]">{role}</p>

        <p className="leading-7 text-justify px-4 mt-2">{desc}</p>
      </div>

      <Socials />
    </div>
  );
}

export default Executive;
