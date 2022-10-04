import React from 'react';

export default function Profile() {
  return (
    <div className="mx-auto flex max-w-xl flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
      <div className="rounded-full 4 w-24 h-24 overflow-hidden shadow-2xl border-4 border-gray-400 flex-shrink-0">
        <img src="/images/min.jpeg" alt="profile" className="object-cover" />
      </div>
      <div className="ml-5 flex flex-col space-y-2 justify-center">
        <p className="text-2xl font-medium">🧑‍💻 이용준</p>
        <p className="text-base text-gray-700 dark:text-gray-200">
          (주)디앤에스에버 프론트엔드 개발자로 근무하고 있습니다.
        </p>
      </div>
    </div>
  );
}
