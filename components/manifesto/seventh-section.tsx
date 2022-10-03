import { calcRange, isVisible } from '@lib/utils';
import React, { useCallback, useEffect, useRef } from 'react';

export default function SeventhSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const onShowParagraph = useCallback(() => {
    const section = sectionRef.current;
    const p = pRef.current;
    const image = imageRef.current;
    if (!section || !p || !image) return;
    if (isVisible(section.getBoundingClientRect())) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
    const { scrollHeight } = section;
    const currentYOffset =
      (window.innerHeight || document.documentElement.clientHeight) -
      section.getBoundingClientRect().top;
    p.style.opacity = `${calcRange([0, 1], {
      currentYOffset,
      scrollHeight,
      delay: { start: 0.6, end: 0.85 },
    })}`;
    image.style.transform = `translate3d(${calcRange([0, -5], {
      currentYOffset,
      scrollHeight,
      delay: { start: 0.6, end: 1 },
    })}%,0,0)`;
  }, [sectionRef.current, pRef.current, imageRef.current]);

  useEffect(() => {
    window.addEventListener('scroll', onShowParagraph, { passive: true });
    return () => {
      window.removeEventListener('scroll', onShowParagraph);
    };
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    image.style.scale = '1.2';
  }, [imageRef.current]);

  return (
    <section className="w-full relative" ref={sectionRef}>
      <div className="bg-gradient-to-t from-black dark:to-gray-900 to-white h-[120vh] w-full" />
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <img
          src="/images/earth.avif"
          alt="earth"
          className="object-cover"
          ref={imageRef}
        />
      </div>
      <p
        className="transition-colors duration-300 fixed top-[55vh] md:top-[50vh] left-[10vw] w-full z-20 text-2xl md:text-5xl hidden opacity-0 max-w-[80vw] text-white"
        ref={pRef}
      >
        포스트를 넘어 콘텐츠로,
        <br />
        <br /> 독자에게 진심을 전하는 콘텐츠를 씁니다.
      </p>
    </section>
  );
}
