const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mt-[10vh]">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center ">
          the platform to learn and grow your technical skills
        </h2>
      </div>

      {children}
    </div>
  );
};

export default Page;
