import { FC } from "react";
import { AiOutlineUser } from "react-icons/ai";
import Reveal from "./utils/Reveal";

const About: FC = () => (
  <div className="container flex flex-col">
    <Reveal>
      <div className="flex items-center gap-3 justify-start w-fit text-xs-slim uppercase border border-color-3 rounded-[30px] px-5 py-[9px] mb-[53px]">
        <AiOutlineUser size={14} />
        about
      </div>
    </Reveal>
    <Reveal>
      <h1 className="mb-[33px] text-title w-[700px]">
        Every great design begin with <br /> an even
        <span className="text-color-1"> better story</span>
      </h1>
    </Reveal>
    <Reveal>
      <p
        className="text-[14px] font-[400] leading-[30px] w-[560px] text-color-2
    "
      >
        Since beginning my journey as a freelance designer nearly 8 years ago, I
        have done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I am quietly confident, naturally curious,
        and perpetually working on improving my chopsone design problem at a
        time.
      </p>
    </Reveal>
  </div>
);

export default About;
