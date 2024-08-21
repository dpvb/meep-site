import clientPromise from "@/lib/mongodb";

export default async function Home() {

  const stats = await getStats();
  const messageCount = stats.reduce((acc, user) => acc + user.totalMessages, 0);
  const plinkCount = stats.reduce((acc, user) => acc + user.plinks, 0);
  const mowCount = stats.reduce((acc, user) => acc + user.mows, 0);
  const buhCount = stats.reduce((acc, user) => acc + user.buhs, 0);

  return (
    <main className="flex flex-col w-3/4 mx-auto">
      <h1 className="text-5xl text-center w-full mt-4">Meep</h1>
      <div className="w-full text-center mt-5">
        <p>Total Messages: {messageCount}</p>
        <p>Total Plinks: {plinkCount}</p>
        <p>Total Mows: {mowCount}</p>
        <p>Total Buhs: {buhCount}</p>
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