import React from 'react';
import type { NextPage } from 'next';
import TopImageSection from '@components/common/top-image-section';
import Profile from '@components/common/profile';

const Home: NextPage = function () {
  return (
    <>
      <TopImageSection
        category="home"
        title="이용준의 개발 블로그"
        description="잘부탁드립니다:)"
      />
      <div className="py-8 px-4 section">
        <Profile />
        <div className="border-b-[3px] my-8 mx-auto max-w-xl rounded-full" />
        <section className="max-w-3xl mx-auto">
          <span className="text-lg text-slate-600 dark:text-zinc-400">
            새로운 소식
          </span>
          <h1 className="text-4xl mt-2 text-gray-700 dark:text-gray-300 mb-8">
            최신 포스트를 살펴보세요
          </h1>
          <ul>
            {[1, 2, 3].map((i) => (
              <li
                className="first-of-type:mt-0 first-of-type:border-0 mt-8 border-t-2 pt-4"
                key={i}
              >
                <a>
                  <article className="flex flex-col space-y-1 md:space-y-3">
                    <span className="article-category">개발</span>
                    <h5 className="article-title">
                      🕘&nbsp;왜 내가 작성한 JavaScript Date 코드가 서버에서는
                      다르게 보이는 거죠?
                    </h5>
                    <p className="article-sub-title">
                      JavaScript에서 흔히 혼동되는 Date 객체에 대한 개념을
                      정리해봅니다.
                    </p>
                    <p className="article-date">2022-09-08</p>
                  </article>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
