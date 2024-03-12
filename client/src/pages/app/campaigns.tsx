import { Button } from "@/components/button";
import { supabase } from "@/services/supabase";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

function all() {
  const [data, setData] = useState([]);
  const { address } = useAccount();
  const getCampaigns = async () => {
    const { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("creator", address);
    console.log(campaigns);
    setData(campaigns as []);
  };
  useEffect(() => {
    getCampaigns();
  }, [address]);
  return (
    <div className="max-w-[1000px] mx-auto pt-8">
      <h1 className="cal-font text-3xl text-center">All created campaigns</h1>
      <div className="grid grid-cols-3 mt-8">
        {data?.map((i: any) => {
          return (
            <div
              className="p-5 text-lg bg-neutral-800 text-gray-300 border  border-zinc-600 rounded "
              key={i.id}
            >
              <h1 className="cal-font">{i?.title}</h1>
              <span className="text-xs px-2 mx-auto bg-brandGreen rounded-full text-gray-800">
                Contract Interaction
              </span>
              <div className="flex flex-row justify-between items-center my-2">
                <span>Total Claims: {i?.claims?.length ?? 0}</span>{" "}
                <span>Claim Amount : {i?.amount}</span>
              </div>
              <Button
                type="button"
                mode="green"
                small
                onClick={() => {
                  navigator.clipboard.writeText(
                    window.location.host + "/claim/" + i?.id
                  );
                }}
                className="w-full mt-1 text-gray-800  cal-font"
              >
                Copy Claim Link
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default all;
