import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <header />
      <main>{children}</main>
      <footer />
    </>
  );
};
