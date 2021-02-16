import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      setVideos(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return [videos, search];
};

export default useVideos;
