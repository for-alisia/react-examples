// @ts-nocheck
import fs from 'fs';
import path from 'path';

function handler(req, res) {
  if (req.method === 'POST') {
    const { email, text } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const filedata = fs.readFileSync(filePath);
    const data = JSON.parse(filedata);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json({ message: 'Success', feedback: newFeedback });
  } else {
    res.status(200).json({ message: 'OK' });
  }
}

export default handler;
