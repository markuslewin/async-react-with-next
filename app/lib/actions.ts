"use server";

import { Lesson } from "@/app/generated/prisma/client";
import { db } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { setTimeout } from "node:timers/promises";

export const toggleLesson = async (id: Lesson["id"], complete: boolean) => {
  await setTimeout(3000);

  await db.lesson.update({
    data: {
      complete,
    },
    where: {
      id,
    },
  });

  revalidatePath("/");
};
