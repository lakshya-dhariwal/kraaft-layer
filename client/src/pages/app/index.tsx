import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../components/button";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { supabase } from "@/services/supabase";

function Creator() {
  const router = useRouter();
  const [title, setTitle] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [contract, setContract] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const { address } = useAccount();

  const deploy = async (e: any) => {
    e.preventDefault();
    const values = {
      title,
      desc,
      contract,
      creator: address,
      amount,
    };
    toast.success("Campaign Created");
    const { data, error } = await supabase
      .from("campaigns")
      .insert([{ ...values }]);
    console.log(data);
  };
  return (
    <div className="max-w-[1000px] mx-auto pt-8">
      <h1 className="cal-font text-3xl text-center">Kraaft No-Code Creator</h1>

      <form
        className="p-5 bg-neutral-800 text-gray-300 border border-zinc-600 rounded my-5"
        onSubmit={deploy}
      >
        <h1 className="cal-font mb-1 text-xl">Title</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          required
          className="bg-gray-200 text-gray-800 border border-slate-600 rounded w-full p-2"
        />

        <h1 className="cal-font mb-1 mt-2 text-xl">Description</h1>
        <textarea
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          rows={2}
          className="bg-gray-200  text-gray-800 border  border-slate-600 rounded w-full p-2"
        />

        <h1 className="cal-font mb-1 mt-2 text-xl">Gating Condition</h1>
        <div className="rounded flex h-[40px] px-[2px] flex-row items-center  border border-zinc-600  w-fit">
          <div className="px-[16px] py-[6px] text-[14px] bg-brandGreen font-semibold text-gray-800  rounded cursor-pointer">
            Contract Interaction
          </div>
          <div
            className=" px-[16px] py-[6px] text-[14px] cursor-pointer  font-semibold"
            onClick={() => {
              toast("Feature coming soon", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            Social Media
          </div>
          <div
            className="px-[16px] py-[6px] text-[14px] cursor-pointer  font-semibold"
            onClick={() => {
              toast("Feature coming soon", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            Task Submission
          </div>
          <div
            className=" my-1  p-2 rounded-lg cursor-pointer"
            onClick={() => {
              toast("Feature coming soon", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            Token Holders
          </div>
        </div>
        <h1 className="cal-font mb-1 text-lg mt-1">Contract Address</h1>
        <input
          type="text"
          onChange={(e) => {
            setContract(e.target.value);
          }}
          required
          className="bg-gray-200 text-gray-800 border border-slate-600 rounded w-full p-2"
        />
        <h1 className="cal-font mb-1 text-lg mt-2">Claim Amount</h1>
        <input
          type="number"
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
          required
          className="bg-gray-200 text-gray-800 border border-slate-600 rounded w-full p-2"
        />
        <Button
          type="submit"
          mode="green"
          className="w-full mt-8 text-gray-800  cal-font"
          onClick={() => {
            router.push("/app/campaigns");
          }}
        >
          Deploy Campaign Contract
        </Button>
      </form>
    </div>
  );
}

export default Creator;
