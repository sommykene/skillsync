import { Metadata } from "next";
import { GeneratedPlan } from "./GeneratedPlan";

export const metadata: Metadata = {
  title: "Generated Plan | SkillSync",
};

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ pathId: string }>;
  searchParams: Promise<{ topics?: string; hours?: string }>;
}) => {
  const { pathId } = await params;
  const { topics, hours } = await searchParams;

  return (
    <GeneratedPlan
      id={pathId}
      topics={typeof topics === "string" ? [topics] : topics || []}
      hours={hours}
    />
  );
};

export default Page;
