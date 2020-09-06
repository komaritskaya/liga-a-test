import React, {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import PostList from './PostList';
import Search from './Search';

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
  const [filter, setFilter] = useState(``);

  const handleSearchChange = (value: string) => {
    setFilter(value);
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Search handleSearchChange={handleSearchChange} />
        <PostList filter={filter} />
      </Layout>
    </React.Fragment>
  );
};

export default App;