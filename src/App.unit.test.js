import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders logo', () => {
  const { getByAltText } = render(<App />);
  const logo = getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});
