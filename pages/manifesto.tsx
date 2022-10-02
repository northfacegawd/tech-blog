import React from 'react';
import { NextPage } from 'next';
import FirstSection from '@components/manifesto/first-section';
import SecondSection from '@components/manifesto/second-section';
import ThirdSection from '@components/manifesto/thrid-section';
import ForthSection from '@components/manifesto/forth-section';

const Manifesto: NextPage = function () {
  return (
    <div className="pt-14 w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </div>
  );
};

export default Manifesto;
