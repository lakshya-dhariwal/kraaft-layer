import React from "react";
import "cal-sans";
function navbar(props: any) {
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

      <div className="">{props.connect}</div>
    </div>
  );
}

export default navbar;
