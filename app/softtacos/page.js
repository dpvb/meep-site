import ClickyMeep from "@/components/ClickyMeep";
import clientPromise from "@/lib/mongodb";

export const revalidate = 0;

export default async function Home() {
  const stats = await getStats();

  return (
    <main className="flex flex-col w-3/4 mx-auto items-center">
      <div className="flex mt-8 items-center gap-4">
        <ClickyMeep size={700} />
      </div>
    </main>
  );
}

async function getStats() {
  try {
    const client = await clientPromise;
    const db = client.db("meep");
    const stats = await db
        .collection("message-stats")
        .find({})
        .toArray();
    return stats;
} catch (e) {
    console.error(e);
}
return [];
}