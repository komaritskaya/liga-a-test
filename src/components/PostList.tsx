import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import { Post } from '../types';

interface PostListProps {
  filter: string;
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({filter, posts}) => {
  const [shownPosts, setShownPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    if (filter) {
      setShownPosts(posts.filter((post) => (
        post.body.toLowerCase().startsWith(filter.toLowerCase()) ||
        post.title.toLowerCase().startsWith(filter.toLowerCase()) ||
        post.user.name.toLowerCase().startsWith(filter.toLowerCase()) ||
        post.user.username.toLowerCase().startsWith(filter.toLowerCase())
      )));
    } else {
      setShownPosts(posts);
    }
  }, [filter, posts]);
  
  const renderPosts = () => {
    if (!posts.length) {
      return `Loading...`;
    }
    return shownPosts.map((post) => (
      <PostItem
        key={post.id}
        post={post}
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