import Leaderboard from "@/components/Leaderboard"; //WIP
import MessageStats from "@/components/MessageStats";
import ChromaMeep from "@/components/ChromaMeep";

export const revalidate = 0;

export default async function Home() {

  return (
    <main className="flex flex-col w-3/4 mx-auto items-center">
      <div className="flex mt-8 items-center gap-4">
        <ChromaMeep/>
        <p className="text-7xl mt-[10px] font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 w-min bg-clip-text text-transparent">
          Meep</p>
      </div>
      <MessageStats/>
    </main>
  );
}