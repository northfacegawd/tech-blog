import React from 'react';

export default function SecondSection() {
  return (
    <section className="section">
      <div className="max-layout px-4 py-8">
        <span className="text-lg text-slate-600 dark:text-zinc-400">
          기술 글쓰기의 핵심은
        </span>
        <h1 className="text-4xl mt-2">
          기술에 대한 나의 접근 방식을 표현하는 것
        </h1>
        <div className="w-8 mx-auto my-6 h-[2px] bg-slate-400" />
        <blockquote className="blockquote">
          <p className="text-slate-300">
            인터넷에서 흔히 찾을 수 있는 지식을 나만의 방식으로 이해하고, 나만의
            방식으로 표현하여, 나만의 정체성을 구축하는 것
          </p>
        </blockquote>
        <p className="my-8 indent-4">
          책이나 강의에서 본 내용을 요약해 글을 쓴다면, 이것도 기술 글쓰기라고
          할 수 있을까요? 허나 그런 글은 굳이 내가 아니더라도 쓸 수 있는
          글입니다. 그것보다 특별한 글을 쓸 수 있는 방법은 없을까요?
        </p>
        <p className="my-8 indent-4">
          오랜 고민 끝에 깨달은 정답은 다음과 같았습니다. `인터넷에서 흔히 찾을
          수 있는 지식을 나만의 방식으로 이해하고 나만의 방식으로 표현하여,
          나만의 정체성을 구축하는 것`.
        </p>
        <p className="my-8 indent-4">
          즉, 기술 그 자체도 중요하지만 그것을 나만의 방식으로 정리한 이야기가
          더 가치있다고 생각했습니다. 저는 이러한 글을 콘텐츠라고 부르며,
          콘텐츠가 쌓인다면 이것이 곧 개인 브랜딩으로 이어진다고 생각합니다.
        </p>
        <p className="my-8 indent-4">
          지금부터는 좋은 콘텐츠를 만들기 위해 세운 저만의 기술 글쓰기 원칙
          4가지를 소개합니다.
        </p>
      </div>
    </section>
  );
}
