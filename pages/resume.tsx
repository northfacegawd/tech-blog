import { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = function () {
  return (
    <div
      className="h-[70vh] z-0"
      style={{
        backgroundImage: 'url(/images/resume.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <p className="w-full max-w-3xl mx-auto z-10 pt-[40vh] px-4 md:text-4xl text-shadow-xl shadow-black text-white">
        Resume
      </p>
      <p className='"w-full max-w-3xl mx-auto mt-4 z-10 px-4 md:text-2xl text-shadow-xl shadow-black text-white'>
        제 이력서와 포트폴리오를 추가할 예정입니다.
      </p>
    </div>
  );
};

export default Resume;
