import React, { useEffect } from 'react';

const ErrorComponent = () => {
  useEffect(() => {
    throw new Error('Something went wrong');
  }, []);
  return <div>Error Component</div>;
};

export default ErrorComponent;
