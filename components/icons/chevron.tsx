import { classnames } from '@lib/utils';
import React, { useMemo } from 'react';

type ArrowPosition = 'up' | 'right' | 'down' | 'left';

interface ChevronProps {
  arrowPosition: ArrowPosition;
  className?: string;
}

export default function Chevron({ arrowPosition, className }: ChevronProps) {
  const d = useMemo(() => {
    const data: Record<ArrowPosition, string> = {
      up: 'M4.5 15.75l7.5-7.5 7.5 7.5',
      down: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
      right: 'M8.25 4.5l7.5 7.5-7.5 7.5',
      left: 'M15.75 19.5L8.25 12l7.5-7.5',
    };
    return data[arrowPosition] ?? 'M19.5 8.25l-7.5 7.5-7.5-7.5';
  }, [arrowPosition]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classnames('w-6 h-6', className ?? '')}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}
