import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome, AiOutlineArrowDown } from "react-icons/ai";
import roundText from "@/assets/round-text.png";
import Reveal from "./utils/Reveal";

const Introduce: FC = () => (
  <div className="container px-[100px] xl:px-0">
    <Reveal>
      <div className="flex items-center justify-between mb-[50px]">
        <div className="flex items-center gap-3 justify-center text-xs-slim uppercase border border-color-3 rounded-[30px] px-5 py-[9px]">
          <AiOutlineHome size={14} />
          introduce
        </div>
      </div>
    </Reveal>
    <Reveal>
      <h1 className="text-introduce mb-[43px]">
        Say Hi from <span className="text-color-1">Binderiya</span>, Framer
        Designer and Developer
      </h1>
    </Reveal>
    <Reveal>
      <p className="text-text text-color-2 mb-[31px]">
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>
    </Reveal>
    <Reveal>
      <Link
        href={"/"}
        className="grid place-items-center w-[173px] h-[173px] rounded-full border border-color-3 ml-[580px] overflow-hidden"
      >
        <div className="circle w-full p-3">
          <Image
            src={roundText}
            alt="Rounde"
            className="w-full h-full aspect-square object-contain"
          />
        </div>
        <AiOutlineArrowDown size={40} className="absolute" />
      </Link>
    </Reveal>

    <div className="mt-[55px] flex gap-[100px]">
      <Reveal direction="Right">
        <div>
          <h1 className="text-introduce text-color-1 mb-[38px]">8+</h1>
          <span className="uppercase text-bg-1 mb-4">
            months of <br /> experience
          </span>
        </div>
      </Reveal>
      <Reveal direction="Left">
        <div>
          <h1 className="text-introduce text-color-1 mb-[38px]">10+</h1>
          <span className="uppercase text-bg-1 mb-4">
            projects <br /> completed
          </span>
        </div>
      </Reveal>
    </div>
  </div>
);

export default Introduce;
