import Image from "next/image";
import { Inter } from "next/font/google";
import "cal-sans";

import axios from "axios";
import { Button } from "@/components/button";
import Link from "next/link";
import PowerloomLogo from "@/components/icons/powerloom.logo";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { address } = useAccount();
  const router = useRouter();
  return (
    <div className="  text-white h-[80vh]  flex flex-col items-center max-w-[1000px] p-24 px-10 pt-10  mx-auto sm:py-12">
      <div className="w-[80vw] cal-font  flex flex-col justify-center items-center my-[5rem]">
        <span className=" text-neutral-800 font-semibold  border-brandGreen bg-brandGreen cursor-pointer rounded-full text-[12px] px-3">
          Simple Intuitive creator for automated rewards distribution campaigns.
        </span>
        <h1 className="text-[80px] mt-5 font-semibold text-[#EDEDED] font-cal text-center">
          No-Code airdrop, giveaway and bounty campaign creator
        </h1>
        <h1 className="text-[#EDEDED]  text-[25px] text-center mt-[40px] mb-5">
          <div className="flex flex-row items-center justify-center mx-auto">
            <span>powered by</span>
            <img
              src="https://pbs.twimg.com/profile_images/1725595719086530560/n--iy1A9_400x400.jpg"
              className="rounded-full h-[40px] mx-1"
              alt=""
            />{" "}
            <span>Powerloom's interaction tracker</span>{" "}
          </div>
          <div className="flex flex-row items-center ">
            <span>using custom snapshotter and scalable </span>
            <img
              src="https://pbs.twimg.com/profile_images/1605605053901021184/9LNylZAA_400x400.png"
              className="rounded-full h-[40px] mx-1"
              alt=""
            />{" "}
            <span> avalanche network</span>
          </div>
        </h1>{" "}
        <div className="flex justify-around  my-5 flex-row w-[20vw] mx-auto ">
          <Button
            type="button"
            mode="dark"
            onClick={() => {
              if (!address)
                toast.error("Connect wallet first", {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              router.push("/app");
            }}
          >
            <div className="flex flex-row gap-[10px] items-center ">
              <h1 className="text-brandGrey font-semibold ">Kraaft Now</h1>
            </div>
          </Button>
          <a
            href="https://github.com/lakshya-dhariwal/kraaft-layer"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Button type="button" mode="dark">
              <div className="flex flex-row gap-[10px] items-center ">
                <h1 className="text-[#EDEDED] font-semibold">Read More</h1>
              </div>
            </Button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 max-w-[80vw] gap-[2rem]">
        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">Airdrops</h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Reward users with specific interactors powered by Powerloom's data
            layer and custom snapshotter wallet interaction tracker.
          </p>
        </div>

        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4 ">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">Giveaways</h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            No code creation of task based giveaways with automated claiming and
            requirement verfication.
          </p>
        </div>

        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">Bounty</h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Create a bounty for users who complete your task, example interact
            with your assigned contract.
          </p>
        </div>
      </div>
    </div>
  );
}
