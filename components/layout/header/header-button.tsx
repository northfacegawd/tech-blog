import { classnames } from '@lib/utils';
import React, { PropsWithChildren } from 'react';

interface HeaderButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const HeaderButton: React.FC<PropsWithChildren<HeaderButtonProps>> = function ({
  children,
  className,
  ...rest
}) {
  return (
    <button
      className={classnames(
        className ?? '',
        'flex items-center justify-center hover:bg-primary hover:bg-opacity-20 rounded-full w-10 h-10 transition-colors hover:ease-out duration-300',
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
