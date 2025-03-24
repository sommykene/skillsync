"use client";

import { NoPlanError } from "@skillsync/components/NoPlanError";
import { RecapCard } from "@skillsync/components/RecapCard";
import { WeekCard } from "@skillsync/components/WeekCard";
import { breakdown } from "@skillsync/utils/breakdowns";
import { learningPaths } from "@skillsync/utils/learningPlans";
import Link from "next/link";
import { Layout } from "../../Layout";

export const PlanPage = ({ id }: { id: string }) => {
  const generatedPlan = breakdown;
  const path = learningPaths.find((path) => path.id === generatedPlan.pathId);
  const isLoading = false;
  const isError = false;
  const error = { message: "no" };
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%]">
          <div
            className={`flex flex-col gap-2 items-center justify-center text-center bg-white rounded-md py-4  px-8 hover:drop-shadow-md text-primary cursor-pointer w-[100%]`}>
            <h3 className="text-lg font-bold">Summary</h3>
            <p className="text-text">
              This 6-week roadmap provides a structured approach to mastering
              tech entrepreneurship. It covers product management, business
              strategy, fundraising, and execution—helping you build, launch,
              and scale a startup with clear goals, actionable tasks, and key
              deliverables. 🚀
            </p>
          </div>
          <RecapCard recap={generatedPlan.finalOutcomes} />
        </div>
        <br />
        {/* <LearningPathCard plan={plan} className="max-w-[550px] mb-8" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {generatedPlan.weeks.map((week, index) => {
            return (
              <Link
                key={week.id}
                href={`/plan/${id}/week${index + 1}`}
                className="h-[100%]">
                <WeekCard week={week} />
              </Link>
            );
          })}
        </div>
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
