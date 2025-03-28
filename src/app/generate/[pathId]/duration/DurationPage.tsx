"use client";

import { Badge } from "@skillsync/components/Badge";
import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { NoPlanError } from "@skillsync/components/NoPlanError";
import { mockLearningPaths } from "@skillsync/utils/learningPlans";
import Link from "next/link";
import { useState } from "react";

export const DurationPage = ({
  id,
  topics,
}: {
  id: string;
  topics: string[];
}) => {
  const plan = mockLearningPaths.find((path) => path.id === id);
  const [hours, setHours] = useState(10);

  if (!plan) {
    return <NoPlanError />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center flex-col  pb-[100px]">
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
      <h3 className="font-semibold text-center text-text">Topics Selected</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
      </div>
      <br />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 items-center">
          <label htmlFor="hours" className="font-semibold">
            How many hours a week roughly can you commit?
          </label>
          <div className="flex gap-2 items-end">
            <input
              type="number"
              id="hours"
              name="hours"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="mt-1 block rounded-md border-gray-300 bg-white shadow-sm p-2 text-right"
            />
            <span className="text-accent font-semibold">hours</span>
          </div>
        </div>
      </div>
      {hours != 0 && (
        <Link
          href={`/generate/${id}/plan?topics=${topics.join(
            ","
          )}&hours=${hours}`}
          className="button mt-8">
          Continue
        </Link>
      )}
    </div>
  );
};
