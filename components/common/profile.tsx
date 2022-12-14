import Image from 'next/image';
import React from 'react';

import cat from '@public/images/min.jpeg';

export default function Profile() {
  return (
    <div className="mx-auto flex max-w-xl flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
      <div className="rounded-full 4 w-24 h-24 overflow-hidden shadow-2xl border-4 border-gray-400 flex-shrink-0">
        <Image
          src={cat}
          alt="profile"
          className="object-cover"
          layout="responsive"
          width="100"
          height="100"
          loading="lazy"
          placeholder="blur"
        />
      </div>
      <div className="md:ml-5 flex flex-col space-y-2 justify-center">
        <p className="text-2xl font-medium">π§βπ» μ΄μ©μ€</p>
        <p className="text-base text-gray-700 dark:text-gray-200">
          (μ£Ό)λμ€μμ€μλ² νλ‘ νΈμλ κ°λ°μλ‘ κ·Όλ¬΄νκ³  μμ΅λλ€.
        </p>
      </div>
    </div>
  );
}
