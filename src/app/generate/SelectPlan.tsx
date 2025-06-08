"use client";

import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { useQuery } from "@tanstack/react-query";
import { getLearningPaths } from "./queries/getLearningPaths";

export default function SelectPlan() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["learningPaths"],
    queryFn: () => getLearningPaths(),
    retry: false,
  });

  if (error) {
    return (
      <h1 className="text-4xl font-bold mb-6 text-center h-screen flex items-center justify-center">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Error
        </span>
      </h1>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-start flex-col mb-[100px] relative text-transparent animate-pulse">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh] loader">
            Welcome to
          </h1>
          <h2 className="text-xl font-semibold text-center mb-2 loader">
            the platform to learn and grow your technical skills
          </h2>
          <p className="text-center loader ">
            Choose 1 learning path to create now. Don&apos;t worry, you can
            create more later.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[100%]">
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
          <div className={`flex loader w-[100%] h-30`}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col  mb-[100px]">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh]">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center ">
          the platform to learn and grow your technical skills
        </h2>
        <p className="text-center ">
          Choose 1 learning path to create now. Don&apos;t worry, you can create
          more later.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[100%]">
        {data?.map((path) => (
          <LearningPathCard
            key={path.title}
            path={path}
            href={`/generate/${path.id}/skills`}
          />
        ))}
      </div>
    </div>
  );
}
