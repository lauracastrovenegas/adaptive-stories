import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";
import Timeline from "../../components/Timeline";
import ImageAndCards from "../../components/ImageAndCards";
import MyUpdates from "../../components/MyUpdates";

const Wrapper = styled.div`
  padding: 0rem 3rem 2rem 3rem;
  border-bottom: 1px solid rgb(212,212,212);
  // background-color: #111111;
`;

const Top = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  width: 100%;
`;

const RightSide = styled.div`
  width: 100%;
`;

const Dashboard = ({ personalizationOptions, setPersonalizationOptions }) => {
  const [startReading, clickedStartReading] = useState(false);
  // Termporary, just to print the personalization options
  useEffect(() => {
    if (personalizationOptions.showMyUpdates) {
      clickedStartReading(true);
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
          <PersonalizationQuiz setPersonalizationOptions={setPersonalizationOptions} />
          {startReading && <MyUpdates selected_idx={personalizationOptions.startReadingDate}></MyUpdates>}
        </RightSide>
      </Top>
      <Timeline />
    </Wrapper>
  );
}

export default Dashboard;