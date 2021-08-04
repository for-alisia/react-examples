// @ts-nocheck
import React, { useState, useEffect, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

// Reducer logic
import { useInput } from './login.reducer';

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    inputBlur: emailInputBlur,
    inputChanged: emailInputChange,
  } = useInput({ type: 'email', name: 'email' });

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    isTouched: passwordIsTouched,
    inputBlur: passwordInputBlur,
    inputChanged: passwordInputChange,
  } = useInput({ type: 'password', name: 'password' });

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    // Debouncing technic - we don't want to check while user is typing, so we set a delay and clean it with each next key press
    let timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => clearTimeout(timer);
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailValue, passwordValue);
    } else if (!emailIsValid) {
      emailRef.current.activate();
    } else {
      passwordRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="email"
          id="email"
          label={'E-Mail'}
          value={emailValue}
          isValid={emailIsValid}
          isTouched={emailIsTouched}
          changeHandler={(e) => emailInputChange(e.target.value)}
          validateHandler={emailInputBlur}
        />
        <Input
          ref={passwordRef}
          type="password"
          id="password"
          label="Password"
          value={passwordValue}
          isValid={passwordIsValid}
          isTouched={passwordIsTouched}
          changeHandler={(e) => passwordInputChange(e.target.value)}
          validateHandler={passwordInputBlur}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
