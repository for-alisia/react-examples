function handler(req, res) {
  if (req.method === 'POST') {
    const {
      body: { email },
    } = req;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email' });
      return;
    }

    console.log(email);
    res.status(201).json({ message: 'Email were added' });
  }
}

export default handler;
