"use client";

import { NoPlanError } from "@skillsync/components/NoPlanError";
import { WeekCard } from "@skillsync/components/WeekCard";
import { breakdown } from "@skillsync/utils/breakdowns";
import { learningPaths } from "@skillsync/utils/learningPlans";
import Link from "next/link";
import { Layout } from "../../Layout";
import { ActionCard } from "@skillsync/components/ActionCard";

export const WeekPage = ({ weekIndex }: { id: string; weekIndex: number }) => {
  const generatedPlan = breakdown;
  const path = learningPaths.find((path) => path.id === generatedPlan.pathId);
  const isLoading = false;
  const isError = false;
  const error = { message: "no" };
  const week = generatedPlan.weeks[weekIndex];
  //   const { isLoaded, isSignedIn } = useUser();
  //   const {
  //     data: generatedPlan,
  //     isLoading,
  //     isError,
  //     error,
  //   } = useQuery({
  //     queryKey: ["generatedPlan", { plan, topics, hours }],
  //     queryFn: async () => {
  //       const data = await generatePlan({
  //         plan,
  //         topics: topics ?? "",
  //         hours: hours ?? "10",
  //       });
  //       return data;
  //     },
  //     staleTime: Infinity,
  //     retry: false,
  //     enabled: isLoaded && isSignedIn,
  //   });

  if (!path) {
    return <NoPlanError />;
  }

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

  if (isError) {
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
            {error.message}
          </h2>
        </div>
      </div>
    );
  }

  if (generatedPlan)
    return (
      <Layout plan={path}>
        <div className="grid grid-cols-1 gap-4 w-[100%] md:grid-cols-[max(350px)_1fr] ">
          <div className="flex flex-col gap-4">
            <WeekCard key={week.id} week={week} />
            <div className="flex justify-between">
              <Link href={`week${weekIndex}`} className="button">
                Week {weekIndex}
              </Link>
              <Link href={`week${weekIndex + 2}`} className="button">
                Week {weekIndex + 2}
              </Link>
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
