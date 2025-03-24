export type PromptProps = {
  plan: string;
  topics: string;
  hoursPerWeek: number;
};

export const getPrompt = ({ plan, topics, hoursPerWeek }: PromptProps) => {
  const message = `
    I want to learn ${plan}
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

export const schema = {
  type: "json_schema",
  json_schema: {
    name: "plan_breakdown",
    strict: true,
    schema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Unique identifier for the plan",
        },
        summary: {
          type: "string",
          description: "Summary of the plan",
        },
        title: {
          type: "string",
          description: "Title of the plan",
        },
        startDate: {
          type: "string",
          description: "Start date of the plan",
        },
        endDate: {
          type: "string",
          description: "End date of the plan (optional)",
        },
        dateCompleted: {
          type: "string",
          description: "Completion date of the plan (optional)",
        },
        weeks: {
          type: "array",
          description: "Array of weeks within the plan",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string",
                description: "Unique identifier for the week",
              },
              weekNumber: {
                type: "string",
                description: "Week number",
              },
              objective: {
                type: "string",
                description: "Objective for the week",
              },
              goal: {
                type: "string",
                description: "Goal for the week",
              },
              actions: {
                type: "array",
                description: "List of actions for the week",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      description: "Unique identifier for the action",
                    },
                    action: {
                      type: "string",
                      description: "Action description",
                    },
                    output: {
                      type: "string",
                      description: "Expected output of the action",
                    },
                    status: {
                      type: "string",
                      description: "Status of the action",
                    },
                    dateCompleted: {
                      type: "string",
                      description:
                        "Date when the action was completed (optional)",
                    },
                  },
                  required: ["id", "action", "output", "status"],
                },
              },
              recap: {
                type: "array",
                description: "Recap actions for the week",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      description: "Unique identifier for the recap action",
                    },
                    action: {
                      type: "string",
                      description: "Action description",
                    },
                    status: {
                      type: "string",
                      description: "Status of the recap action",
                    },
                    dateCompleted: {
                      type: "string",
                      description:
                        "Date when the recap action was completed (optional)",
                    },
                  },
                  required: ["id", "action", "status"],
                },
              },
            },
            required: [
              "id",
              "weekNumber",
              "objective",
              "goal",
              "actions",
              "recap",
            ],
          },
        },
        finalOutcomes: {
          type: "array",
          description: "List of final outcomes of the plan",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string",
                description: "Unique identifier for the final outcome",
              },
              outcome: {
                type: "string",
                description: "Outcome description",
              },
              status: {
                type: "string",
                description: "Status of the outcome",
              },
              dateCompleted: {
                type: "string",
                description: "Date when the outcome was completed (optional)",
              },
            },
            required: ["id", "outcome", "status"],
          },
        },
      },
      required: [
        "id",
        "summary",
        "title",
        "startDate",
        "weeks",
        "finalOutcomes",
      ],
      additionalProperties: false,
    },
  },
};
