// @ts-nocheck
import { useState, useRef } from 'react';
import classes from './auth-form.module.css';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/client';

async function createUser(email, password) {
  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'Application/json',
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function formSubmitHandler(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (isLogin) {
      // Login
      const result = await signIn('credentials', { redirect: false, email, password });

      if (!result.error) {
        // set auth state
        router.replace('/profile');
      }
    } else {
      // Signup
      if (email && email.includes('@') && password && password.length > 4) {
        try {
          const res = await createUser(email, password);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log('Invalid Inputs');
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
