import { toggleLesson } from "@/app/lib/actions";

export default async function Home() {
  const { db } = await import("@/app/lib/db");
  const lessons = await db.lesson.findMany();

  return (
    <>
      <h1>Home</h1>
      <ul className="mt-8 grid gap-4">
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
    </>
  );
}
