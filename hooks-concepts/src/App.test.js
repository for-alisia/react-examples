// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

import { act } from 'react-dom/test-utils';

it('shows a login form on start', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
  const form = screen.getByRole('form');
  expect(form).toBeInTheDocument();
  const loginButton = screen.getByRole('button', { name: 'Login' });
  expect(loginButton).toBeInTheDocument();
});

it('Logins a user and change the UI', () => {
  jest.useFakeTimers();
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
  const emailInput = screen.getByLabelText('E-Mail');
  const passwordInput = screen.getByLabelText('Password');
  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  act(() => {
    jest.advanceTimersByTime(600);
  });
  fireEvent.change(passwordInput, { target: { value: '1234567' } });
  act(() => {
    jest.advanceTimersByTime(600);
  });
  fireEvent.click(loginButton);

  const welcome = screen.getByRole('heading', { name: 'Welcome back!' });
  expect(welcome).toBeInTheDocument();
  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  expect(logoutButton).toBeInTheDocument();
  expect(loginButton).not.toBeInTheDocument();
  expect(emailInput).not.toBeInTheDocument();
  expect(passwordInput).not.toBeInTheDocument();
});

it('Logouts the user', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  fireEvent.click(logoutButton);

  expect(logoutButton).not.toBeInTheDocument();

  const loginButton = screen.getByRole('button', { name: 'Login' });
  expect(loginButton).toBeInTheDocument();
});
