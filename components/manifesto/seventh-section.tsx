import { calcRange, isVisible } from '@lib/utils';
import React, { useCallback, useEffect, useRef } from 'react';

export default function SeventhSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  const onShowParagraph = useCallback(() => {
    const section = sectionRef.current;
    const p = pRef.current;
    if (!section || !p) return;
    if (isVisible(section.getBoundingClientRect())) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
    const currentYOffset =
      (window.innerHeight || document.documentElement.clientHeight) -
      section.getBoundingClientRect().top;
    p.style.opacity = `${calcRange([0, 1], {
      currentYOffset,
      scrollHeight: section.scrollHeight,
      delay: { start: 0.8, end: 1 },
    })}`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onShowParagraph, { passive: true });
    return () => {
      window.removeEventListener('scroll', onShowParagraph);
    };
  }, []);

  return (
    <section className="w-full relative" ref={sectionRef}>
      <div className="bg-gradient-to-t from-black dark:to-gray-900 to-white h-[120vh] w-full" />
      <div className="w-full">
        <img src="/images/earth.avif" alt="earth" />
      </div>
      <p
        className="fixed top-[50vh] left-[10vw] w-full z-20 text-2xl md:text-5xl hidden opacity-0 max-w-[80vw]"
        ref={pRef}
      >
        포스트를 넘어 콘텐츠로,
        <br />
        <br /> 독자에게 진심을 전하는 콘텐츠를 씁니다.
      </p>
    </section>
  );
}
