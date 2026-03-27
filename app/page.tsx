import { TabList } from "@/app/components/tab-list";
import { CardRoot } from "@/app/components/ui/card";
import {
  InputGroupAddon,
  InputGroupControl,
  InputGroupRoot,
} from "@/app/components/ui/input-group";
import { toggleLesson } from "@/app/lib/actions";
import { SearchIcon } from "lucide-react";
import { setTimeout } from "node:timers/promises";
import z from "zod";

export default async function Home({ searchParams }: PageProps<"/">) {
  await setTimeout(3000);

  const { q, tab } = z
    .object({
      q: z.string().default(""),
      tab: z
        .union([z.literal("all"), z.literal("wip"), z.literal("done")])
        .default("all"),
    })
    .parse(await searchParams);

  const { db } = await import("@/app/lib/db");
  const lessons = await db.lesson.findMany({
    where: {
      complete: tab === "done" ? true : tab === "wip" ? false : undefined,
    },
  });

  return (
    <>
      <CardRoot>
        <div className="grid gap-2">
          <InputGroupRoot>
            <InputGroupAddon align={"inline-start"}>
              <SearchIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupControl placeholder="Search..." />
          </InputGroupRoot>
          <TabList tab={tab}>
            <ul className="grid gap-4">
              {lessons.map((lesson) => {
                return (
                  <li key={lesson.id}>
                    {lesson.title}{" "}
                    <form
                      action={toggleLesson.bind(
                        null,
                        lesson.id,
                        !lesson.complete,
                      )}
                    >
                      <button>{lesson.complete ? "Uncheck" : "Check"}</button>
                    </form>
                  </li>
                );
              })}
            </ul>
          </TabList>
        </div>
      </CardRoot>
    </>
  );
}
