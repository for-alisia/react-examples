// @ts-nocheck
import React, { useState, useEffect } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('#f15025');
  const [colorsQty, setColorsQty] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(colorsQty));

  useEffect(() => {
    setList(new Values(color).all(colorsQty));
  }, [colorsQty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(colorsQty);
      setList(colors);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error && 'error'}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div>
          <button className="btn group" onClick={() => setColorsQty(colorsQty - 1)}>
            More colors
          </button>
          <button className="btn group" onClick={() => setColorsQty(colorsQty + 1)}>
            Less colors
          </button>
        </div>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={color.hex} weight={color.weight} index={index} hexColor={color.hex} />
        ))}
      </section>
    </>
  );
};

export default App;
