import React from 'react';

export default function () {
  return (
    <section className="section active">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <span className="text-lg text-slate-600 dark:text-zinc-400">
          제작 동기
        </span>
        <h1 className="text-4xl mt-2">왜 이러한 문서를 만들었나요</h1>
        <div className="w-8 mx-auto my-6 h-[2px] bg-slate-400" />
        <blockquote className="blockquote">
          <p className="text-slate-300">
            `더 가치있는 글을 작성하기 위한 목표`를 명시적으로 설정하는 과정이
            필요하다고 느꼈기 때문입니다.
          </p>
        </blockquote>
        <p className="my-8 indent-4">
          저는 2018년부터 지금까지 기술 블로그를 운영 중입니다. 블로그를 만든
          이유는 개발자로 취업을 하고 나서부터 경험한 지식들을 글로써 정리하고자
          하는 목적이었습니다. 하지만 운영 초반에는 글쓰기에 대한 노하우도
          부족했고 방문자도 많지 않다보니, 글을 쓰는 것이 마치 벽에 대고 소리를
          지르는 것처럼 공허하다는 느낌이 들었습니다.
        </p>
        <p className="my-8 indent-4">
          저는 이것이 글을 쓰는 이유와 목적, 즉 당위성에 대한 고민이 충분하지
          않았기 때문에 생긴 고민이라고 판단했습니다. 그래서 저는 글쓰기를 통해
          이루고자 하는 바가 무엇이며, 어떤 글을 쓰는 사람으로 기억되고 싶은지를
          고민했고, 이것을 포스트로 작성하기도 했습니다.
        </p>
        <p className="my-8 indent-4">
          이러한 고민 덕분에 저는 더 가치있는 글을 작성하기 위한 동기 부여를
          얻었습니다. 그러다 문득 이러한 원칙들을 좀 더 다듬어 공개적인 형태의
          매니페스토로 제작하고 싶다는 생각이 들었고, 본 문서를 제작했습니다.
        </p>
        <p className="my-8 indent-4">
          애자일 매니페스토(Agile Manifesto)가 소프트웨어 공학에서 널리 인정받는
          원칙인 것처럼, 누군가에게도 이 매니페스토가 기술 글쓰기의 원칙이 될 수
          있기를 바라며 그 내용을 공개합니다.
        </p>
      </div>
    </section>
  );
}
