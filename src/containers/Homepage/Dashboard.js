import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";
import Timeline from "../../components/Timeline";
import ImageAndCards from "../../components/ImageAndCards";
import MyUpdates from "../../components/MyUpdates";
import WhatYouNeedToKnow from "../../components/WhatYouNeedToKnow";
import KeyUpdates from "../../components/KeyUpdates";
import Button from "../../components/Button";

const Wrapper = styled.div`
  padding: 0rem 3rem 2rem 3rem;
  border-bottom: 1px solid rgb(212,212,212);
  background-color: #111111;
`;

const Top = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  flex: 2;
`;

const RightSide = styled.div`
  flex: 3;
`;

const ContentBoxes = styled.div`
  display: flex;
  gap: 2rem;
`;

const PersonalizeContentButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 2rem 0;
  color: white;
`;

const Dashboard = ({ personalizationOptions, setPersonalizationOptions }) => {
  const [startReading, clickedStartReading] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // Termporary, just to print the personalization options
  useEffect(() => {
    if (personalizationOptions.showMyUpdates) {
      clickedStartReading(true);
    }

    if (startReading) {
      setShowQuiz(false);
    }

    console.log(startReading)
  }, [personalizationOptions, startReading])

  return (
    <Wrapper>
      <Top>
        <LeftSide>
          <ImageAndCards />
        </LeftSide>
        <RightSide>
          {showQuiz ? <PersonalizationQuiz setPersonalizationOptions={setPersonalizationOptions} /> :
            !startReading ?
            <DashboardContent setShowQuiz={setShowQuiz}/> : null
          }
          {startReading && (personalizationOptions.favoriteTopics?.length > 0 || personalizationOptions.startReadingDate !== -1) ? <MyUpdates></MyUpdates> : (startReading && !showQuiz ? <DashboardContent setShowQuiz={setShowQuiz}/> : null)}
        </RightSide>
      </Top>
      <Timeline />
    </Wrapper>
  );
}

export default Dashboard;

const DashboardContent = ({setShowQuiz}) => {
  return (
    <>
      <ContentBoxes>
        <WhatYouNeedToKnow />
        <KeyUpdates />
      </ContentBoxes>
      <PersonalizeContentButton>
        <div style={{ marginBottom: '0.5rem' }}> Already have knowledge on this topic? </div>
        <Button onClick={() => setShowQuiz(true)}>Personalize the content</Button>
      </PersonalizeContentButton>
    </>
  )
}