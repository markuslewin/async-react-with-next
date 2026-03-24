import { Prisma, PrismaClient } from "@/app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

const url = `${process.env.DATABASE_URL}`;
const adapter = new PrismaBetterSqlite3({ url });
const db = new PrismaClient({ adapter });

const lessons: Prisma.LessonCreateInput[] = [
  {
    title: "Intro",
    description: "Introduction to Async React",
    icon: "lightbulb",
    complete: false,
  },
  {
    title: "Transitions",
    description: "Coordinating Async",
    icon: "shuffle",
    complete: false,
  },
  {
    title: "Actions",
    description: "Coordinating changes",
    icon: "zap",
    complete: false,
  },
  {
    title: "Suspense",
    description: "Deferred loading",
    icon: "hourglass",
    complete: false,
  },
  {
    title: "Optimistic updates",
    description: "Pretending async is sync",
    icon: "fastforward",
    complete: false,
  },
  {
    title: "Putting it together",
    description: "The vision for Async React",
    icon: "puzzle",
    complete: false,
  },
];

export async function main() {
  for (const data of lessons) {
    await db.lesson.create({ data });
  }
}

main();
