import { ReactElement } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
export type categoryItemProps = {
  icon: ReactElement;
  title: string;
  link: string;
};
function CategoryItem({link, icon, title }: categoryItemProps) {
  return (
    <Link to={link} className=" hover:scale-105 duration-150 transition-all  flex flex-col justify-center items-center space-y-1">
      <div className="border rounded-full size-11 flex items-center justify-center ">
        {icon}
      </div>
      <p className="text-xs">{title}</p>
    </Link>
  );
}

export default CategoryItem;
