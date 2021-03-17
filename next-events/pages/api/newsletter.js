import { connectDB, insertDocument } from '../../helpers/db-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      body: { email },
    } = req;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email' });
      return;
    }

    let client;

    try {
      client = await connectDB();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to DB failed' });
      return;
    }

    try {
      await insertDocument(client, 'emails', { email });
      client.close();
    } catch (err) {
      res.status(500).json({ message: 'Inserting data failed' });
      return;
    }

    res.status(201).json({ message: 'Email were added' });
  }
}

export default handler;
