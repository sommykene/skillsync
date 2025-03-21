import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillSync",
  description:
    "SkillSync is a platform to learn and grow your technical skills.",
};

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          SkillSync
        </span>
      </h1>
      <h2 className="text-xl font-semibold text-center">
        the platform to learn and grow your technical skills
      </h2>
      <button className="button mt-8">Create a profile</button>
    </div>
  );
};

export default Page;
