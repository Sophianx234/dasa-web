import { ReactNode } from "react";
type writeAnonymousProps = {
  children: ReactNode
}
function WriteAnonymous({children}:writeAnonymousProps) {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/HH6pY83/chat-bg-1.jpg')] h-dvh flex flex-col    bg-cover bg-center relative  ">
        <div className="absolute inset-0 bg-[#fef3e7df] overflow-y-scroll contrast-[80%]"></div>

        {children}
      </div>
    </div>
  );
}

export default WriteAnonymous;
