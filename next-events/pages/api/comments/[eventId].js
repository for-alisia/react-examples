import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const {
    query: { eventId },
  } = req;

  const client = await MongoClient.connect(
    'mongodb+srv://for-alisia:25082209@clustertest.zi0j3.mongodb.net/nextEvents?retryWrites=true&w=majority'
  );

  if (req.method === 'POST') {
    const {
      body: { email, name, text },
    } = req;
    if (!email || name.trim() === '' || text.trim() === '' || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const comment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection('comments').insertOne(comment);

    comment.id = result.insertedId;

    res.status(201).json({ message: 'Added comment', comment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'Max', text: 'First comment' },
      { id: 'c2', name: 'Lena', text: 'Second comment' },
    ];

    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

export default handler;
