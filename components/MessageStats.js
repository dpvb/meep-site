export default async function MessageStats({ stats }) {
    
    const messageCount = stats.reduce((acc, user) => acc + user.totalMessages, 0);
    const plinkCount = stats.reduce((acc, user) => acc + user.plinks, 0);
    const mowCount = stats.reduce((acc, user) => acc + user.mows, 0);
    const buhCount = stats.reduce((acc, user) => acc + user.buhs, 0);

    return (
        <div className="w-72 border-neutral-800 bg-neutral-900 border-2 rounded-md mt-8 pt-2 px-5">
        <h1 className="font-semibold text-xl  text-center">Meow Stats</h1>
        <div className="flex flex-col mt-2  text-neutral-400">
          
          <div className="py-1 flex justify-between">
            <p className="text-neutral-300 text-base font-semibold">Plinks</p>
            <p>{plinkCount}</p>
          </div>
          
          <hr className="border-neutral-800"/>

          <div className="py-1 flex justify-between">
            <p className="text-neutral-300 text-base font-semibold">Mows</p>
            <p>{mowCount}</p>
          </div>

          <hr className="border-neutral-800"/>

          <div className="py-1 flex justify-between">
            <p className="text-neutral-300 text-base font-semibold">Buhs</p>
            <p>{buhCount}</p>
          </div>

          <hr className="border-neutral-800"/>

          <div className="py-1 flex justify-between text-base">
            <p className="text-neutral-300 text-base font-semibold">Total Messages</p>
            <p>{messageCount}</p>
          </div>
        </div>
      </div>
    );
}

