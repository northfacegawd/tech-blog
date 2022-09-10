import React, { PropsWithChildren } from 'react';
import Header from './header';

const Layout: React.FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">{children}</main>
      <footer />
    </>
  );
};

export default Layout;
