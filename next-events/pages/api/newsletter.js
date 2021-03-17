import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      body: { email },
    } = req;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://for-alisia:25082209@clustertest.zi0j3.mongodb.net/nextEvents?retryWrites=true&w=majority'
    );

    const db = client.db();
    await db.collection('emails').insertOne({ email });
    client.close();

    res.status(201).json({ message: 'Email were added' });
  }
}

export default handler;
