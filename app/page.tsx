export default async function Home() {
  const { db } = await import("@/app/lib/db");
  const lessons = await db.lesson.findMany();

  return (
    <>
      <h1>Home</h1>
      <ul className="mt-4">
        {lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </>
  );
}
