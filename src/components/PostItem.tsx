import React from 'react';
import styled from 'styled-components';
import { Post, User } from '../types';

interface PostItemProps {
  post: Post;
  user: User;
  filter: string;
};

const Card = styled.article`
  width: 100%;
  border-radius: 10px;
  border: 2px solid tomato;
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
`;
const Heading = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: tomato;
`;
const Subtitle = styled.p`
  font-style: italic;
`;
const Text = styled.p`
  color: gray;
`;
const Filter = styled.span`
  font-weight: 900;
  color: black;
`;

const PostItem: React.FC<PostItemProps> = ({post, user, filter}) => {
  return (
    <Card>
      <Heading>{post.title}</Heading>
      <Subtitle><b>{user.username}</b> | {user.name}</Subtitle>
      <Text><Filter>{filter}</Filter>{post.body.slice(filter.length)}</Text>
    </Card>
  );
};

export default PostItem;