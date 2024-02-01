import React from "react";
import styled from "styled-components";
import Dashboard from "./Homepage/Dashboard";
import ArticleFeed from "./Homepage/ArticleFeed";

const PageWrapper = styled.div`
  padding: 2rem;
`;

const App = () => {
  return (
    <PageWrapper>
      <Dashboard/>
      <ArticleFeed/>
    </PageWrapper>
  );
}

export default App;
