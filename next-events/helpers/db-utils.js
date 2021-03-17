import { MongoClient } from 'mongodb';

export async function connectDB() {
  const client = await MongoClient.connect(
    'mongodb+srv://for-alisia:25082209@clustertest.zi0j3.mongodb.net/nextEvents?retryWrites=true&w=majority'
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getDocuments(client, collection, sort, filter) {
  const db = client.db();
  const documents = await db.collection(collection).find(filter).sort(sort).toArray();

  return documents;
}
