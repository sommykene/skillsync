import type { SupabaseClient } from "@supabase/supabase-js";
import dayjs from "dayjs";

export const updateRecapStatus = async (
  recapId: string,
  status: string,
  notes: string,
  client: SupabaseClient
): Promise<{
  id?: string;
  success: boolean;
  message: string;
}> => {
  try {
    await client
      .from("recap")
      .update({
        status,
        notes,
        dateCompleted: status === "completed" ? dayjs().toISOString() : null,
      })
      .eq("id", recapId)
      .select("id");

    return { success: true, message: "Plan saved successfully!" };
  } catch (error) {
    console.error("Error updating recap", error);
    return {
      success: false,
      message: `Failed to update recap: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};
