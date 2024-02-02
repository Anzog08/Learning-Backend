import Image from "next/image";
import { Inter } from "next/font/google";

import { SignUp } from "@/components/SignUp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" h-[1030px] w-[2240px] flex justify-center place-items-center bg-slate-400">
      <SignUp />
    </div>
  );
}
