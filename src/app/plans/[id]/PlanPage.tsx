"use client";

import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { NoPlanError } from "@skillsync/components/NoPlanError";
import { WeekCard } from "@skillsync/components/WeekCard";
import { learningPlans } from "@skillsync/utils/learningPlans";
import { weeklyBreakdown } from "@skillsync/utils/weeklyBreakdown";
import dayjs from "dayjs";

export const PlanPage = ({ id }: { id: string }) => {
  const plan = learningPlans.find((plan) => plan.id === id);
  const startDate = dayjs().subtract(1, "week").startOf("week");
  const currentWeek = Math.floor(dayjs().diff(startDate, "week"));

  if (!plan) {
    return <NoPlanError />;
  }
  return (
    <div className="min-h-screen flex items-center flex-col gap-4  mb-[100px] p-15">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          SkillSync
        </span>
      </h1>
      <p className=" font-semibold text-center ">
        You started on {startDate.format("DD MMMM YYYY")} and are on week{" "}
        {currentWeek + 1}
      </p>
      <LearningPathCard plan={plan} className="max-w-[550px]" />
      <WeekCard {...weeklyBreakdown[currentWeek]} />
    </div>
  );
};
