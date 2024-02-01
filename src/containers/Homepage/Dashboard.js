import React from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";

const Wrapper = styled.div`
  padding: 2rem 1rem;
  border: 2px solid black;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      This is the Dashboard at the top of the homepage
      <PersonalizationQuiz/>
    </Wrapper>
  );
}

export default Dashboard;