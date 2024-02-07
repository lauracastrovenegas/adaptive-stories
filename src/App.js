import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./containers/Homepage/Dashboard";
import ArticleFeed from "./containers/Homepage/ArticleFeed";
import Navbar from './components/Navbar';
import IconButtonGroup from "./components/IconButtonGroup";

const PageWrapper = styled.div`
  padding: 0rem 0rem;
`;

const App = () => {
  const [personalizationOptions, setPersonalizationOptions] = useState({});
  const [subtopicSelected, setSubtopicSelected] = useState("All");
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <PageWrapper>
      <Navbar 
        personalizationOptions={personalizationOptions} 
        subtopicSelected={subtopicSelected}
        setSubtopicSelected={setSubtopicSelected}
      />
      <IconButtonGroup
        showQuiz={showQuiz}
        setShowQuiz={setShowQuiz}
      />
      <Dashboard 
        personalizationOptions={personalizationOptions} 
        setPersonalizationOptions={setPersonalizationOptions} 
        showQuiz={showQuiz}
        setShowQuiz={setShowQuiz}
      />
      <ArticleFeed />
    </PageWrapper>
  );
}

export default App;
