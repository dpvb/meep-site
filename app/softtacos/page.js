import ClickyMeep from "@/components/ClickyMeep";
import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import "@/app/softtacos/page.css"

export const revalidate = 0;

export default async function Home() {
  const stats = await getStats();

  return (
    //This wrapper is important for mobile and how it loads the page
    <div className="wrapper overflow-hidden relative min-h-screen w-full">
      <main className="flex flex-col w-3/4 mx-auto items-center">
          <div className="flex mt-8 items-center gap-4">
            <ClickyMeep size={700} />
          </div>
          <div>
            <Link href="/">hi, im Zelda</Link>
          </div>
      </main>
    </div>
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