import React from 'react';
import { render } from '@testing-library/react'
import BioCard from '../BioCard.js'

test('renders sector', () => {
  const { getByText } = render(<BioCard />);
  getByText(/Sector/i);
});