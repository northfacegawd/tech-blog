import { classnames } from '@lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useMemo } from 'react';
import { Url } from 'url';

interface HeaderLinkProps extends LinkProps {}

const HeaderLink: React.FC<PropsWithChildren<HeaderLinkProps>> = function ({
  children,
  href,
  ...rest
}) {
  const router = useRouter();
  const value = useMemo(() => {
    if (typeof href === 'string') {
      return href;
    }
    return href.pathname;
  }, [href]) as string;

  return (
    <Link {...rest} href={href}>
      <a
        className={classnames(
          router?.asPath.startsWith(value) ? 'font-bold text-primary' : '',
          'block lg:inline p-2 cursor-pointer rounded-md hover:backdrop-brightness-75',
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default HeaderLink;
