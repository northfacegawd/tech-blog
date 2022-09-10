import React from 'react';
import Header from '@components/layout/header';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<Header />', () => {
  it('logo render', () => {
    render(<Header />);

    const logo = screen.getByText('ZUN');

    expect(logo).toBeInTheDocument();
  });

  it('menu button click', () => {
    render(<Header />);

    const button = screen.getByRole('button', { name: 'menu-open-button' });
    fireEvent.click(button);

    const navigation = screen.getByTestId('mobile-navigator');

    expect(navigation).toBeInTheDocument();
  });
});
