import { CheckBadgeIcon } from "@skillsync/assets/CheckBadgeIcon";
import { FinalOutcome } from "@skillsync/utils/breakdowns";

export const RecapCard = ({ recap }: { recap: FinalOutcome[] }) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-start text-center bg-white rounded-md  p-4 hover:drop-shadow-md text-primary cursor-pointer w-[100%]`}>
      <h3 className="text-lg font-bold">Final Outcomes</h3>
      {recap.map((item) => (
        <div key={item.id} className="flex gap-2">
          <div className="flex items-center justify-center rounded-full">
            <CheckBadgeIcon className="size-5" />
          </div>
          <h5 className="text-md">{item.outcome}</h5>
        </div>
      ))}
    </div>
  );
};
