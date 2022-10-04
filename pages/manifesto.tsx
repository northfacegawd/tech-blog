import React from 'react';
import { NextPage } from 'next';
import FirstSection from '@components/manifesto/first-section';
import SecondSection from '@components/manifesto/second-section';
import ThirdSection from '@components/manifesto/thrid-section';
import ForthSection from '@components/manifesto/forth-section';
import FifthSection from '@components/manifesto/fifth-section';
import SixthSection from '@components/manifesto/sixth-section';
import SeventhSection from '@components/manifesto/seventh-section';
import TopImageSection from '@components/common/top-image-section';

const Manifesto: NextPage = function () {
  return (
    <>
      <TopImageSection
        imageUrl="/images/manifesto.webp"
        title="Manifesto"
        description="제 블로그에 담고자 하는 글쓰기 원칙을 소개합니다."
      />
      <div className="w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </div>
    </>
  );
};

export default Manifesto;
