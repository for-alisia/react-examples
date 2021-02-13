import axios from 'axios';

import { UNSPLASH_ACCESS_KEY } from '../keys';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});
