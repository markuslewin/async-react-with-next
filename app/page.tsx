import { TabList } from "@/app/components/tab-list";
import { CompleteButton } from "@/app/design/complete-button";
import { EmptyList } from "@/app/design/empty-list";
import { FallbackList } from "@/app/design/fallback";
import { LessonCard, List } from "@/app/design/lesson";
import { SearchInput } from "@/app/design/search-input";
import type { Lesson } from "@/app/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { Suspense, ViewTransition } from "react";
import z from "zod";

type CompleteAction = (
  id: Lesson["id"],
  complete: boolean,
) => void | Promise<void>;

type LessonProps = {
  item: Lesson;
  completeAction: CompleteAction;
};

const Lesson = ({ item, completeAction }: LessonProps) => {
  return (
    <LessonCard key={item.id} item={item}>
      <CompleteButton
        isComplete={item.complete}
        action={completeAction.bind(null, item.id, !item.complete)}
      />
    </LessonCard>
  );
};

type LessonListProps = {
  tab: string;
  search: string;
  completeAction: CompleteAction;
};

const LessonList = async ({ tab, search, completeAction }: LessonListProps) => {
  const { db } = await import("@/app/lib/db");

  // await setTimeout(3000);

  const lessons = await db.lesson.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
          },
        },
        {
          description: {
            contains: search,
          },
        },
      ],
      complete: tab === "done" ? true : tab === "wip" ? false : undefined,
    },
  });

  if (lessons.length <= 0) {
    return (
      <ViewTransition>
        <EmptyList />
      </ViewTransition>
    );
  }

  return (
    <ViewTransition>
      <List>
        {lessons.map((item) => {
          return (
            <ViewTransition key={item.id}>
              <Lesson item={item} completeAction={completeAction} />
            </ViewTransition>
          );
        })}
      </List>
    </ViewTransition>
  );
};

export default async function Home({ searchParams }: PageProps<"/">) {
  const { q, tab } = z
    .object({
      q: z.string().default(""),
      tab: z
        .union([z.literal("all"), z.literal("wip"), z.literal("done")])
        .default("all"),
    })
    .parse(await searchParams);

  const completeAction: CompleteAction = async (id, complete) => {
    "use server";

    const { db } = await import("@/app/lib/db");
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

  return (
    <>
      <SearchInput value={q} />
      <TabList tab={tab}>
        <Suspense fallback={<FallbackList />}>
          <LessonList tab={tab} search={q} completeAction={completeAction} />
        </Suspense>
      </TabList>
    </>
  );
}
