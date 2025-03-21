import { Metadata } from "next";
import { PlanPage } from "./PlanPage";

export const metadata: Metadata = {
  title: "Learning Plan",
};

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ topics?: string }>;
}) => {
  const { id } = await params;

  return <PlanPage id={id} />;
};
export default Page;
