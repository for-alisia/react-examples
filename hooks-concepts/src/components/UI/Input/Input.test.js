// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { expect, it } from '@jest/globals';

const onChange = jest.fn();

it('renders an input', () => {
  render(<Input label="My Input" id="input" />);
  const input = screen.getByLabelText('My Input');
  expect(input).toBeInTheDocument();
});

it('renders the correct passed value', () => {
  render(<Input label="My Input" id="input" value="Hello" changeHandler={onChange} />);
  const input = screen.getByLabelText('My Input');
  expect(input.value).toEqual('Hello');
});

it('shows correct invalid class', () => {
  render(<Input label="My Input" id="input" isValid={false} isTouched={true} />);
  const inputWrapper = screen.getByTestId('ui-input');
  expect(inputWrapper).toHaveClass('invalid');
});

it('calls correct functions on change', () => {
  render(<Input label="My Input" id="input" value="" changeHandler={onChange} />);
  const input = screen.getByLabelText('My Input');
  fireEvent.change(input, { target: { value: '1' } });
  expect(onChange).toHaveBeenCalledTimes(1);
});
