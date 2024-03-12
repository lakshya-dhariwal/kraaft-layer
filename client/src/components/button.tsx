import React from "react";

type IProps = {
  type: "submit" | "button" | "reset";
  mode: "green" | "dark";
  onClick?: any;
  children: JSX.Element | string;
  className?: string;
  small?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<IProps> = (props) => {
  const STYLES =
    props.mode === "green"
      ? "bg-brandGreen text-gray-800 border border-green-600 hover:bg-brandGreen"
      : "bg-neutral-800 text-gray-300 border border-zinc-600 hover:bg-zinc-800";

  const SIZE = props.small
    ? "py-[4px] px-[10px] text-[12px]"
    : "px-[16px] py-[6px] text-[14px]";
  return (
    <>
      <button
        disabled={props.disabled}
        className={`${STYLES} ${SIZE} rounded-[4px] shadow-sm ${props.className}`}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};
