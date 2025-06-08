import { LearningPathType, PlanBreakdownType } from "@skillsync/app/types/plan";

export const generatePlan = async ({
  path,
  topics,
  hours,
}: {
  path?: LearningPathType;
  topics: string;
  hours: string;
}): Promise<PlanBreakdownType> => {
  if (!path) {
    throw new Error("Learning Path not found");
  }

  const response = await fetch("/api/generate-plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path: path.title,
      topics: topics ?? "",
      hoursPerWeek: hours,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to generate plan.");
  }

  return response.json();
};
