import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search form', () => {
  const { getAllByText } = render(<App />);
  const searchElements = getAllByText(/Search/i);
  expect(searchElements).toHaveLength(2);
});
