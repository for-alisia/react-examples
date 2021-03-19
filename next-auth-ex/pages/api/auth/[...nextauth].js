// @ts-nocheck
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { connectDB } from '../../../helpers/db';
import { verifyPswd } from '../../../helpers/auth';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize({ email, password }) {
        const client = await connectDB();

        const usersCollection = client.db().collection('nextUsers');

        const user = await usersCollection.findOne({ email });

        if (!user) {
          client.close();
          throw new Error('No user was found');
        }

        const isValidPassword = await verifyPswd(password, user.password);

        if (!isValidPassword) {
          client.close();
          throw new Error('Invalid credentials');
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
});
