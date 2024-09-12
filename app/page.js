import Leaderboard from "@/components/Leaderboard";
import MessageStats from "@/components/MessageStats";
import ChromaMeep from "@/components/ChromaMeep";
import LinkMeep from "@/components/LinkMeep";
import clientPromise from "@/lib/mongodb";
import Footer from "@/components/Footer";
import Link from "next/link";
import "@/app/page.css";
import Searchbar from "@/components/Searchbar";

export const revalidate = 0;

export default async function Home() {
  const stats = await getStats();

  return (
    <main className="relative min-h-screen">
      <div className="pb-20 flex flex-col items-center mx-auto">
        <div className="flex mt-8 items-center gap-4">
          <ChromaMeep />
          <p
            className="text-7xl mt-[10px] font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 w-min bg-clip-text text-transparent animate-rainbow"
            style={{ backgroundSize: "200% 200%" }}
          >
            Meep
          </p>
        </div>

        <div className="mt-4">
          <Searchbar />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
          <Leaderboard stats={stats} />
          <MessageStats stats={stats} />
        </div>

        <LinkMeep link="softtacos" />
      </div>
      <Footer />
    </main>
  );
}

async function getStats() {
  try {
    const client = await clientPromise;
    const db = client.db("meep");
    const stats = await db.collection("message-stats").find({}).toArray();
    return stats;
  } catch (e) {
    console.error(e);
  }
  return [];
}
