import { Metadata } from "next";
import { PlanPage } from "./PlanPage";
import { WeekPage } from "./WeekPage";

export const metadata: Metadata = {
  title: "Learning Plan",
};

const Page = async ({
  params,
}: {
  params: Promise<{ id: string; tab?: string[] }>;
  searchParams: Promise<{ topics?: string }>;
}) => {
  const { id, tab } = await params;
  if (tab && tab[0] && tab[0].match(/week(\d)/)) {
    const weekMatch = tab[0].match(/week(\d+)/);
    const weekNumber = weekMatch ? parseInt(weekMatch[1]) : 1;

    return (
      <WeekPage
        id={id}
        weekIndex={weekNumber > 6 ? 0 : Math.max(weekNumber - 1, 0)}
      />
    );
  }
  return <PlanPage id={id} />;
};
export default Page;
