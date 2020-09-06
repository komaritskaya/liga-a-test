import React from 'react';
import styled from 'styled-components';
import { Post } from '../types';

interface PostItemProps {
  post: Post;
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

const PostItem: React.FC<PostItemProps> = ({post, filter}) => {
  const {title, body} = post;
  const {name, username} = post.user;
  
  const renderText = (text: string) => text.toLowerCase().startsWith(filter.toLowerCase()) ? (
    <React.Fragment>
      <Filter>{text.slice(0, filter.length)}</Filter>{text.slice(filter.length)} 
    </React.Fragment>
  ) : text;
  
  return (
    <Card>
      <Heading>{renderText(title)}</Heading>
      <Subtitle><b>{renderText(username)}</b> | {renderText(name)}</Subtitle>
      <Text>{renderText(body)}</Text>
    </Card>
  );
};

export default PostItem;