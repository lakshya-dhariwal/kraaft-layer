import { supabase } from "@/services/supabase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button } from "../../components/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Claim() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const { address } = useAccount();
  const ID = router.query.id;
  const getCampaign = async () => {
    if (ID) {
      const { data: campaign, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("id", ID);
      console.log(campaign);
      setData(campaign?.[0] as any);
    }
  };
  useEffect(() => {
    if (address && ID) {
      getCampaign();
    }
  }, [address, router.query.id]);

  const [isLoading, setIsLoading] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleCheckEligibility = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsEligible(() =>
        address == "0x4aDd897700A61C96f77332aEf3B7589De1316f75" ? true : false
      );
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      <h1 className="text-2xl text-center cal-font">Kraaft Claim</h1>
      {data && address ? (
        <div className="max-w-[1000px] h-[400px] flex flex-col justify-between mx-auto mt-8 p-3 bg-neutral-800 border  border-zinc-600 rounded">
          <h1 className="text-3xl my-2 cal-font ">{data?.title}</h1>
          <h2 className="text-gray-400   my-1">{data?.desc}</h2>
          <div className="my-2 flex flex-row gap-2">
            <span>Claims : {data?.claims?.length ?? 0}</span>{" "}
            <span>Amount : {data?.amount}</span>
          </div>

          <Button
            type="button"
            mode="dark"
            className="w-fit"
            onClick={handleCheckEligibility}
            small
          >
            Check Eligibility
          </Button>

          {isLoading ? (
            <div className="text-brandGreen text-sm flex flex-row items-center gap-1 my-3">
              {" "}
              <AiOutlineLoading3Quarters className="animate-spin" /> checking
              eligibility...
            </div>
          ) : (
            <>
              {isEligible !== null && (
                <>
                  {isEligible ? (
                    <>
                      {" "}
                      <h1>🎉 You are Eligible for claim</h1>
                      <Button
                        type="button"
                        mode="green"
                        onClick={async () => {
                          supabase
                            .from("campaigns")
                            .update({
                              claims: [address, ...(data?.claims as [])],
                            })
                            .match({ id: router.query.id });
                          handleCheckEligibility();
                        }}
                      >
                        Claim Amount
                      </Button>
                    </>
                  ) : (
                    <h1 className="text-red-400">
                      {" "}
                      You are not eligible for claim
                    </h1>
                  )}
                </>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="text-bgGreen text-center w-full">loading...</div>
      )}
    </div>
  );
}

export default Claim;
