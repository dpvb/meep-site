export default function Leaderboard({ stats }) {

    console.log(stats);
    stats.sort((a, b) => b.totalMessages - a.totalMessages);

    return (
        <div className="flex-col w-72 border-neutral-800 bg-neutral-900 border-2 rounded-md mt-8 pt-2 px-5" >
            <h1 className="font-semibold text-xl text-center">Leaderboard</h1>
            <table className="table-auto w-full mt-2">
                <thead className="border-b rounded-md border-neutral-800 ">
                    <tr>
                        <th className= "text-left text-neutral-300">User</th>
                        <th className= "text-center text-neutral-300">Meows</th>
                    </tr>
                </thead>
                <tbody className=" text-neutral-400" >
                    {stats.map((user) => (
                        <tr key={user._id}>
                            <td className="text-left">{user.username}</td>
                            <td className="text-center">{user.totalMessages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}