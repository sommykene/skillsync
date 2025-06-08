import { LearningPathType } from "@skillsync/app/types/plan";
import { createServerSupabaseClient } from "@skillsync/lib/createServerSupabaseClient";

export const getLearningPath = async ({
  id,
}: {
  id: string;
}): Promise<LearningPathType> => {
  const client = await createServerSupabaseClient();

  const { data, error } = await client
    .from("learning_path")
    .select("id,title,focus,topics")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};
