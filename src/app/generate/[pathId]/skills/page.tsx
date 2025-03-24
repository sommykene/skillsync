import { Metadata } from "next";
import { SkillsPage } from "./SkillsPage";

export const metadata: Metadata = {
  title: "Select Skills | SkillSync",
};

const Page = async ({ params }: { params: Promise<{ pathId: string }> }) => {
  const { pathId } = await params;
  return <SkillsPage id={pathId} />;
};

export default Page;
