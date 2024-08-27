import LinkMeep from "@/components/LinkMeep";
import clientPromise from "@/lib/mongodb";

export const revalidate = 0;

export default async function Page({ params }) {
  const username = params.username;
  const stats = await getUserStats(username);

  if (!stats) {
    return (
      <div className="text-white w-full mt-8">
        <h1 className="text-center text-xl">{username} does not exist.</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl text-pink-500 mt-8">{username}</h1>
      <div className="bg-neutral-800 border border-neutral-700 w-48 flex flex-col px-4 py-2 mt-8 rounded-md text-neutral-300">
        <div className="flex justify-between">
          <p className="font-bold">Plinks</p>
          <p>{stats.plinks}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Mows</p>
          <p>{stats.mows}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Buhs</p>
          <p>{stats.buhs}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Messages</p>
          <p>{stats.totalMessages}</p>
        </div>
      </div>
      <div className="mt-4">
        <LinkMeep link={"/"} />
      </div>
    </div>
  );
}

export async function getUserStats(username) {
  const client = await clientPromise;
  const db = client.db("meep");
  const stats = await db
    .collection("message-stats")
    .findOne({ username: username });
  return stats;
}

export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db("meep");
  const users = await db.collection("message-stats").find({}).toArray();
  return users.map((user) => ({ username: user.username }));
}
