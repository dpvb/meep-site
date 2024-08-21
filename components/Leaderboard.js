export default function Leaderboard({ stats }) {

    console.log(stats);
    stats.sort((a, b) => b.totalMessages - a.totalMessages);

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Total Messages</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.totalMessages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}