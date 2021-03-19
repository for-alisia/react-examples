import { hash, compare } from 'bcryptjs';

export async function hashPswd(password) {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
}

export async function verifyPswd(password, hPassword) {
  const isValid = await compare(password, hPassword);

  return isValid;
}
