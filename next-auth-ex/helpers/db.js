import { MongoClient } from 'mongodb';

import { user, password } from '../mongo.credentials';

export async function connectDB() {
  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@clustertest.zi0j3.mongodb.net/nextAuth?retryWrites=true&w=majority`
  );

  return client;
}
