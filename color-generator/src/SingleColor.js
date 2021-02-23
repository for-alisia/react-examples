import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  const clickHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`);
  };

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `#${hexColor}` }}
      onClick={clickHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
