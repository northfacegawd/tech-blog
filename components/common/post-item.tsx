import React from 'react';

export default function PostItem() {
  return (
    <li className="first-of-type:mt-0 first-of-type:border-0 mt-8 border-t-2 pt-4">
      <a className="cursor-pointer">
        <article className="article">
          <span className="article-category">κ°λ°</span>
          <h5 className="article-title">
            π&nbsp;μ λ΄κ° μμ±ν JavaScript Date μ½λκ° μλ²μμλ λ€λ₯΄κ²
            λ³΄μ΄λ κ±°μ£ ?
          </h5>
          <p className="article-sub-title">
            JavaScriptμμ νν νΌλλλ Date κ°μ²΄μ λν κ°λμ μ λ¦¬ν΄λ΄λλ€.
          </p>
          <p className="article-date">2022-09-08</p>
        </article>
      </a>
    </li>
  );
}
