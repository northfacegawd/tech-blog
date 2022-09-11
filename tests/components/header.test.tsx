import React from 'react';
import Header from '@components/layout/header';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Header />', () => {
  it('logo render', () => {
    render(<Header />);

    const logo = screen.getByText('ZUN');

    expect(logo).toBeInTheDocument();
  });

  it('menu button click', async () => {
    render(<Header />);

    const button = screen.getByRole('button', { name: 'menu-open-button' });
    userEvent.click(button);

    const navigation = await screen.findByTestId('mobile-navigator');

    expect(navigation).toBeInTheDocument();
  });
});
