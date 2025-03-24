"use client";

import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { NoPlanError } from "@skillsync/components/NoPlanError";
import { TopicsSelector } from "@skillsync/components/TopicsSelector";
import { learningPaths } from "@skillsync/utils/learningPlans";

export const SkillsPage = ({ id }: { id: string }) => {
  const path = learningPaths.find((path) => path.id === id);

  if (!path) {
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

      <LearningPathCard plan={path} className="max-w-[550px]" />
      <br />
      <TopicsSelector topics={path.keyTopics} pathId={path.id} />
    </div>
  );
};
