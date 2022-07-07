import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Spent time/i);
  expect(title).toBeInTheDocument();
  expect(title).toMatchSnapshot();
});
test('find button', () => {
  render(<App />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});






