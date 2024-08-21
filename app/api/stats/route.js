import clientPromise from "@/lib/mongodb";
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("meep");
        const stats = await db
            .collection("message-stats")
            .find({})
            .toArray();
        return Response.json(stats);
    } catch (e) {
        console.error(e);
    }

    return Response.json({})
}