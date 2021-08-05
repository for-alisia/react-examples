import { useState, useCallback } from 'react';

const useHttpClient = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsloading(true);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers || {},
      });
      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.message);
      setIsloading(false);

      applyData(responseData);
    } catch (err) {
      setIsloading(false);
      setError(err);
      throw err;
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttpClient;
