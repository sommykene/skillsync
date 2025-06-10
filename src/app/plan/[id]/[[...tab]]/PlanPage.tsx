"use client";

import { NoPlanError } from "@skillsync/components/NoPlanError";
import { FinalOutcomesCard } from "@skillsync/components/FinalOutcomesCard";
import { WeekCard } from "@skillsync/app/plan/components/WeekCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { Layout } from "../../Layout";
import { getPlanById } from "../../queries/getPlanById";
import { useSupabaseClient } from "@skillsync/hooks/useSupabaseClient";
import { updatePlanCompleteness } from "../../queries/updatePlanCompleteness";
import dayjs from "dayjs";

export const PlanPage = ({ planId }: { planId: string }) => {
  const { client } = useSupabaseClient();
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: plan,
    error,
  } = useQuery({
    queryKey: ["plan", { id: planId }],
    queryFn: () => getPlanById({ planId, client }),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["plan", { id: planId }],
    mutationFn: () =>
      updatePlanCompleteness(planId, !!plan?.dateCompleted, client),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["plan", { id: planId }],
        refetchType: "all",
      });
    },
  });

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

  if (!plan) {
    return <NoPlanError />;
  }

  if (error) {
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

  if (plan)
    return (
      <Layout plan={plan}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%]">
          <div
            className={`flex flex-col gap-2 items-center justify-center text-center bg-white rounded-md py-4  px-8 text-primary w-[100%]`}>
            <h3 className="text-lg font-bold">Summary</h3>
            <p className="text-text">
              This 6-week roadmap provides a structured approach to mastering
              tech entrepreneurship. It covers product management, business
              strategy, fundraising, and execution—helping you build, launch,
              and scale a startup with clear goals, actionable tasks, and key
              deliverables. 🚀
            </p>
          </div>
          <FinalOutcomesCard recap={plan.finalOutcomes} />
        </div>
        <br />
        {/* <LearningPathCard plan={plan} className="max-w-[550px] mb-8" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plan.weeks.map((week, index) => {
            return (
              <Link
                key={week.id}
                href={`/plan/${planId}/week${index + 1}`}
                className="h-[100%] hover:drop-shadow-md">
                <WeekCard
                  week={week}
                  isCurrentWeek={
                    index === Math.floor(dayjs().diff(plan.startDate, "week"))
                  }
                />
              </Link>
            );
          })}
        </div>
        <button
          className="button mt-8 "
          onClick={() => {
            mutate();
          }}>
          {isPending
            ? "Loading..."
            : plan.dateCompleted
            ? "Mark plan as incomplete"
            : "Mark plan as complete"}
        </button>
      </Layout>
    );

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
