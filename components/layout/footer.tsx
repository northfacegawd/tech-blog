import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 bg-gray-200 flex flex-col justify-center items-center space-y-5 font-light text-gray-700 dark:bg-black/50 dark:text-gray-300">
      <p className="text-center">Copyright © 2022, All right reserved.</p>
      <p className="text-center">
        Built with{' '}
        <a
          href="https://www.nextjs.org"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer underline underline-offset-4 decoration-dashed"
        >
          NextJS
        </a>
      </p>
    </footer>
  );
}
