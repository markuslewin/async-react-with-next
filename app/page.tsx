import { CardRoot } from "@/app/components/ui/card";
import {
  InputGroupAddon,
  InputGroupControl,
  InputGroupRoot,
} from "@/app/components/ui/input-group";
import { toggleLesson } from "@/app/lib/actions";
import { SearchIcon } from "lucide-react";

export default async function Home() {
  const { db } = await import("@/app/lib/db");
  const lessons = await db.lesson.findMany();

  return (
    <>
      <CardRoot>
        <InputGroupRoot>
          <InputGroupAddon align={"inline-start"}>
            <SearchIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupControl placeholder="Search..." />
        </InputGroupRoot>
        <ul className="grid gap-4">
          {lessons.map((lesson) => {
            return (
              <li key={lesson.id}>
                {lesson.title}{" "}
                <form
                  action={toggleLesson.bind(null, lesson.id, !lesson.complete)}
                >
                  <button>{lesson.complete ? "Uncheck" : "Check"}</button>
                </form>
              </li>
            );
          })}
        </ul>
      </CardRoot>
    </>
  );
}
