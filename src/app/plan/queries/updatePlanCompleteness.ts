import type { SupabaseClient } from "@supabase/supabase-js";
import dayjs from "dayjs";

export const updatePlanCompleteness = async (
  planId: string,
  completed: boolean,
  client: SupabaseClient
): Promise<{
  id?: string;
  success: boolean;
  message: string;
}> => {
  try {
    await client
      .from("plan")
      .update({
        dateCompleted: completed ? null : dayjs().toISOString(),
      })
      .eq("id", planId)
      .select("id");

    return { success: true, message: "Plan updates successfully!" };
  } catch (error) {
    console.error("Error updating plan", error);
    return {
      success: false,
      message: `Failed to update plan: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};
