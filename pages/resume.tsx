import Profile from '@components/common/profile';
import TopImageSection from '@components/common/top-image-section';
import { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = function () {
  return (
    <>
      <TopImageSection
        category="resume"
        title="Resume"
        description="제 이력서와 포트폴리오를 추가할 예정입니다."
      />
      <div className="w-full max-w-3xl px-4 py-14 mx-auto">
        <Profile />
      </div>
    </>
  );
};

export default Resume;
