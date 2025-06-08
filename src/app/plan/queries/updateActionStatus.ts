import type { SupabaseClient } from "@supabase/supabase-js";

export const updateActionStatus = async (
  actionId: string,
  status: string,
  client: SupabaseClient
): Promise<{
  id?: string;
  success: boolean;
  message: string;
}> => {
  try {
    await client
      .from("action")
      .update({ status })
      .eq("id", actionId)
      .select("id");

    return { success: true, message: "Plan saved successfully!" };
  } catch (error) {
    console.error("Error updating action", error);
    return {
      success: false,
      message: `Failed to update action: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};
