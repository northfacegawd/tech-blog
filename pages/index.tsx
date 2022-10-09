import React from 'react';
import type { NextPage } from 'next';
import TopImageSection from '@components/common/top-image-section';
import Profile from '@components/common/profile';
import Chevron from '@components/icons/chevron';
import PostList from '@components/common/post-list';
import Link from 'next/link';

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
        <section className="max-w-2xl mx-auto">
          <span className="text-lg text-slate-600 dark:text-zinc-400">
            새로운 소식
          </span>
          <h1 className="text-4xl mt-2 text-gray-700 dark:text-gray-300 mb-8">
            최신 포스트를 살펴보세요
          </h1>
          <PostList />
          <Link href="/posts">
            <a
              className="bg-primary flex p-3 rounded-lg mt-8 mx-auto min-w-[30%] max-w-[50%] justify-center items-center hover:brightness-105 transition-all duration-300"
              type="button"
            >
              <Chevron arrowPosition="down" className="mr-2" />더 살펴보기
            </a>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
