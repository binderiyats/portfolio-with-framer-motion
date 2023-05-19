import About from "@/components/About";
import ButtonMenu from "../Menus/ButtonMenu";
import FixedSideBar from "@/components/FixedSideBar";
import Introduce from "@/components/Introduce";
import Resume from "@/components/Resume";
import Service from "@/components/Services";
import Skills from "@/components/Skills";
import { Inter } from "next/font/google";
import FixedMenu from "@/Menus/FixedMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ButtonMenu />
      {/* <FixedMenu /> */}
      <FixedSideBar />

      <Introduce />
      <About />
      <Resume />
      <Skills />
      <Service />
    </>
  );
}
