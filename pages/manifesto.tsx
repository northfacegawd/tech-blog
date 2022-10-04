import React from 'react';
import { NextPage } from 'next';
import FirstSection from '@components/manifesto/first-section';
import SecondSection from '@components/manifesto/second-section';
import ThirdSection from '@components/manifesto/thrid-section';
import ForthSection from '@components/manifesto/forth-section';
import FifthSection from '@components/manifesto/fifth-section';
import SixthSection from '@components/manifesto/sixth-section';
import SeventhSection from '@components/manifesto/seventh-section';

const Manifesto: NextPage = function () {
  return (
    <>
      <div
        className="h-[70vh] z-0"
        style={{
          backgroundImage: 'url(/images/manifesto.webp)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <p className="w-full max-w-3xl mx-auto z-10 pt-[40vh] px-4 md:text-4xl text-shadow-xl shadow-black text-white">
          Manifesto
        </p>
        <p className='"w-full max-w-3xl mx-auto mt-4 z-10 px-4 md:text-2xl text-shadow-xl shadow-black text-white'>
          제 이력서와 포트폴리오를 추가할 예정입니다.
        </p>
      </div>
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
