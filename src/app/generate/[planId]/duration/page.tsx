import { Metadata } from "next";
import { DurationPage } from "./DurationPage";

export const metadata: Metadata = {
  title: "Select Duration | SkillSync",
};

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ planId: string }>;
  searchParams: Promise<{ topics?: string }>;
}) => {
  const { planId } = await params;
  const search = await searchParams;

  return (
    <DurationPage
      id={planId}
      topics={search?.topics ? search.topics?.split(",") : []}
    />
  );
};

export default Page;
