import React from 'react';
import './postList.css';
export const posts = [
    {
      name: '오주현',
      comment: '안녕하세요. 오주현입니다.',
      time: '2시간 전',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png', // 기본 아바타 이미지 URL
    },
    {
      name: '문소정',
      comment: '리액트로 프로젝트 만들고 있습니다.',
      time: '3시간 전',
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png', // 기본 아바타 이미지 URL
    },
    {
      name: '황지영',
      comment: '리액트 재미있어요.',
      time: '5시간 전',
      avatar: ' https://www.w3schools.com/w3images/avatar6.png', // 기본 아바타 이미지 URL
    },
    {
      name: '공덕현',
      comment: '리액트 벌써 3주차라니........',
      time: '5시간 전',
      avatar: ' https://www.w3schools.com/w3images/avatar5.png', // 기본 아바타 이미지 URL
    },
  ];
const Post = ({ name, comment, time, avatar }) => (
  <div className="comment">
    <img className="avatar" src={avatar} alt="user-avatar" />
    <div className="comment-details">
      <div className="user-name">{name}</div>
      <div className="comment-text">{comment}</div>
      <div className="comment-time">{time}</div>
    </div>
  </div>
);

export default function PostList() {
  return (
    <div className="comment-list">
      {posts.map((comment, index) => (
        <Post
          key={index}
          name={comment.name}
          comment={comment.comment}
          time={comment.time}
          avatar={comment.avatar}
        />
      ))}
    </div>
  );
}