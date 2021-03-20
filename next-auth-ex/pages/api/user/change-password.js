import { getSession } from 'next-auth/client';
import { connectDB } from '../../../helpers/db';
import { verifyPswd, hashPswd } from '../../../helpers/auth';

export default async function (req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Not authentificated' });
    return;
  }

  const {
    user: { email },
  } = session;
  const {
    body: { oldPassword, newPassword },
  } = req;

  const client = await connectDB();

  const collection = client.db().collection('nextUsers');

  const userData = await collection.findOne({ email });

  if (!userData) {
    res.status(404).json({ message: 'User not found' });
    client.close();
    return;
  }

  const currentPassword = userData.password;

  const isValid = await verifyPswd(oldPassword, currentPassword);

  if (!isValid) {
    res.status(403).json({ message: 'Not authorized' });
    client.close();
    return;
  }

  const hashedPassword = await hashPswd(newPassword);

  await collection.updateOne({ email }, { $set: { password: hashedPassword } });

  client.close();

  res.status(200).json({ message: 'Password updated' });
}
