import { FC, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const ButtonMenu: FC = () => {
  const [show, setShow] = useState(false);
  const menuHandler = (): void => {
    setShow(!show);
  };

  return (
    <>
      <div className="">
        <button
          onClick={menuHandler}
          className="absolute top-0 right-0 xl:mt-[60px] xl:mr-[68px] border text-white border-color-3 rounded-full hover:border hover:border-color-1 hover:text-color-1 duration-300"
        >
          <HiOutlineMenuAlt4 size={25} />
        </button>
      </div>
      <div
        className={`fixed bg-[#191919] w-[345px] h-screen top-0 bottom-0 ${
          show ? "right-0" : "right-full"
        }`}
      ></div>
    </>
  );
};

export default ButtonMenu;
