import { calcRange, isClient, isVisible } from '@lib/utils';
import React, { useCallback, useEffect, useRef } from 'react';

export default function ForthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const setImageTranslateY = useCallback(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;
    const currentYOffset =
      (window.innerHeight || document.documentElement.clientHeight) -
      section!.getBoundingClientRect().top;
    image.style.transform = `translateY(${calcRange([0, 40], {
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
        <div className="flex-1 overflow-hidden md:h-[32rem] mx-auto md:my-auto md:p-6 rounded-lg">
          <img
            src="/images/mic.jpeg"
            alt="mic"
            className="h-full w-auto object-cover rounded-lg"
            ref={imageRef}
          />
        </div>
        <div className="flex-1 md:p-10 mt-6 md:mt-0">
          <span className="text-lg text-slate-600 dark:text-zinc-400">
            글이 읽기 쉽다는 것은
          </span>
          <h1 className="text-4xl mt-2">그 자체가 하나의 발표 대본이라는 것</h1>
          <div className="divide" />
          <p className="indent-4 my-8">
            읽기 쉬운 글은 서론과 본론, 결론의 구조가 명확합니다. 글의 주제와
            대상 독자, 요약, 기대할 수 있는 바 등은 초반부에 언급하여 독자가
            글의 정보를 한 눈에 파악할 수 있게 돕습니다.
          </p>
          <p className="indent-4 my-8">
            또한 전체적인 글의 흐름이 물 흐르듯 자연스럽게 이어집니다. 이를
            위해서는 연속되는 문단이나 문장 간의 분위기 전환이 매끄럽도록 특히
            신경을 써야 합니다. 인과, 반전, 강조, 병렬, 예시 등의 관계에 맞추어
            적절한 문장 구조를 잡습니다.
          </p>
          <p className="indent-4 my-8">
            문장 구조에도 디테일한 부분도 놓치지 않아야 합니다. 문장이 너무
            길지는 않은지, 한 호흡에 읽을 수 있는지, 맞춤법을 잘 지켰는지,
            용어가 혼용되어 일관성을 해치지 않는지 등을 파악합니다.
          </p>
          <p className="indent-4 my-8">
            그래서 저는 글을 쓸 때 마치 발표 대본을 준비한다고 생각하며 글을
            씁니다. 즉, 읽기 쉬운 글은 그 자체를 소리 내어 읽는 것만으로도
            완성된 발표를 할 수 있을 정도의 수준이어야 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
