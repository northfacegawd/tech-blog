import React, { useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import Link from 'next/link';
import MenuIcon from '@components/icons/menu';
import MoonIcon from '@components/icons/moon';
import SunIcon from '@components/icons/sun';
import { classnames, isClient } from '@lib/utils';
import HeaderButton from './header-button';
import HeaderLink from './header-link';

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

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const { theme } = document.querySelector('html')!.dataset;
    if (theme === 'dark') {
      setDark(true);
    }
    if (theme === 'light') {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const html = document.querySelector('html')!;
    if (dark) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
  }, [dark]);

  return (
    <header className="w-full">
      <div className="dark:bg-gray-900 dark:border-black dark:text-white border-b border-gray-200 bg-white backdrop-blur bg-opacity-10 transition-all ease-out duration-300 fixed top-0 left-0 w-full">
        <nav className="flex items-center justify-between mx-auto max-w-6xl  px-4 h-14">
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
            <div className="md:flex hidden">
              <HeaderLink href="/manifesto">Manifesto</HeaderLink>
              <HeaderLink href="/posts">Posts</HeaderLink>
              <HeaderLink href="/resume">Resume</HeaderLink>
            </div>
            <HeaderButton onClick={onToggleDark} role="button">
              {dark ? <SunIcon /> : <MoonIcon />}
            </HeaderButton>
            <HeaderButton
              onClick={onToggleOpen}
              role="button"
              aria-label="menu-open-button"
              className="md:hidden"
            >
              <MenuIcon />
            </HeaderButton>
          </div>
        </nav>
        <Transition in={open} timeout={{ enter: 300, exit: 50 }} unmountOnExit>
          {(state) => (
            <nav
              className={classnames(
                'md:hidden w-full px-4 mx-auto max-w-6xl ease-out duration-300 transition-all opacity-0 pb-4',
              )}
              data-testid="mobile-navigator"
              style={{ ...transitionStyles[state] }}
            >
              <HeaderLink href="/manifesto">Manifesto</HeaderLink>
              <HeaderLink href="/posts">Posts</HeaderLink>
              <HeaderLink href="/resume">Resume</HeaderLink>
            </nav>
          )}
        </Transition>
      </div>
    </header>
  );
}
