import React from 'react';
import { NextPage } from 'next';
import FirstSection from '@components/manifesto/first-section';
import SecondSection from '@components/manifesto/second-section';

const Manifesto: NextPage = function () {
  return (
    <div className="pt-14 w-full">
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Manifesto;
