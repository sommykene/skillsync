import { RecapType } from "@skillsync/app/types/plan";
import { useSupabaseClient } from "@skillsync/hooks/useSupabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRecapStatus } from "../queries/updateRecapStatus";

export const RecapCard = ({
  planId,
  recap,
  className,
}: {
  planId: string;
  recap: RecapType;
  className?: string;
}) => {
  const { client } = useSupabaseClient();
  const queryClient = useQueryClient();

  const { error, mutate } = useMutation({
    mutationKey: ["updateRecapStatus", recap.id],
    mutationFn: async (newStatus: string) => {
      return await updateRecapStatus(recap.id, newStatus, client);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["plan", { id: planId }],
        refetchType: "all",
      });
    },
  });

  return (
    <div
      data-testid="recap-card"
      className={`bg-accent/20 rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}>
      <div className="flex justify-between gap-2">
        <div data-testid="recap-card-header" className="flex-col w-full">
          <h3 className="text-lg font-bold">{recap.action}</h3>
        </div>
        <div>
          <select
            defaultValue={recap.status}
            className="select select-bordered"
            onChange={(e) => {
              const newStatus = e.target.value;
              if (newStatus !== recap.status) {
                mutate(newStatus);
              }
            }}>
            <option value="todo">Not Started</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="skipped">Skipped</option>
          </select>
        </div>
      </div>
    </div>
  );
};
