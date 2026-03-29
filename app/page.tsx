import { TabList } from "@/app/components/tab-list";
import { CardRoot } from "@/app/components/ui/card";
import { ItemGroup } from "@/app/components/ui/item";
import { CompleteButton } from "@/app/design/complete-button";
import { LessonCard } from "@/app/design/lesson";
import { SearchInput } from "@/app/design/search-input";
import { toggleLesson } from "@/app/lib/actions";
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
          <SearchInput value={q} />
          <TabList tab={tab}>
            <ItemGroup>
              {lessons.map((lesson) => {
                return (
                  <LessonCard key={lesson.id} item={lesson}>
                    <CompleteButton
                      isComplete={lesson.complete}
                      action={toggleLesson.bind(
                        null,
                        lesson.id,
                        !lesson.complete,
                      )}
                    />
                  </LessonCard>
                );
              })}
            </ItemGroup>
          </TabList>
        </div>
      </CardRoot>
    </>
  );
}
