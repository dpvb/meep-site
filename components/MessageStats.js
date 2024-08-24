export default async function MessageStats({ stats }) {
    
    const messageCount = stats.reduce((acc, user) => acc + user.totalMessages, 0);
    const plinkCount = stats.reduce((acc, user) => acc + user.plinks, 0);
    const mowCount = stats.reduce((acc, user) => acc + user.mows, 0);
    const buhCount = stats.reduce((acc, user) => acc + user.buhs, 0);

    //Depending on how many message stats to track there end up being, there may be an argument for making these components? Just to improve readability slightly.
    return (
        <div className="mt-8 pt-2 px-5 w-72 border-2 rounded-md border-neutral-800 bg-neutral-900">
        <h1 className="font-semibold text-xl text-center">Meow Stats</h1>
        <div className="flex flex-col mt-2 text-neutral-400">
          
          <div className="py-1 flex justify-between">
            <p className="font-semibold text-base text-neutral-300">Plinks</p>
            <p>{plinkCount}</p>
          </div>
          
          <hr className="border-neutral-800"/>

          <div className="py-1 flex justify-between">
            <p className="font-semibold text-base text-neutral-300">Mows</p>
            <p>{mowCount}</p>
          </div>

          <hr className="border-neutral-800"/>

          <div className="py-1 flex justify-between">
            <p className="font-semibold text-base text-neutral-300">Buhs</p>
            <p>{buhCount}</p>
          </div>

          <hr className="border-neutral-800"/>

          <div className="py-1 flex justify-between text-base">
            <p className="font-semibold text-base text-neutral-300">Total Messages</p>
            <p>{messageCount}</p>
          </div>
          
        </div>
      </div>
    );
}

