import Leaderboard from "@/components/Leaderboard"; //WIP
import MessageStats from "@/components/MessageStats";
import ChromaMeep from "@/components/ChromaMeep";
import clientPromise from "@/lib/mongodb";

export const revalidate = 0;

export default async function Home() {
  const stats = await getStats();

  return (
    <main className="flex flex-col w-3/4 mx-auto items-center">
      <div className="flex mt-8 items-center gap-4">
        <ChromaMeep/>
        <p className="text-7xl mt-[10px] font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 w-min bg-clip-text text-transparent animate-rainbow"
        style={{ backgroundSize: '200% 200%' }}>
          Meep</p>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4">
        <Leaderboard stats={stats} />
        <MessageStats stats={stats} />
        
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