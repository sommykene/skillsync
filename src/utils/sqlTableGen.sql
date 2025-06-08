CREATE TABLE profile (
    id TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL DEFAULT auth.jwt()->>'sub'
    email TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
);

CREATE TABLE learning_path (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    focus TEXT NOT NULL,
    topics TEXT[] NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE plan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL DEFAULT auth.jwt()->>'sub',
    "pathId" UUID NOT NULL REFERENCES learning_path(id) ON DELETE RESTRICT,
    "selectedTopics" TEXT[] NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    "startDate" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "dateCompleted" TIMESTAMPTZ,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE week (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL DEFAULT auth.jwt()->>'sub',
    "planId" UUID REFERENCES plan(id) ON DELETE CASCADE,
    "weekNumber" VARCHAR(50) NOT NULL,
    objective TEXT NOT NULL,
    goal TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE action (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL DEFAULT auth.jwt()->>'sub',
    "weekId" UUID REFERENCES week(id) ON DELETE CASCADE,
    "planId" UUID REFERENCES plan(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    output TEXT NOT NULL,
    status statusEnum NOT NULL,
    "dateCompleted" TIMESTAMPTZ,
    notes TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE recap (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL DEFAULT auth.jwt()->>'sub',
    "weekId" UUID REFERENCES week(id) ON DELETE CASCADE,
    "planId" UUID REFERENCES plan(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    status statusEnum NOT NULL,
    "dateCompleted" TIMESTAMPTZ,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE final_outcome (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "planId" UUID REFERENCES plan(id) ON DELETE CASCADE,
    "userId" TEXT NOT NULL DEFAULT auth.jwt()->>'sub',
    status statusEnum NOT NULL,
    outcome TEXT NOT NULL,
    "dateCompleted" TIMESTAMPTZ,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Define the enum type
CREATE TYPE statusEnum AS ENUM ('pending', 'inProgress', 'completed', 'skipped');