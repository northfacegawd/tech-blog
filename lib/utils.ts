export function classnames(...classNames: string[]) {
  return classNames.join(' ');
}

export function isClient() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function isVisible(rect: DOMRect) {
  if (!isClient()) return false;
  const { top, bottom } = rect;
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}

interface CalcRangeOption {
  currentYOffset: number;
  scrollHeight: number;
  delay?: {
    start: number;
    end: number;
  };
}

export function calcRange(
  range: [number, number],
  { currentYOffset, scrollHeight, delay }: CalcRangeOption,
) {
  try {
    const scrollRatio = currentYOffset / scrollHeight;
    if (delay) {
      const { start, end } = delay;
      const partScrollStart = start * scrollHeight;
      const partScrollEnd = end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;
      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        return (
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (range[1] - range[0]) +
          range[0]
        );
      }
      if (currentYOffset < partScrollStart) {
        return range[0];
      }
      if (currentYOffset > partScrollEnd) {
        return range[1];
      }
    }
    return scrollRatio * (range[1] - range[0]) + range[0];
  } catch {
    return 0;
  }
}

export default null;
