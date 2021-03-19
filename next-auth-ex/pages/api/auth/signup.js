import { connectDB } from '../../../helpers/db';
import { hashPswd } from '../../../helpers/auth';

export default async function (req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const {
    body: { email, password },
  } = req;

  if (!email || !email.includes('@') || !password || password.trim().length < 4) {
    res.status(422).json({ message: 'Invalid input' });
    return;
  }

  const client = await connectDB();

  const db = client.db();

  const exUser = await db.collection('nextUsers').findOne({ email });

  if (exUser) {
    res.status(422).json({ message: 'User already exists' });
    client.close();
    return;
  }

  const hPassword = await hashPswd(password);

  const result = await db.collection('nextUsers').insertOne({ email, password: hPassword });

  res.status(201).json({ message: 'Created user!' });

  client.close();
}
