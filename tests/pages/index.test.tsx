import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '@pages/index';

describe('<Home />', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);

    const home = screen.getByText(/home/i);

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
