/** Libraries */
import axios from 'axios';

/** Utils */
import { YOUTUBE_API_KEY } from '../keys';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: YOUTUBE_API_KEY,
    type: 'video',
  },
});
