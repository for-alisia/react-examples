import { feedbackData } from './feedback';

function handler(req, res) {
  const {
    query: { feedbackId },
  } = req;

  const { data } = feedbackData();

  const feedback = data.find((item) => item.id === feedbackId);

  res.status(200).json({ feedback });
}

export default handler;
