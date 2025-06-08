"use client";

import { ActionCard } from "@skillsync/components/ActionCard";
import { NoPlanError } from "@skillsync/components/NoPlanError";
import { WeekCard } from "@skillsync/components/WeekCard";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Layout } from "../../Layout";
import { getPlanById } from "../../queries/getPlanById";

export const WeekPage = ({
  weekIndex,
  planId,
}: {
  planId: string;
  weekIndex: number;
}) => {
  const {
    isLoading,
    data: plan,
    error,
  } = useQuery({
    queryKey: ["plan", { id: planId }],
    queryFn: () => getPlanById({ planId }),
  });

  if (!plan) {
    return <NoPlanError />;
  }

  const week = plan.weeks[weekIndex];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-start flex-col mb-[100px] relative text-transparent animate-pulse">
        <div className="mb-8 w-[60%] flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh] loader">
            Generated Plan
          </h1>
          <h2 className="text-lg font-semibold text-center loader w-[50%]">
            Loading
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%] h-60">
          <div className={`flex loader w-[100%]`}></div>
          <div className={`flex loader w-[100%]`}></div>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[100%] h-100">
          <div className={`flex loader w-[100%]`}></div>
          <div className={`flex loader w-[100%]`}></div>
          <div className={`flex loader w-[100%]`}></div>
        </div>
      </div>
    );
  }

  if (error && !plan) {
    return (
      <div className="min-h-screen flex items-center justify-start flex-col mb-[100px] relative">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh]">
            Generated{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Plan
            </span>
          </h1>
          <h2 className="text-lg font-semibold text-center text-text">Error</h2>
        </div>
      </div>
    );
  }

  if (plan) {
    const weekClassName =
      weekIndex === 0
        ? "justify-end"
        : weekIndex === 5
        ? "justify-start"
        : "justify-between";
    return (
      <Layout plan={plan}>
        <div className="grid grid-cols-1 gap-4 w-[100%] md:grid-cols-[max(350px)_1fr] ">
          <div className="flex flex-col gap-4">
            <WeekCard key={week.id} week={week} />
            <div className={`flex ${weekClassName}`}>
              {weekIndex > 0 && (
                <Link href={`week${weekIndex}`} className="button">
                  Week {weekIndex}
                </Link>
              )}
              {weekIndex < 5 && (
                <Link href={`week${weekIndex + 2}`} className="button">
                  Week {weekIndex + 2}
                </Link>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              {week.actions.map((action) => {
                return <ActionCard key={action.id} action={action} />;
              })}
            </div>
          </div>
        </div>
        <br />
      </Layout>
    );
  }

  // catch all
  return (
    <div className="min-h-screen flex items-center justify-start flex-col mb-[100px] relative">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh]">
          Generated{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Plan
          </span>
        </h1>
        <h2 className="text-lg font-semibold text-center text-text">
          Please go through the plan generation process
        </h2>
      </div>
      <Link href={"/generate"} className="button">
        Generate Plan
      </Link>
    </div>
  );
};
