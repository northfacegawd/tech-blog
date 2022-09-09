import MenuIcon from '@components/icons/menu';
import MoonIcon from '@components/icons/moon';
import SunIcon from '@components/icons/sun';
import { classnames } from '@lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

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
          <button
            className={classnames(
              'flex items-center justify-center hover:bg-primary hover:bg-opacity-20 rounded-full w-10 h-10 transition-colors hover:ease-out duration-300',
              //   dark ? 'text-white' : 'text-black',
            )}
            type="button"
            onClick={onToggleDark}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={classnames(
              'flex items-center justify-center w-10 h-10 hover:bg-primary hover:bg-opacity-20 rounded-full transition-colors hover:ease-out duration-300',
            )}
            type="button"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
