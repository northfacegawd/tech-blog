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

export default null;
