import { LearningPathType } from "@skillsync/app/types/plan";
import { createServerSupabaseClient } from "@skillsync/lib/createServerSupabaseClient";

export const getLearningPaths = async (): Promise<LearningPathType[]> => {
  const client = await createServerSupabaseClient();

  const { data, error } = await client
    .from("learning_path")
    .select("id,title,focus,topics")
    .order("title", { ascending: true });

  if (error) throw error;
  return data ?? [];
};
