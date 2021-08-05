// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { expect, it } from '@jest/globals';

it('renders the card', () => {
  render(<Card>My Card</Card>);
  const card = screen.getByTestId('ui-card');
  expect(card).toHaveTextContent('My Card');
});

it('apllyes passed className', () => {
  render(<Card className="myCard">My Card</Card>);
  const card = screen.getByTestId('ui-card');
  expect(card).toHaveClass('myCard');
});
