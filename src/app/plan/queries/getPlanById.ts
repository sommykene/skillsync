import { PlanBreakdownType } from "@skillsync/app/types/plan";
import { createServerSupabaseClient } from "@skillsync/lib/createServerSupabaseClient";

export const getPlanById = async ({
  planId,
}: {
  planId?: string;
}): Promise<PlanBreakdownType> => {
  const client = await createServerSupabaseClient();
  if (!planId) {
    throw new Error("no planId provided");
  }

  const { data, error } = await client.rpc("get_plan_with_details", {
    plan_id: planId,
  });
  console.log("getPlanById", { planId, data, error });
  if (error) throw new Error(`Error fetching plan: ${error.message}`);
  return data ?? [];
};
