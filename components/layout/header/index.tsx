import React, { useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import Link from 'next/link';
import MenuIcon from '@components/icons/menu';
import MoonIcon from '@components/icons/moon';
import SunIcon from '@components/icons/sun';
import { classnames } from '@lib/utils';
import HeaderButton from './header-button';

const transitionStyles: Partial<Record<TransitionStatus, { opacity: number }>> =
  {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

export default function Header() {
  const [dark, setDark] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const onToggleDark = () => setDark((prev) => !prev);
  const onToggleOpen = () => setOpen((prev) => !prev);

  return (
    <header className="w-full fixed top-0 left-0 border-b border-gray-200 bg-white backdrop-blur bg-opacity-40 transition-all ease-out duration-300">
      <nav className="flex items-center justify-between w-full px-4 h-14 mx-auto max-w-6xl">
        <Link href="/">
          <a
            className="text-primary font-extrabold text-3xl"
            style={{
              fontFamily: 'Roboto',
            }}
          >
            ZUN
          </a>
        </Link>
        <div className="flex">
          <HeaderButton onClick={onToggleDark} role="button">
            {dark ? <SunIcon /> : <MoonIcon />}
          </HeaderButton>
          <HeaderButton
            onClick={onToggleOpen}
            role="button"
            aria-label="menu-open-button"
          >
            <MenuIcon />
          </HeaderButton>
        </div>
      </nav>
      <Transition in={open} timeout={{ enter: 300, exit: 50 }} unmountOnExit>
        {(state) => (
          <nav
            className={classnames(
              'w-full px-4 mx-auto max-w-6xl ease-out duration-300 transition-all opacity-0 pb-4',
            )}
            data-testid="mobile-navigator"
            style={{ ...transitionStyles[state] }}
          >
            <Link href="/manifesto">
              <a className="block p-2 cursor-pointer rounded-md hover:backdrop-brightness-95">
                Manifesto
              </a>
            </Link>
            <Link href="/posts">
              <a className="block p-2 cursor-pointer rounded-md hover:backdrop-brightness-95">
                Posts
              </a>
            </Link>
            <Link href="/resume">
              <a className="block p-2 cursor-pointer rounded-md hover:backdrop-brightness-95">
                Resume
              </a>
            </Link>
          </nav>
        )}
      </Transition>
    </header>
  );
}
