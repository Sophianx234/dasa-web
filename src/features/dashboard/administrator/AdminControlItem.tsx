import { useAppSelector } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type adminControlItemProps = {
  icon: ReactElement;
  text?: string | null;
  link: string;
};
function AdminControlItem({ icon, text, link }: adminControlItemProps) {
  const {user} = useAppSelector(store=>store.nav)
  const userInfo  = user as signupCredentialsExtended
  return (
    <Link to={`/dashboard/admin/${userInfo._id}/${link}`}>
      <div className="flex flex-col justify-center items-center">
        {icon}
        <span className="text-sm font-poppins ">{text}</span>
      </div>
    </Link>
  );
}

export default AdminControlItem;
