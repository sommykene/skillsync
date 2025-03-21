"use client";

export const NoPlanError = () => {
  return (
    <div className="min-h-screen flex items-center flex-col  mb-[100px] p-15">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center ">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <p className="text-lg font-bold text-center">
          Oooop, learning plan not found
        </p>
      </div>
    </div>
  );
};
