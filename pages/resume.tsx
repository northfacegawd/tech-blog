import TopImageSection from '@components/common/top-image-section';
import { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = function () {
  return (
    <TopImageSection
      imageUrl="/images/resume.webp"
      title="Resume"
      description="제 이력서와 포트폴리오를 추가할 예정입니다."
    />
  );
};

export default Resume;