/** Libraries */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/** Data */
import { GOOGLE_TRANSLATE_API_KEY } from '../../keys';

const Convert = ({ lang, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 700);

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    const getTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: lang.value,
              key: GOOGLE_TRANSLATE_API_KEY,
            },
          }
        );

        setTranslated(data.data.translations[0].translatedText);
      } catch (err) {
        console.log(err);
      }
    };

    if (debouncedText) {
      getTranslation();
    }
  }, [lang, debouncedText]);

  return (
    <div>
      <h3>{translated}</h3>
    </div>
  );
};

export default Convert;
