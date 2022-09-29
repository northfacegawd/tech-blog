import React from 'react';

export default function ThirdSection() {
  return (
    <section className="section active px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <span className="text-lg text-slate-600 dark:text-zinc-400">
          매니페스토
        </span>
        <h1 className="text-4xl mt-2">나의 기술 글쓰기 4원칙</h1>
        <div className="w-8 mx-auto my-6 h-[2px] bg-slate-400" />
      </div>
      <div className="mx-auto columns-1 md:columns-2 max-w-4xl">
        <div className="w-full mb-6 card" />
        <div className="w-full mb-6 card" />
        <div className="w-full mb-6 card" />
        <div className="w-full mb-6 card" />
      </div>
    </section>
  );
}
