import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getCampaignsByAddress = async (address: string) => {
  const { data: campaigns, error } = await supabase
    .from("events")
    .select("*")
    .eq("creator", address);
  return { campaigns, error };
};
