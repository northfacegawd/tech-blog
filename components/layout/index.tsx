import React, { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

const Layout: React.FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
