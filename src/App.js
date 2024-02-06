import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./containers/Homepage/Dashboard";
import ArticleFeed from "./containers/Homepage/ArticleFeed";
import Navbar from './components/Navbar';

const PageWrapper = styled.div`
  padding: 0rem 0rem;
`;

const App = () => {
  const [personalizationOptions, setPersonalizationOptions] = useState({});
  const [subtopicSelected, setSubtopicSelected] = useState("All");

  return (
    <PageWrapper>
      <Navbar 
        personalizationOptions={personalizationOptions} 
        subtopicSelected={subtopicSelected}
        setSubtopicSelected={setSubtopicSelected}
      />
      <Dashboard 
        personalizationOptions={personalizationOptions} 
        setPersonalizationOptions={setPersonalizationOptions} 
      />
      <ArticleFeed />
    </PageWrapper>
  );
}

export default App;
