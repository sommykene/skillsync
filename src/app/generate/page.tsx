import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { mockLearningPaths } from "@skillsync/utils/learningPlans";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col  mb-[100px]">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh]">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center ">
          the platform to learn and grow your technical skills
        </h2>
        <p className="text-center ">
          Choose 1 learning path to create now. Don&apos;t worry, you can create
          more later.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[100%]">
        {mockLearningPaths.map((plan) => (
          <LearningPathCard
            key={plan.title}
            plan={plan}
            href={`/generate/${plan.id}/skills`}
          />
        ))}
      </div>
    </div>
  );
}
