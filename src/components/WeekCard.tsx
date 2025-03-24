import { CheckBadge } from "@skillsync/assets/CheckBadge";
import { WeekBreakdown } from "@skillsync/utils/breakdowns";

export const WeekCard = ({ week }: { week: WeekBreakdown }) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-start text-center bg-white rounded-md  p-4 hover:drop-shadow-md text-primary cursor-pointer h-full`}>
      <h3 className="font-semibold text-primary/80">Week {week.weekNumber}</h3>
      <h3 className="text-lg font-bold">{week.objective}</h3>
      <p className="text-text">{week.goal}</p>
      <p className="text-text font-semibold">Tasks</p>
      <div className="flex flex-col text-start gap-2 bg-accent/5 p-4 rounded-md w-[100%] h-[100%]">
        {week.actions.map((action) => (
          <div key={action.id} className="flex gap-2">
            <div className="flex items-center justify-center rounded-full">
              <CheckBadge className="size-5" />
            </div>
            <h5 className="text-md">{action.action}</h5>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-start gap-2 bg-secondary p-4 rounded-md h-fit-content w-[100%]">
        {week.recap.map((item) => (
          <div key={item.id} className="flex gap-2">
            <div className="flex items-center justify-center rounded-full">
              <CheckBadge className="size-5" solid />
            </div>
            <h5 className="text-md">{item.action}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
