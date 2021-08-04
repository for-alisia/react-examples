// @ts-nocheck
import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

// Reducer logic
import {
  formReducer,
  checkPassword,
  checkEmail,
  inputBlurAction,
  inputUpdateAction,
} from './login.reducer';

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(formReducer, {
    value: '',
    isValid: false,
    isTouched: false,
    validation: checkEmail,
  });

  const [passwordState, dispatchPassword] = useReducer(formReducer, {
    value: '',
    isValid: false,
    isTouched: false,
    validation: checkPassword,
  });

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  // To avoid unnessesary calling of useEffect restore parts of state objects (we need to call useEffect only if validity changes)
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

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
      authCtx.onLogin(emailState.value, passwordState.value);
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
          value={emailState.value}
          isValid={emailState.isValid}
          isTouched={emailState.isTouched}
          changeHandler={(e) => dispatchEmail(inputUpdateAction(e.target.value))}
          validateHandler={() => dispatchEmail(inputBlurAction())}
        />
        <Input
          ref={passwordRef}
          type="password"
          id="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          isTouched={passwordState.isTouched}
          changeHandler={(e) => dispatchPassword(inputUpdateAction(e.target.value))}
          validateHandler={() => dispatchPassword(inputBlurAction())}
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
