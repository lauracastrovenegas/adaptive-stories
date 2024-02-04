import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";
import Timeline from "../../components/Timeline";

const Wrapper = styled.div`
  padding: 2rem 1rem;
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

  // Termporary, just to print the personalization options
  useEffect(() => {
    console.log(personalizationOptions)
  }, [personalizationOptions])

  return (
    <Wrapper>
      <Top>
        <LeftSide>
          <h1>ISRAEL-GAZA WAR</h1>
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