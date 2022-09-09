import MenuIcon from '@components/icons/menu';
import MoonIcon from '@components/icons/moon';
import SunIcon from '@components/icons/sun';
import { classnames } from '@lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
import HeaderButton from './header-button';

export default function Header() {
  const [dark, setDark] = useState<boolean>(false);

  const onToggleDark = () => setDark((prev) => !prev);

  return (
    <header className="px-4 h-14 flex items-center w-full max-w-7xl mx-auto">
      <nav className="flex items-center justify-between w-full">
        <Link href="/">
          <a
            className="text-primary font-extrabold text-3xl"
            style={{ fontFamily: 'Roboto' }}
          >
            ZUN
          </a>
        </Link>
        <div className="flex">
          <HeaderButton onClick={onToggleDark}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </HeaderButton>
          <HeaderButton>
            <MenuIcon />
          </HeaderButton>
        </div>
      </nav>
    </header>
  );
}
