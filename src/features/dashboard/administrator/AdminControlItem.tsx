import { ReactElement } from "react";
import { Link } from "react-router-dom";

type adminControlItemProps = {
  icon: ReactElement;
  text: string;
  link: string;
};
function AdminControlItem({ icon, text, link }: adminControlItemProps) {
  return (
    <Link to={link}>
      <div className="flex flex-col justify-center items-center">
        {icon}
        <span className="text-sm font-poppins ">{text}</span>
      </div>
    </Link>
  );
}

export default AdminControlItem;
