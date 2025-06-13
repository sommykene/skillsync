import { PlanBreakdownType, statusEnum } from "@skillsync/app/types/plan";

export const breakdown: PlanBreakdownType = {
  id: "tech_entrepreneurship_roadmap",
  pathId: "15",
  title:
    "Tech Entrepreneurship - Product Management, Business Strategy, Fundraising",
  summary:
    "This 6-week roadmap provides a structured approach to mastering tech entrepreneurship. It covers product management, business strategy, fundraising, and execution—helping you build, launch, and scale a startup with clear goals, actionable tasks, and key deliverables. 🚀",
  startDate: "2025-03-201",
  dateCompleted: "2025-03-23",
  weeks: [
    {
      id: "week_1",
      weekNumber: 1,
      objective: "Understanding Product Management",
      goal: "Learn the fundamentals of product management and how to define a strong product vision.",
      actions: [
        {
          id: "1.1",
          action: "Study product management fundamentals",
          output: "Notes on key concepts",
          status: statusEnum.completed,
          dateCompleted: undefined,
        },
        {
          id: "1.2",
          action: "Understand MVP and user research",
          output: "List of MVP features for a startup idea",
          status: statusEnum.completed,
          dateCompleted: undefined,
        },
        {
          id: "1.3",
          action: "Create user personas and journey maps",
          output: "User persona document",
          status: statusEnum.completed,
          dateCompleted: undefined,
        },
        {
          id: "1.4",
          action: "Learn product roadmap & prioritization techniques",
          output: "Roadmap for a sample product",
          status: statusEnum.completed,
          dateCompleted: undefined,
        },
      ],
      recap: [
        {
          id: "1.5",
          action: "Develop a one-page product roadmap",
          status: statusEnum.completed,
          dateCompleted: undefined,
        },
      ],
    },
    {
      id: "week_2",
      weekNumber: 2,
      objective: "Business Strategy & Competitive Positioning",
      goal: "Understand how to position your startup in the market.",
      actions: [
        {
          id: "2.1",
          action: "Explore different business models (SaaS, Marketplace, etc.)",
          output: "Comparison table of business models",
          status: statusEnum.inProgress,
          dateCompleted: undefined,
        },
        {
          id: "2.2",
          action: "Perform a competitive analysis (SWOT, Porter’s 5 Forces)",
          output: "SWOT analysis document",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "2.3",
          action: "Study Go-to-Market strategies",
          output: "Outline of GTM strategy for a startup idea",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
      recap: [
        {
          id: "2.4",
          action: "Create a one-page Business Model Canvas (BMC)",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
    },
    {
      id: "week_3",
      weekNumber: 3,
      objective: "Product Execution & Growth",
      goal: "Learn how to develop and scale a product efficiently.",
      actions: [
        {
          id: "3.1",
          action: "Study Agile & Scrum methodologies",
          output: "Summary of Agile principles",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "3.2",
          action: "Learn startup metrics & growth hacking techniques",
          output: "List of key metrics for a startup",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "3.3",
          action: "Explore monetization & pricing strategies",
          output: "Pricing strategy proposal",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
      recap: [
        {
          id: "3.4",
          action: "Define 3 core KPIs for a startup idea",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
    },
    {
      id: "week_4",
      weekNumber: 4,
      objective: "Fundraising & Financial Planning",
      goal: "Learn how to raise money and manage startup finances.",
      actions: [
        {
          id: "4.1",
          action: "Study different funding types (Bootstrapping, VC, Grants)",
          output: "Pros & cons of funding options",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "4.2",
          action: "Learn how to pitch investors & craft a pitch deck",
          output: "Investor pitch deck draft",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "4.3",
          action: "Understand financial modeling for startups",
          output: "Basic financial model template",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
      recap: [
        {
          id: "4.4",
          action: "Create a 5-minute investor pitch deck",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
    },
    {
      id: "week_5",
      weekNumber: 5,
      objective: "Building & Leading a Startup Team",
      goal: "Learn leadership, hiring, and team building.",
      actions: [
        {
          id: "5.1",
          action: "Study how to find co-founders & early hires",
          output: "Checklist for finding co-founders",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "5.2",
          action: "Learn about startup culture & leadership",
          output: "List of company values",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "5.3",
          action: "Understand startup legal basics (Equity, SAFE, Term Sheets)",
          output: "Summary of startup legal essentials",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
      recap: [
        {
          id: "5.4",
          action: "Write a hiring plan for first 3 startup hires",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
    },
    {
      id: "week_6",
      weekNumber: 6,
      objective: "Execution, Networking & Scaling",
      goal: "Take action, launch, and scale your startup.",
      actions: [
        {
          id: "6.1",
          action: "Launch MVP using no-code tools",
          output: "Live MVP link",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "6.2",
          action: "Learn fundraising strategy & investor outreach",
          output: "List of potential investors",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
        {
          id: "6.3",
          action: "Study scaling strategies & user growth",
          output: "Growth strategy outline",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
      recap: [
        {
          id: "6.4",
          action: "Launch startup landing page on LinkedIn/Product Hunt",
          status: statusEnum.todo,
          dateCompleted: undefined,
        },
      ],
    },
  ],
  finalOutcomes: [
    {
      id: "outcome_1",
      outcome: "One-page product roadmap",
      status: statusEnum.todo,
      dateCompleted: undefined,
    },
    {
      id: "outcome_2",
      outcome: "Business Model Canvas (BMC)",
      status: statusEnum.todo,
      dateCompleted: undefined,
    },
    {
      id: "outcome_3",
      outcome: "Defined KPIs & Growth Plan",
      status: statusEnum.todo,
      dateCompleted: undefined,
    },
    {
      id: "outcome_4",
      outcome: "Investor Pitch Deck",
      status: statusEnum.todo,
      dateCompleted: undefined,
    },
    {
      id: "outcome_5",
      outcome: "Startup Launch Plan",
      status: statusEnum.todo,
      dateCompleted: undefined,
    },
  ],
};

export const breakdown2: PlanBreakdownType = {
  id: "frontend-learning-plan",
  pathId: "1",
  title: "Frontend Development Learning Plan",
  summary:
    "This structured 6-week plan helps build a solid frontend foundation in HTML, CSS, JavaScript, and React. Each week introduces key concepts, hands-on tasks, and a recap project to reinforce learning, ensuring steady progress and practical application.",
  startDate: "2025-03-25",
  weeks: [
    {
      id: "week-1",
      weekNumber: 1,
      objective: "Understand HTML structure and semantics",
      goal: "Learn how to structure webpages using HTML",
      actions: [
        {
          id: "1.1",
          action: "Learn HTML basics (tags, elements, attributes)",
          output: "A basic HTML page with headings, paragraphs, and lists",
          status: statusEnum.todo,
        },
        {
          id: "1.2",
          action: "Explore semantic HTML and accessibility",
          output: "An improved HTML page using semantic tags",
          status: statusEnum.todo,
        },
      ],
      recap: [
        {
          id: "1.3",
          action: "Build a simple blog homepage using only HTML",
          status: statusEnum.todo,
        },
      ],
    },
    {
      id: "week-2",
      weekNumber: 2,
      objective: "Style webpages using CSS",
      goal: "Learn how to apply styles and layouts effectively",
      actions: [
        {
          id: "2.1",
          action: "Understand CSS selectors, properties, and units",
          output: "Styled HTML page with colors, fonts, and spacing",
          status: statusEnum.todo,
        },
        {
          id: "2.2",
          action: "Explore CSS layouts (Flexbox, Grid)",
          output: "A two-column layout using Flexbox",
          status: statusEnum.todo,
        },
      ],
      recap: [
        {
          id: "2.3",
          action: "Style the blog homepage with a custom layout",
          status: statusEnum.todo,
        },
      ],
    },
    {
      id: "week-3",
      weekNumber: 3,
      objective: "Learn JavaScript fundamentals",
      goal: "Understand JS syntax, variables, functions, and events",
      actions: [
        {
          id: "3.1",
          action: "Learn JavaScript basics (variables, data types, loops)",
          output: "A simple script printing values to the console",
          status: statusEnum.todo,
        },
        {
          id: "3.2",
          action: "Explore event handling and DOM manipulation",
          output: "Interactive webpage with button click effects",
          status: statusEnum.todo,
        },
      ],
      recap: [
        {
          id: "3.3",
          action: "Add interactive elements to the blog (e.g., theme switcher)",
          status: statusEnum.todo,
        },
      ],
    },
    {
      id: "week-4",
      weekNumber: 4,
      objective: "Understand modern JavaScript and APIs",
      goal: "Learn ES6+ features and how to fetch data",
      actions: [
        {
          id: "4.1",
          action: "Explore ES6+ (arrow functions, promises, modules)",
          output: "A script using modern JavaScript syntax",
          status: statusEnum.todo,
        },
        {
          id: "4.2",
          action: "Learn how to fetch and display API data",
          output: "A webpage displaying dynamic data from an API",
          status: statusEnum.todo,
        },
      ],
      recap: [
        {
          id: "4.3",
          action: "Integrate a public API into the blog for dynamic content",
          status: statusEnum.todo,
        },
      ],
    },
    {
      id: "week-5",
      weekNumber: 5,
      objective: "Get started with React",
      goal: "Understand React components, props, and state",
      actions: [
        {
          id: "5.1",
          action: "Learn React basics (JSX, components, props)",
          output: "A simple React component displaying user data",
          status: statusEnum.todo,
        },
        {
          id: "5.2",
          action: "Manage state using React hooks",
          output: "A React component with interactive state changes",
          status: statusEnum.todo,
        },
      ],
      recap: [
        {
          id: "5.3",
          action: "Rebuild the blog homepage using React components",
          status: statusEnum.todo,
        },
      ],
    },
    {
      id: "week-6",
      weekNumber: 6,
      objective: "Advance React knowledge and deploy an app",
      goal: "Use React Router, API calls, and deploy a project",
      actions: [
        {
          id: "6.1",
          action: "Learn React Router for navigation",
          output: "A multi-page React app with navigation",
          status: statusEnum.todo,
        },
        {
          id: "6.2",
          action: "Connect React app to an API and deploy",
          output: "A deployed React project fetching dynamic data",
          status: statusEnum.todo,
        },
      ],
      recap: [
        {
          id: "6.3",
          action:
            "Final project: A fully styled, interactive blog built with React",
          status: statusEnum.todo,
        },
      ],
    },
  ],
  finalOutcomes: [
    {
      id: "outcome-1",
      outcome: "Build and style webpages with HTML and CSS",
      status: statusEnum.todo,
    },
    {
      id: "outcome-2",
      outcome: "Use JavaScript to add interactivity and work with APIs",
      status: statusEnum.todo,
    },
    {
      id: "outcome-3",
      outcome: "Develop a React app with components, state, and routing",
      status: statusEnum.todo,
    },
    {
      id: "outcome-4",
      outcome:
        "Deploy a React project and understand modern frontend workflows",
      status: statusEnum.todo,
    },
  ],
};
