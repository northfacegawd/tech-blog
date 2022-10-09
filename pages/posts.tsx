import React from 'react';
import { NextPage } from 'next';
import PostList from '@components/common/post-list';
import TopImageSection from '@components/common/top-image-section';

const Posts: NextPage = function () {
  return (
    <>
      <TopImageSection
        category="posts"
        title="Posts"
        description="전체 포스트 목록을 살펴보세요"
      />
      <section className="section">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="border-b-[3px] my-8 w-full rounded-full" />총{' '}
          <span>3개의</span> 포스트가 있어요
          <PostList />
        </div>
      </section>
    </>
  );
};

export default Posts;
