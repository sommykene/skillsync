"use client";

import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { TopicsSelector } from "@skillsync/components/TopicsSelector";
import { getLearningPath } from "../../queries/getLearningPath";
import { useQuery } from "@tanstack/react-query";
import { NoPlanError } from "@skillsync/components/NoPlanError";

export const SkillsPage = ({ id }: { id: string }) => {
  const { data, error } = useQuery({
    queryKey: ["learningPath", { id }],
    queryFn: () => getLearningPath({ id }),
  });

  if (error) {
    return <NoPlanError />;
  }

  if (data)
    return (
      <div className="min-h-screen flex items-center justify-start flex-col">
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

        <LearningPathCard path={data} className="max-w-[550px]" />
        <br />
        <TopicsSelector topics={data.topics} pathId={id} />
      </div>
    );
};
