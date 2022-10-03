import { calcRange, isClient, isVisible } from '@lib/utils';
import React, { useCallback, useEffect, useRef } from 'react';

export default function SixthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const setImageTranslateY = useCallback(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;
    if (!isVisible(section.getBoundingClientRect())) return;
    const currentYOffset =
      (window.innerHeight || document.documentElement.clientHeight) -
      section!.getBoundingClientRect().top;
    image.style.transform = `translateY(${calcRange([0, 50], {
      currentYOffset,
      scrollHeight: section.scrollHeight,
    })}px)`;
  }, [sectionRef.current, imageRef.current]);

  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.style.scale = '1.5';
  }, [imageRef.current]);

  useEffect(() => {
    window.addEventListener('scroll', setImageTranslateY, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', setImageTranslateY);
    };
  }, [setImageTranslateY]);

  return (
    <section className="section px-4 py-8" ref={sectionRef}>
      <div className="mx-auto flex max-w-4xl flex-col md:flex-row">
        <div className="flex-1 overflow-hidden md:h-[40rem] mx-auto md:my-auto md:p-6 rounded-lg">
          <img
            src="/images/focus.webp"
            alt="mic"
            className="object-cover rounded-lg will-change-transform"
            ref={imageRef}
          />
        </div>
        <div className="flex-1 md:p-10 mt-6 md:mt-0">
          <span className="text-lg text-slate-600 dark:text-zinc-400">
            글이 재미있다는 것은
          </span>
          <h1 className="text-4xl mt-2">
            일회성으로 소비되기보다는 오래 기억에 남을 수 있도록
          </h1>
          <div className="divide" />
          <p className="indent-4 my-8">
            일회성으로 정보를 얻고 잊혀지는 글이 아닌, 오랫동안 꾸준하게
            사랑받는 글이 되기 위해서는 한 번 읽는 것만으로도 독자에게 깊은
            인상을 남길 수 있어야 합니다.
          </p>
          <p className="indent-4 my-8">
            깊은 인상을 남기기 위한 가장 간단한 방법이 바로 재미라고 생각합니다.
            이는 비유와 묘사, 유머를 글 속의 정보와 적절히 섞어 작성하는 것으로
            얻을 수 있습니다. 시시콜콜한 농담에서부터 아예 작정하고 독특한
            콘셉트를 맞춘 글을 쓰는 이유가 바로 그러합니다.
          </p>
          <p className="indent-4 my-8">
            재미는 독자의 몰입과 이해를 돕고, 글의 분위기를 유쾌하게 유지시키는
            요소입니다. 이러한 경험은 독자에게 긍정적인 인식으로 각인되기
            때문에, 혹여나 독자가 특정 키워드를 듣기만 해도 내가 작성한 글이
            바로 떠오르게 만들 수도 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
