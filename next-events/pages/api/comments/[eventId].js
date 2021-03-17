function handler(req, res) {
  const {
    query: { eventId },
  } = req;

  if (req.method === 'POST') {
    const {
      body: { email, name, text },
    } = req;
    if (!email || name.trim() === '' || text.trim() === '' || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const comment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(comment);

    res.status(201).json({ message: 'Added comment', comment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'Max', text: 'First comment' },
      { id: 'c2', name: 'Lena', text: 'Second comment' },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
