import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MyPlans from "./MyPlans";
import { getMyPlans } from "./queries/getMyPlans";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const queryClient = new QueryClient();
  const userId = (await auth()).userId;

  await queryClient.prefetchQuery({
    queryKey: ["myPlans"],
    queryFn: () => getMyPlans({ userId: userId ?? undefined }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyPlans />
    </HydrationBoundary>
  );
}
