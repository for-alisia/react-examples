// @ts-nocheck
import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

// Here used rare forwardRef technic. We need it to set focus on inpit outside of this component
// 1. Create ref (or refs) in the parent component and pass them tho the child through "ref" this.props.
// 2. Inside the component create its own ref for the html input and function to set focus on this internal ref
// 3. Get the second arguments in child - not only props, but ref
// 4. Use useImperativeHandle hook and pass it parent's ref and function returning object with properties needed to be available from outside
// 5. Wrap the child component with React.forwardRef
const Input = React.forwardRef(
  ({ type, id, label, isValid, isTouched, value, changeHandler, validateHandler }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => ({
      activate,
    }));

    return (
      <div
        className={`${classes.control} ${!isValid && isTouched ? classes.invalid : ''}`}
        data-testid="ui-input"
      >
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={changeHandler}
          onBlur={validateHandler}
          ref={inputRef}
        />
      </div>
    );
  }
);

export default Input;
