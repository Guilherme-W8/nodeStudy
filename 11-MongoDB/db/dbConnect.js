import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/parkingDB";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.log(error);
    }
}

run();

export default client;