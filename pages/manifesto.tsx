import React from 'react';
import { NextPage } from 'next';
import FirstSection from '@components/manifesto/first-section';
import SecondSection from '@components/manifesto/second-section';
import ThirdSection from '@components/manifesto/thrid-section';

const Manifesto: NextPage = function () {
  return (
    <div className="pt-14 w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Manifesto;
