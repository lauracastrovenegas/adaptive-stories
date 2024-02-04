import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";
import Timeline from "../../components/Timeline";
import ImageAndCards from "../../components/ImageAndCards";

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
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: horizontal;
`;

const Dashboard = () => {
  const [personalizationOptions, setPersonalizationOptions] = useState({});

  // Termporary, just to print the personalization options
  useEffect(() => {
    console.log(personalizationOptions)
  }, [personalizationOptions])

  return (
    <Wrapper>
      <Top>
        <LeftSide>
          <h1>ISRAEL-GAZA WAR</h1>
          <ImageAndCards/>
        </LeftSide>
        <RightSide>
          <PersonalizationQuiz setPersonalizationOptions={setPersonalizationOptions}/>
        </RightSide>
      </Top>
      <Timeline />
    </Wrapper>
  );
}

export default Dashboard;