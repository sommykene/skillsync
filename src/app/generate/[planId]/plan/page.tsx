import { Metadata } from "next";
import { GeneratedPlan } from "./GeneratedPlan";

export const metadata: Metadata = {
  title: "Generated Plan | SkillSync",
};

const Page = async ({
  params,
}: {
  params: Promise<{ planId: string }>;
  searchParams: Promise<{ topics?: string }>;
}) => {
  const { planId } = await params;

  return <GeneratedPlan id={planId} />;
};

export default Page;
