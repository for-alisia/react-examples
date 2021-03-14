// @ts-nocheck
import fs from 'fs';
import path from 'path';

export function feedbackData() {
  const filepath = path.join(process.cwd(), 'data', 'feedback.json');
  return { filepath, data: JSON.parse(fs.readFileSync(filepath)) };
}

function handler(req, res) {
  const { filepath, data } = feedbackData();

  if (req.method === 'POST') {
    const { email, text } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    data.push(newFeedback);
    console.log(filepath);
    fs.writeFileSync(filepath, JSON.stringify(data));

    res.status(201).json({ message: 'Success', feedback: newFeedback });
  } else {
    res.status(200).json({ feedback: data });
  }
}

export default handler;
