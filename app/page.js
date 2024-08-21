import Leaderboard from "@/components/Leaderboard";
import ChromaMeep from "@/components/ChromaMeep";
import clientPromise from "@/lib/mongodb";

export const revalidate = 0;

export default async function Home() {

  const stats = await getStats();
  const messageCount = stats.reduce((acc, user) => acc + user.totalMessages, 0);
  const plinkCount = stats.reduce((acc, user) => acc + user.plinks, 0);
  const mowCount = stats.reduce((acc, user) => acc + user.mows, 0);
  const buhCount = stats.reduce((acc, user) => acc + user.buhs, 0);

  return (
    <main className="flex flex-col w-3/4 mx-auto items-center">
      <div className="flex mt-8 items-center gap-4">
        <ChromaMeep/>
        <p className="text-7xl mt-[10px] font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 w-min bg-clip-text text-transparent">Meep</p>
      </div>
      <div className="w-72 border-neutral-800 bg-neutral-900 border-2 rounded-md mt-8 pt-2 px-5">
        <h1 className="font-semibold text-xl text-neutral-300 text-center">Message Stats</h1>
        <div className="flex flex-col mt-2 divide-y divide-neutral-800 text-neutral-400">
          <div className="py-1 flex justify-between text-lg">
            <p>Total Messages</p>
            <p>{messageCount}</p>
          </div>
          <div className="py-1 flex justify-between text-lg">
            <p>Plinks</p>
            <p>{plinkCount}</p>
          </div>
          <div className="py-1 flex justify-between text-lg">
            <p>Mows</p>
            <p>{mowCount}</p>
          </div>
          <div className="py-1 flex justify-between text-lg">
            <p>Buhs</p>
            <p>{buhCount}</p>
          </div>
        </div>
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