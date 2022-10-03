import React, { PropsWithChildren } from 'react';
import Header from './header';

const Layout: React.FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden">{children}</main>
      <footer />
    </>
  );
};

export default Layout;
