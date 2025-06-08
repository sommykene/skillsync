import { getLearningPaths } from "./queries/getLearningPaths";
import SelectPlan from "./SelectPlan";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["learningPaths"],
    queryFn: getLearningPaths,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SelectPlan />
    </HydrationBoundary>
  );
}
