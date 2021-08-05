// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { act } from 'react-dom/test-utils';

it('renders a form with 2 inputs and login button', () => {
  render(<Login />);
  const form = screen.getByRole('form');
  expect(form).toBeInTheDocument();
  const emailInput = screen.getByLabelText('E-Mail');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');
  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute('type', 'password');
  const loginButton = screen.getByRole('button', { name: 'Login' });
  expect(loginButton).toBeInTheDocument();
  expect(loginButton).toHaveAttribute('type', 'submit');
});

it('renders with a start vakues of empty strings', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText('E-Mail');
  expect(emailInput.value).toEqual('');
  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput.value).toEqual('');
});

it('changes the values in inputs', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText('E-Mail');
  fireEvent.change(emailInput, { target: { value: 'Hello' } });
  expect(emailInput.value).toEqual('Hello');
  const passwordInput = screen.getByLabelText('Password');
  fireEvent.change(passwordInput, { target: { value: '12345' } });
  expect(passwordInput.value).toEqual('12345');
});

it('login with incorrect and correct credentials', () => {
  jest.useFakeTimers();
  const onLogin = jest.fn();
  render(<Login onLogin={onLogin} />);
  // Find elements
  const emailInput = screen.getByLabelText('E-Mail');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: 'Login' });
  // Set incorrect credentials
  fireEvent.change(emailInput, { target: { value: 'test' } });
  fireEvent.change(passwordInput, { target: { value: '123' } });
  act(() => {
    jest.advanceTimersByTime(600);
  });
  fireEvent.click(submitButton);
  expect(onLogin).not.toHaveBeenCalled();

  // Set incorrect email and correct password
  fireEvent.change(passwordInput, { target: { value: '1234567' } });
  act(() => {
    jest.advanceTimersByTime(600);
  });
  fireEvent.click(submitButton);
  expect(onLogin).not.toHaveBeenCalled();

  // Set incorrect password and correct email
  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  fireEvent.change(passwordInput, { target: { value: '123' } });
  act(() => {
    jest.advanceTimersByTime(600);
  });
  fireEvent.click(submitButton);
  expect(onLogin).not.toHaveBeenCalled();

  // set correct credentials
  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  fireEvent.change(passwordInput, { target: { value: '1234567' } });
  act(() => {
    jest.advanceTimersByTime(600);
  });
  fireEvent.click(submitButton);
  expect(onLogin).toHaveBeenCalled();
});
