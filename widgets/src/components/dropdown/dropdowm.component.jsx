// @ts-nocheck
/** Libraries */
import React, { useState, useEffect, useRef } from 'react';

/** Styles */
import './dropdown.styles.css';

const Dropdown = ({ options, selected, onSelectedChanged, label = 'Select an option' }) => {
  const [isOpened, setIsOpened] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
      setIsOpened(false);
    };

    document.body.addEventListener('click', handleOutsideClick, { capture: true });

    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="ui form" ref={dropdownRef}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setIsOpened((prevIsOpened) => !prevIsOpened)}
          className={`ui selection dropdown ${isOpened ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpened ? 'visible transition' : ''}`}>
            {options.map((option) => {
              if (option.value === selected.value) {
                return null;
              }
              return (
                <div className="item" key={option.value} onClick={() => onSelectedChanged(option)}>
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
