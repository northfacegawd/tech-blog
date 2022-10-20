import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
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
      <p>
        이 블로그는{' '}
        <a
          href="https://wormwlrm.github.io/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer underline-offset-4 decoration-dashed underline"
        >
          지그재그님의 블로그
        </a>
        를 참고하여 제작되었습니다.
      </p>
    </footer>
  );
}
