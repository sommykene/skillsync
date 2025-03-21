import { Metadata } from "next";
import { SkillsPage } from "./SkillsPage";

export const metadata: Metadata = {
  title: "Select Skills | SkillSync",
};

const Page = async ({ params }: { params: Promise<{ planId: string }> }) => {
  const { planId } = await params;
  return <SkillsPage id={planId} />;
};

export default Page;
