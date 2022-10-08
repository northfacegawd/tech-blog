import React from 'react';

export default function PostItem() {
  return (
    <li className="first-of-type:mt-0 first-of-type:border-0 mt-8 border-t-2 pt-4">
      <a className="cursor-pointer">
        <article className="article">
          <span className="article-category">개발</span>
          <h5 className="article-title">
            🕘&nbsp;왜 내가 작성한 JavaScript Date 코드가 서버에서는 다르게
            보이는 거죠?
          </h5>
          <p className="article-sub-title">
            JavaScript에서 흔히 혼동되는 Date 객체에 대한 개념을 정리해봅니다.
          </p>
          <p className="article-date">2022-09-08</p>
        </article>
      </a>
    </li>
  );
}
