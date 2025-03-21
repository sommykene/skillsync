export type WeeklyBreakdownActionType = {
  title: string;
  isCompleted: boolean;
};

export type WeeklyBreakdownTaskType = {
  title: string;
  task: string;
  action: WeeklyBreakdownActionType;
};

export type WeeklyBreakdownType = {
  week: string;
  goal: string;
  tasks: WeeklyBreakdownTaskType[];
};

export const weeklyBreakdown: WeeklyBreakdownType[] = [
  {
    week: "Week 1",
    goal: "Understand the fundamentals of Product Management and defining a strong product vision.",
    tasks: [
      {
        title: "Introduction to Product Management",
        task: "Read about product management fundamentals and key responsibilities.",
        action: {
          title: "Summarize key takeaways in your notes",
          isCompleted: false,
        },
      },
      {
        title: "Defining a Product Vision",
        task: "Learn how to craft a clear and compelling product vision.",
        action: {
          title:
            "Write a product vision statement for your hypothetical startup",
          isCompleted: false,
        },
      },
      {
        title: "Understanding User Needs",
        task: "Explore techniques like user personas and journey mapping.",
        action: {
          title: "Create a user persona for your target audience",
          isCompleted: false,
        },
      },
      {
        title: "Feature Prioritization Frameworks",
        task: "Study different prioritization techniques like MoSCoW and RICE.",
        action: {
          title: "Use a framework to prioritize features for your product",
          isCompleted: false,
        },
      },
      {
        title: "Creating a Simple Product Roadmap",
        task: "Learn about structuring a roadmap and aligning with business goals.",
        action: {
          title: "Draft a high-level product roadmap for your startup",
          isCompleted: false,
        },
      },
    ],
  },
  {
    week: "Week 2",
    goal: "Develop an understanding of Business Strategy and Competitive Advantage.",
    tasks: [
      {
        title: "Understanding Business Models",
        task: "Learn about different tech startup business models (SaaS, marketplace, etc.).",
        action: {
          title: "Choose and outline a business model for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Market Research & Competitive Analysis",
        task: "Learn how to analyze competitors and identify market gaps.",
        action: {
          title: "Conduct a competitive analysis for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Building a Go-To-Market Strategy",
        task: "Understand the key components of launching a product.",
        action: {
          title: "Outline a simple GTM strategy for your product",
          isCompleted: false,
        },
      },
      {
        title: "Customer Acquisition Strategies",
        task: "Learn about different acquisition channels and marketing techniques.",
        action: {
          title:
            "Identify three key customer acquisition strategies for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Refining Business Strategy",
        task: "Analyze what you've learned and refine your strategy.",
        action: {
          title: "Update your business model based on new insights",
          isCompleted: false,
        },
      },
    ],
  },
  {
    week: "Week 3",
    goal: "Learn about Fundraising and Investor Relations.",
    tasks: [
      {
        title: "Understanding Startup Fundraising",
        task: "Learn about different funding stages and sources of capital.",
        action: {
          title: "List potential funding sources for your startup",
          isCompleted: false,
        },
      },
      {
        title: "How to Pitch to Investors",
        task: "Study the key components of a great investor pitch deck.",
        action: {
          title: "Draft a basic pitch deck for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Term Sheets and Valuation Basics",
        task: "Learn about equity distribution and common funding terms.",
        action: {
          title: "Write a one-page summary of key fundraising terms",
          isCompleted: false,
        },
      },
      {
        title: "Investor Outreach Strategy",
        task: "Learn how to find and approach investors effectively.",
        action: {
          title: "Draft a cold email to an investor",
          isCompleted: false,
        },
      },
      {
        title: "Practice Your Pitch",
        task: "Record yourself presenting your startup pitch.",
        action: {
          title: "Self-evaluate your pitch and note areas for improvement",
          isCompleted: false,
        },
      },
    ],
  },
  {
    week: "Week 4",
    goal: "Develop a strong Lean Startup and MVP mindset.",
    tasks: [
      {
        title: "Introduction to the Lean Startup",
        task: "Read about Lean Startup principles and iterative development.",
        action: {
          title: "Write down key Lean Startup principles",
          isCompleted: false,
        },
      },
      {
        title: "Defining an MVP",
        task: "Learn how to create a Minimum Viable Product (MVP).",
        action: {
          title: "Outline the MVP for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Building a Prototype",
        task: "Use no-code tools or wireframes to create a basic prototype.",
        action: {
          title: "Create a simple prototype of your product",
          isCompleted: false,
        },
      },
      {
        title: "User Testing and Feedback",
        task: "Understand the importance of gathering early user feedback.",
        action: {
          title: "List potential user testing methods for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Iterate Based on Feedback",
        task: "Use feedback to refine your MVP.",
        action: {
          title: "Make at least one improvement to your MVP",
          isCompleted: false,
        },
      },
    ],
  },
  {
    week: "Week 5",
    goal: "Develop Leadership and Team-Building Skills.",
    tasks: [
      {
        title: "What Makes a Great Startup Leader?",
        task: "Study key leadership traits and case studies.",
        action: {
          title: "List leadership traits you want to develop",
          isCompleted: false,
        },
      },
      {
        title: "Building a Strong Team",
        task: "Learn about hiring, culture, and team dynamics.",
        action: {
          title: "Define key roles needed for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Effective Decision Making",
        task: "Study decision-making frameworks used by top entrepreneurs.",
        action: {
          title: "Apply a decision-making model to a startup challenge",
          isCompleted: false,
        },
      },
      {
        title: "Handling Failure & Adaptability",
        task: "Learn from startup failures and how to pivot effectively.",
        action: {
          title: "Identify a potential pivot for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Leadership Reflection",
        task: "Reflect on what leadership means to you.",
        action: {
          title: "Write a personal leadership development plan",
          isCompleted: false,
        },
      },
    ],
  },
  {
    week: "Week 6",
    goal: "Refine your startup idea and prepare for launch.",
    tasks: [
      {
        title: "Refining Your MVP",
        task: "Identify any gaps in your MVP and make improvements.",
        action: {
          title: "Make final refinements to your MVP",
          isCompleted: false,
        },
      },
      {
        title: "Validating Market Fit",
        task: "Analyze feedback and assess product-market fit.",
        action: {
          title: "Write a summary of your market fit validation",
          isCompleted: false,
        },
      },
      {
        title: "Growth and Scaling Strategy",
        task: "Study key strategies for scaling a tech startup.",
        action: {
          title: "Draft a basic scaling plan for your startup",
          isCompleted: false,
        },
      },
      {
        title: "Final Pitch Preparation",
        task: "Polish your pitch and prepare for potential investors.",
        action: {
          title: "Record and refine your final pitch",
          isCompleted: false,
        },
      },
      {
        title: "Launch & Next Steps",
        task: "Create an actionable roadmap for the next 3 months.",
        action: {
          title: "Write a 3-month roadmap for your startup",
          isCompleted: false,
        },
      },
    ],
  },
];
