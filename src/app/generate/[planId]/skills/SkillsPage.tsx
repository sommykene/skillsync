"use client";

import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { NoPlanError } from "@skillsync/components/NoPlanError";
import { TopicsSelector } from "@skillsync/components/TopicsSelector";
import { learningPlans } from "@skillsync/utils/learningPlans";

export const SkillsPage = ({ id }: { id: string }) => {
  const plan = learningPlans.find((plan) => plan.id === id);

  if (!plan) {
    return <NoPlanError />;
  }
  return (
    <div className="min-h-screen flex items-center justify-start flex-col ">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center pt-[20vh]">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center text-text">
          Plan Chosen
        </h2>
        <p className="text-center text-text">
          Now you can select in more detail what you&apos;d like to learn
        </p>
      </div>

      <LearningPathCard plan={plan} className="max-w-[550px]" />
      <br />
      <TopicsSelector topics={plan.keyTopics} planId={plan.id} />
    </div>
  );
};
