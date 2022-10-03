import React, { PropsWithChildren } from 'react';
import Header from './header';

const Layout: React.FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
      <footer />
    </>
  );
};

export default Layout;
