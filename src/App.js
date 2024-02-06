import React from "react";
import styled from "styled-components";
import Dashboard from "./containers/Homepage/Dashboard";
import ArticleFeed from "./containers/Homepage/ArticleFeed";
import Navbar from './components/Navbar';

const PageWrapper = styled.div`
  padding: 0rem 2rem;
`;

const App = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Dashboard />
      <ArticleFeed />
    </PageWrapper>
  );
}

export default App;
