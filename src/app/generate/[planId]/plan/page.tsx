import { Metadata } from "next";
import { GeneratedPlan } from "./GeneratedPlan";

export const metadata: Metadata = {
  title: "Generated Plan | SkillSync",
};

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ planId: string }>;
  searchParams: Promise<{ topics?: string; hours?: string }>;
}) => {
  const { planId } = await params;
  const { topics, hours } = await searchParams;

  return (
    <GeneratedPlan
      id={planId}
      topics={topics}
      hours={hours}
    />
  );
};

export default Page;
