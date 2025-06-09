import type { SupabaseClient } from "@supabase/supabase-js";

export const updateRecapStatus = async (
  recapId: string,
  status: string,
  client: SupabaseClient
): Promise<{
  id?: string;
  success: boolean;
  message: string;
}> => {
  try {
    await client
      .from("recap")
      .update({ status })
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
