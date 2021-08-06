// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainHeader from './MainHeader';
import AuthContext from '../../store/auth-context';

it('renders correct ui with not logged in user', () => {
  render(
    <AuthContext.Provider value={{ isLoggedIn: false }}>
      <MainHeader />
    </AuthContext.Provider>
  );
  const links = screen.queryAllByRole('link');
  expect(links.length).toBe(0);
  const button = screen.queryByRole('button');
  expect(button).toBeNull();
});

it('renders correct ui with logged in user', () => {
  const onLogout = jest.fn();
  render(
    <AuthContext.Provider value={{ isLoggedIn: true, onLogout }}>
      <MainHeader />
    </AuthContext.Provider>
  );
  const links = screen.getAllByRole('link');
  expect(links.length).toBe(2);
  const button = screen.getByRole('button', { name: 'Logout' });
  expect(button).toBeInTheDocument();

  // Check if logout function have been called
  fireEvent.click(button);
  expect(onLogout).toHaveBeenCalled();
});
