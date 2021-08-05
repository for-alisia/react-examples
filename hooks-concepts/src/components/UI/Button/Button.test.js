// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

const mockEventListener = jest.fn();

test('renders a button', () => {
  render(<Button onClick={mockEventListener}>My button</Button>);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('My button');
});

test('Call a passed function on click', () => {
  render(<Button onClick={mockEventListener}>My button</Button>);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockEventListener).toHaveBeenCalledTimes(1);
});

test('Disabled if it was passed through the props', () => {
  render(<Button disabled>My button</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});

test('Button takes passed className', () => {
  render(<Button className="myClass">My button</Button>);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('myClass');
});
