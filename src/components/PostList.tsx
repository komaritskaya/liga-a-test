import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PostItem from './PostItem';
import { Post, User } from '../types';

interface PostListProps {
  filter: string;
}

const PostList: React.FC<PostListProps> = ({filter}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [shownPosts, setShownPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_POSTS_URL as string)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);
  
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_USERS_URL as string)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
  
  useEffect(() => {
    if (filter) {
      setShownPosts(posts.filter((post) => post.body.startsWith(filter)))
    } else {
      setShownPosts(posts);
    }
  }, [filter, posts]);
  
  const renderPosts = () => {
    if (!posts.length && !users.length) {
      return `Loading...`;
    }
    return shownPosts.map((post) => (
      <PostItem
        key={post.id}
        post={post}
        user={users.find((user) => user.id === post.userId) as User}
        filter={filter}
      />
    ));
  }

  return (
    <div>
      {renderPosts()}
    </div>
  );
};

export default PostList;