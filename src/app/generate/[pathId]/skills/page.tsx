import { SkillsPage } from "./SkillsPage";

export default async function Page({
  params,
}: {
  params: Promise<{ pathId: string }>;
}) {
  const { pathId } = await params;

  return <SkillsPage id={pathId} />;
}
