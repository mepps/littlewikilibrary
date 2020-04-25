import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './search';

test('renders search form', () => {
  const query="albatross";
  const handleChange = jest.fn();
  const { getAllByText } = render(<Search query={query} handleChange={handleChange} />);
  const searchElements = getAllByText(/Search/i);
  expect(searchElements).toHaveLength(2);
});
