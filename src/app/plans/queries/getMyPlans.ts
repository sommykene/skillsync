import { PlanType } from "@skillsync/app/types/plan";
import { createServerSupabaseClient } from "@skillsync/lib/createServerSupabaseClient";

export const getMyPlans = async ({
  userId,
}: {
  userId?: string;
}): Promise<PlanType[]> => {
  const client = await createServerSupabaseClient();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await client
    .from("plan")
    .select(
      "id, pathId, selectedTopics, summary, title, startDate, dateCompleted"
    )
    .eq("userId", userId)
    .order("startDate", { ascending: false });

  if (error) throw error;
  return data ?? [];
};
