"use client";

import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { NoPlanError } from "@skillsync/components/NoPlanError";
import { WeekCard } from "@skillsync/components/WeekCard";
import { learningPlans } from "@skillsync/utils/learningPlans";
import { weeklyBreakdown } from "@skillsync/utils/weeklyBreakdown";
import Link from "next/link";

export const GeneratedPlan = ({ id }: { id: string }) => {
  const plan = learningPlans.find((plan) => plan.id === id);

  if (!plan) {
    return <NoPlanError />;
  }

  return (
    <div className="min-h-screen flex items-center justify-start flex-col mb-[100px] relative">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh]">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <h2 className="text-lg font-semibold text-center text-text">
          Heres your learning path based on 2 hours a day for 12 weeks
        </h2>
      </div>
      <LearningPathCard plan={plan} className="max-w-[550px] mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {weeklyBreakdown.map((week) => (
          <WeekCard key={week.week} {...week} />
        ))}
      </div>
      <br />
      <Link href={"/"} className={`button mt-8`}>
        Continue
      </Link>
      <br />
      <div className="flex flex-col items-center justify-center mt-8 gap-8">
        {weeklyBreakdown.map((week) => {
          return (
            <div key={week.week} className="text-center" id={week.week}>
              <h3 className="text-lg font-bold text-primary">{week.week}</h3>
              <p className="font-semibold pb-2">Goal: {week.goal}</p>
              {week.tasks.map((task) => {
                return (
                  <div
                    key={task.task}
                    className="flex flex-col items-center justify-center gap-2">
                    <h5 className="text-md font-semibold">
                      {task.title} -{" "}
                      <span className="text-text font-normal">{task.task}</span>
                    </h5>

                    <p className="text-text">✅ {task.action.title}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-accent p-2 rounded-full shadow-lg">
        ↑
      </button>
    </div>
  );
};
