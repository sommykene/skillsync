import { Metadata } from "next";
import { DurationPage } from "./DurationPage";

export const metadata: Metadata = {
  title: "Select Duration | SkillSync",
};

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ pathId: string }>;
  searchParams: Promise<{ topics?: string | string[] }>;
}) => {
  const { pathId } = await params;
  const search = await searchParams;

  return (
    <DurationPage
      id={pathId}
      topics={
        typeof search?.topics === "string"
          ? [search.topics]
          : search?.topics || []
      }
    />
  );
};

export default Page;
