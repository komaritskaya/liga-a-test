import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import PostList from './PostList';
import Search from './Search';
import { RawPost, Post, User } from '../types';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: lightgray;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Layout = styled.div`
  margin: 50px;
`;

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState(``);
  
  useEffect(() => {
    const usersRequest = axios.get(process.env.REACT_APP_USERS_URL as string);
    const postsRequest = axios.get(process.env.REACT_APP_POSTS_URL as string);
    axios.all([usersRequest, postsRequest])
      .then(
        axios.spread((...responses) => {
          const usersResponse = responses[0].data;
          const postsResponse = responses[1].data;
          setPosts(postsResponse.map((post: RawPost) => ({
            ...post, user: usersResponse.find((user: User) => user.id === post.userId)
          })));
        })
      )
      .catch(err => console.log(err));
  }, []);

  const handleSearchChange = useCallback((value: string) => setFilter(value), []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Search handleSearchChange={handleSearchChange} />
        <PostList filter={filter} posts={posts} />
      </Layout>
    </React.Fragment>
  );
};

export default App;