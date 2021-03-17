import { connectDB, insertDocument, getDocuments } from '../../../helpers/db-utils';

async function handler(req, res) {
  const {
    query: { eventId },
  } = req;

  let client;

  try {
    client = await connectDB();
  } catch (err) {
    res.status(500).json({ message: 'Connection failed' });
    return;
  }

  if (req.method === 'POST') {
    const {
      body: { email, name, text },
    } = req;
    if (!email || name.trim() === '' || text.trim() === '' || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid input' });
      client.close();
      return;
    }

    const comment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', comment);
      comment._id = result.insertedId;

      res.status(201).json({ message: 'Added comment', comment });
    } catch (err) {
      res.status(500).json({ message: 'Inserting failed' });
    }
  }

  if (req.method === 'GET') {
    try {
      const comments = await getDocuments(client, 'comments', { _id: -1 }, { eventId });

      res.status(200).json({ comments });
    } catch (err) {
      res.status(500).json({ message: 'Failed getting comments' });
    }
  }

  client.close();
}

export default handler;
