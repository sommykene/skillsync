import { PlanBreakdownType } from "@skillsync/app/types/plan";
import { createServerSupabaseClient } from "@skillsync/lib/createServerSupabaseClient";
import { type SupabaseClient } from "@supabase/supabase-js";

export const getPlanById = async ({
  planId,
  client,
}: {
  planId?: string;
  client?: SupabaseClient;
}): Promise<PlanBreakdownType> => {
  const supabase = client ?? (await createServerSupabaseClient());
  if (!planId) {
    throw new Error("no planId provided");
  }

  const { data, error } = await supabase.rpc("get_plan_with_details", {
    plan_id: planId,
  });

  if (error) throw new Error(`Error fetching plan: ${error.message}`);
  return data ?? [];
};
