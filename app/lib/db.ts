import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const url = process.env.DATABASE_URL;
if (typeof url !== "string") throw new Error("Missing env `DATABASE_URL`");

const adapter = new PrismaBetterSqlite3({
  url,
});

const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export { db };
