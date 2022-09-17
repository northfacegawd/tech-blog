export function classnames(...classNames: string[]) {
  return classNames.join(' ');
}

export function isClient() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export default null;
