import React from 'react';
import PostItem from './post-item';

export default function PostList() {
  // 여기에서 데이터 불러올 예정
  return (
    <ul>
      {[1, 2, 3].map((i) => (
        <PostItem key={i} />
      ))}
    </ul>
  );
}
