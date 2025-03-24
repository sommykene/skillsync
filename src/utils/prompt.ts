export type PromptProps = {
  path: string;
  topics: string;
  hoursPerWeek: number;
};

export const getPrompt = ({ path, topics, hoursPerWeek }: PromptProps) => {
  const message = `
    I want to learn ${path}
    I want to focus on ${topics}

    I have ${hoursPerWeek} hours per week over 6 weeks to dedicate to learning

    The recap is a task/mini project to round up the week

    The summary should be 240 characters to explain why the plan with help the user

    I need you to only output a JSON in the format of PlanBreakdown:

    type WeekBreakdown = {
      id: string;
      weekNumber: string;
      objective: string;
      goal: string;
      actions: {
        id: string;
        action: string;
        output: string;
        status: string;
        dateCompleted?: Dayjs;
      }[];
      recap: {
        id: string;
        action: string;
        status: string;
        dateCompleted?: Dayjs;
      }[];
    }

    type PlanBreakdown = {
      id: string;
      title: string;
      summary: string;
      startDate: string;
      endDate?: string;
      dateCompleted?: Dayjs;
      weeks: WeekBreakdown[];
      finalOutcomes: {
        id: string;
        outcome: string;
        status: string;
        dateCompleted?: Dayjs;
      }[];
    }
`;
  return message;
};
