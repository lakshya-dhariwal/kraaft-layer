import React from "react";
import "cal-sans";
import { useAccount } from "wagmi";
import Link from "next/link";
function navbar(props: any) {
  const { address } = useAccount();
  return (
    <div className="border-b-[1px] border-zinc-600 p-2 flex flex-row justify-between">
      <div className="flex flex-row gap-3 items-center">
        <img
          alt="Image"
          src="https://pbs.twimg.com/profile_images/1752084158795366400/IkASYP_Y_400x400.jpg"
          className="css-9pa8cd rounded-full h-[40px]"
        />
        <span className="cal-font  text-xl font-semibold text-white">
          Kraaft
        </span>
      </div>
      <div className="flex flex-row gap-6 cal-font items-center">
        {address && (
          <>
            <Link href="/app">
              <h1 className="text-gray-300 hover:text-brandGreen cursor-pointer">
                Creator
              </h1>
            </Link>
            <Link href="/app/campaigns">
              <h1 className="text-gray-300 hover:text-brandGreen cursor-pointer">
                Your campaigns
              </h1>
            </Link>
          </>
        )}

        <div className="">{props.connect}</div>
      </div>
    </div>
  );
}

export default navbar;
