import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Given a page that renders a list of restaurants, it', () => {

  xit('should render a restaurant entry', () => {
    const { getByText } = render(<App />);
    const appTitle = getByText(/Benito's Hat/i);
    expect(appTitle).toBeInTheDocument();
  });

});