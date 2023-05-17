import FixedSideBar from "@/components/FixedSideBar";
import Introduce from "@/components/Introduce";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <FixedSideBar />
      <Introduce />
    </>
  );
}
