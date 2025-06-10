"use client";

import { PlanCard } from "@skillsync/components/PlanCard";
import { useQuery } from "@tanstack/react-query";
import { getMyPlans } from "./queries/getMyPlans";
import { useUser } from "@clerk/nextjs";

export default function MyPlans() {
  const { user } = useUser();

  const { data } = useQuery({
    queryKey: ["myPlans"],
    queryFn: () => getMyPlans({ userId: user?.id ?? "" }),
    enabled: !user,
  });

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
          Hop back in to continue your learning journey or start a new plan!
        </p>
      </div>
      <div className="flex flex-col items-center w-[100%] gap-2 ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[100%]">
          {data
            ?.filter((p1) => !p1.dateCompleted)
            .map((plan) => (
              <PlanCard key={plan.title} plan={plan} />
            ))}
        </div>
        <h2 className="text-xl font-semibold text-center">completed</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[100%]">
          {data
            ?.filter((p1) => !!p1.dateCompleted)
            .map((plan) => (
              <PlanCard key={plan.title} plan={plan} />
            ))}
        </div>
      </div>
    </div>
  );
}
