import { FC } from "react";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";

const FixedMenu: FC = () => {
  return (
    <div className=" mt-[65px] w-[55px] h-[300px] py-[24px] border border-color-3 rounded-[30px] flex flex-col items-center text-bg-1">
      <div className="py-6">
        <Link href="/" className="py-6">
          <AiOutlineHome size={20} />
        </Link>
      </div>
      <div className="py-6">
        <Link href="/">
          <AiOutlineHome size={20} />
        </Link>
      </div>
    </div>
  );
};

export default FixedMenu;
