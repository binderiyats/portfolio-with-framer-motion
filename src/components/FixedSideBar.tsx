import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../assets/profile.jpg";

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";

const FixedSideBar: FC = () => (
  <div className="relative xl:fixed xl:left-[20px] xl:top-[90px] rounded-[30px] border border-color-3 p-[30px] xl:max-w-[350px] text-white flex flex-col items-center m-auto w-[705px]">
    <header className="w-full flex items-center justify-between mb-[30px]">
      <h1 className="font-[600] text-[30px]">Binderiya</h1>
      <span className="text-sm-regular text-end">
        Framer Designer
        <br /> & Developer
      </span>
    </header>
    <div className="w-[250px] h-[210px] overflow-hidden mx-[10px] mb-[46px] rounded-[30px]">
      <Image
        src={profile}
        alt=""
        width={500}
        height={420}
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-2xl-slim mb-2 text-center">hello@binderiya</h2>
    <h2 className="text-2xl-slim text-center mb-[30px]">
      Base in Ulaanbaatar, MN
    </h2>
    <p className="text-sm-regular2 text-color-2 mb-[25px] text-center">
      © 2022 Binderiya. All Rights Reserved
    </p>
    <div className="flex items-center justify-center flex-wrap gap-2 mb-[30px]">
      <Link
        href={`https://twitter.com`}
        className="text-color-2 border border-color-4 rounded-full w-[50px] h-[50px] grid place-items-center hover:text-color-1 hover:border hover:border-color-1 duration-300"
      >
        <AiOutlineTwitter size={20} />
      </Link>
      <Link
        href={`https://twitter.com`}
        className="text-color-2 border border-color-4 rounded-full w-[50px] h-[50px] grid place-items-center hover:text-color-1 hover:border hover:border-color-1 duration-300"
      >
        <AiOutlineGithub size={20} />
      </Link>
      <Link
        href={`https://twitter.com`}
        className="text-color-2 border border-color-4 rounded-full w-[50px] h-[50px] grid place-items-center hover:text-color-1 hover:border hover:border-color-1 duration-300"
      >
        <AiOutlineInstagram size={20} />
      </Link>
      <Link
        href={`https://twitter.com`}
        className="text-color-2 border border-color-4 rounded-full w-[50px] h-[50px] grid place-items-center hover:text-color-1 hover:border hover:border-color-1 duration-300"
      >
        <AiOutlineFacebook size={20} />
      </Link>
    </div>
    <Link
      href={"/"}
      className="bg-color-1 px-[58px] py-[10px] text-black border border-transparent rounded-[30px] flex items-center uppercase justify-center gap-3 text-base-regular hover:bg-transparent hover:border hover:border-color-1 hover:text-color-1 duration-300"
    >
      <AiOutlineMail size={24} />
      hire me!
    </Link>
  </div>
);
export default FixedSideBar;
