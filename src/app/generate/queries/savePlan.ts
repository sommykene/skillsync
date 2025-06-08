"use client";

import { PlanBreakdownType } from "@skillsync/app/types/plan";
import type { SupabaseClient } from "@supabase/supabase-js";
import dayjs from "dayjs";

async function insertBreakdown(
  pathId: string,
  planBreakdown: PlanBreakdownType,
  selectedTopics: string[] = [],
  client: SupabaseClient
) {
  let triggerDelete = false;

  const { data: plan, error: planError } = await client
    .from("plan")
    .insert([
      {
        pathId: pathId,
        selectedTopics: selectedTopics,
        title: planBreakdown.title,
        summary: planBreakdown.summary,
        startDate: dayjs().toISOString(),
      },
    ])
    .select();

  if (planError)
    throw new Error(
      `Error inserting plan: ${planError.message} - ${planError.details}`
    );

  if (plan) {
    // Insert weeks, actions, recaps
    for (const week of planBreakdown.weeks) {
      const { data: weekData, error: weekError } = await client
        .from("week")
        .insert([
          {
            planId: plan[0].id,
            weekNumber: week.weekNumber,
            objective: week.objective,
            goal: week.goal,
          },
        ])
        .select();

      if (weekData) {
        const { error: actionError } = await client.from("action").insert(
          week.actions.map((actionItem) => {
            return {
              weekId: weekData[0].id,
              planId: plan[0].id,
              action: actionItem.action,
              output: actionItem.output,
            };
          })
        );

        const { error: recapError } = await client.from("recap").insert(
          week.recap.map((recapItem) => {
            return {
              weekId: weekData[0].id,
              planId: plan[0].id,
              action: recapItem.action,
            };
          })
        );

        if (actionError || recapError) triggerDelete = true;
      }

      if (weekError) triggerDelete = true;
    }

    // Insert final outcomes
    for (const outcome of planBreakdown.finalOutcomes) {
      await client.from("final_outcome").insert([
        {
          planId: plan[0].id,
          outcome: outcome.outcome,
        },
      ]);
    }
  }

  if (triggerDelete) {
    // Delete the plan if triggerDelete is true
    const { error: deleteError } = await client
      .from("plan")
      .delete()
      .eq("id", plan[0].id);

    if (deleteError)
      throw new Error(
        `Error deleting plan: ${deleteError.message} - ${deleteError.details}`
      );
  }

  return { id: plan[0].id };
}

export const savePlan = async (
  pathId: string,
  planBreakdown: PlanBreakdownType,
  selectedTopics: string[] = [],
  client: SupabaseClient
): Promise<{
  id?: string;
  success: boolean;
  message: string;
}> => {
  try {
    const { id } = await insertBreakdown(
      pathId,
      planBreakdown,
      selectedTopics,
      client
    );
    return { id: id, success: true, message: "Plan saved successfully!" };
  } catch (error) {
    console.error("Error saving plan:", error);
    return {
      success: false,
      message: `Failed to save plan: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};
