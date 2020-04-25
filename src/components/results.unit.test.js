import React from 'react';
import { render } from '@testing-library/react';
import Results from './results';

test('renders a result', () => {
  const results = ["albatross", ["Albatross"], ["http://simple.wikipedia.org/wiki/Albatross"]]
  const { getByText } = render(<Results results={results} />);
  const result = getByText(/albatross/i);
  expect(result).toBeInTheDocument();
});
