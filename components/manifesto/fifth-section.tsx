import { calcRange, isClient, isVisible } from '@lib/utils';
import React, { useCallback, useEffect, useRef } from 'react';

export default function FifthSection() {
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
    <section className="section active px-4 py-8" ref={sectionRef}>
      <div className="mx-auto flex max-w-4xl flex-col-reverse md:flex-row">
        <div className="flex-1 md:p-10 mt-6 md:mt-0">
          <span className="text-lg text-slate-600 dark:text-zinc-400">
            글이 친절하다는 것은
          </span>
          <h1 className="text-4xl mt-2">
            글을 하나의 제품으로, 독자를 하나의 고객으로
          </h1>
          <div className="divide" />
          <p className="indent-4 my-8">
            많은 IT 회사와 개발자들은 사용자에게 좋은 경험을 제공하고자
            노력합니다. 좋은 사용자 경험은 그들의 비즈니스를 성장시키는 동력이
            되기 때문입니다.
          </p>
          <p className="indent-4 my-8">
            마찬가지로 글이 하나의 제품라고 가정해봅시다. 내가 작성한 글이
            누군가에게 읽힌다면, 무엇보다도 `시간을 내서 나의 글을 읽어주는
            독자의 경험이 가장 우선시 되어야 하는 게 아닐까?`라는 생각이
            들었습니다.
          </p>
          <p className="indent-4 my-8">
            글을 쓰는 것 역시 마찬가지입니다. 글의 어조를 친절하고 공손하게
            유지하며, 배경 지식이 부족한 독자도 쉽게 이해할 수 있을 정도로
            충분히 상세하게 설명을 작성합니다. 무엇보다도 누군가에게 설명하듯이
            개념을 정리하는 행위가 꽤 훌륭한 학습 방법인 것은 다들 알고 계실
            겁니다.
          </p>
          <p className="indent-4 my-8">
            독자의 입장을 배려하는 글쓰기는 적극적인 피드백과 재방문을
            유도합니다. 이러한 반응들을 연료 삼아 더 나은 글을 쓰기 위한
            원동력으로 사용합니다.
          </p>
        </div>
        <div className="flex-1 overflow-hidden md:h-[40rem] mx-auto md:my-auto md:p-6 rounded-lg">
          <img
            src="/images/UX.webp"
            alt="mic"
            className="object-cover rounded-lg will-change-transform"
            ref={imageRef}
          />
        </div>
      </div>
    </section>
  );
}
