import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";
import Timeline from "../../components/Timeline";
import ImageAndCards from "../../components/ImageAndCards";
import Button from "../../components/Button";
import MyUpdates from "../../components/MyUpdates";

const Wrapper = styled.div`
  padding: 0rem 1rem 2rem 1rem;

  h1 {
    font-weight: 500;
    font-size: 3rem;
  }
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

const Dashboard = () => {
  const [personalizationOptions, setPersonalizationOptions] = useState({});
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
          <h1>ISRAEL-GAZA WAR</h1>
          <ImageAndCards />
        </LeftSide>
        <RightSide>
          <PersonalizationQuiz setPersonalizationOptions={setPersonalizationOptions} />
          {startReading && <MyUpdates></MyUpdates>}
        </RightSide>
      </Top>
      <Timeline />
    </Wrapper>
  );
}

export default Dashboard;