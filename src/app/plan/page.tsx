import { LearningPathCard } from "@skillsync/components/LearningPathCard";
import { learningPlans, myLearningPlan } from "@skillsync/utils/learningPlans";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col  mb-[100px]">
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh]">
          Welcome back to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center">
          the platform to learn and grow your technical skills
        </h2>
        <p className="text-center mb-2 ">
          Hop back into a plan or create a new one.
        </p>
      </div>
      <br />
      <h3 className="font-semibold text-center ">Current Plans</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[100%]">
        {myLearningPlan
          .map((planId) => learningPlans.find((plan) => plan.id === planId))
          .filter((plan) => typeof plan !== "undefined")
          .map((plan) => (
            <LearningPathCard
              key={plan.title}
              plan={plan}
              href={`/plans/${plan.id}`}
            />
          ))}
      </div>
      <br />
    </div>
  );
}
