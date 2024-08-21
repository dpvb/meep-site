import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = {}

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
    throw new Error("No MONGO_URI found...");
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;

