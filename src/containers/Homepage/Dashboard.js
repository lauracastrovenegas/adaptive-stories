import React from "react";
import styled from "styled-components";
import PersonalizationQuiz from "../../components/PersonalizationQuiz";
import ImageAndCards from "../../components/ImageAndCards";

const Wrapper = styled.div`
  padding: 2rem 1rem;
  border: 2px solid black;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: horizontal;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      This is the Dashboard at the top of the homepage
      <InnerWrapper>
        <ImageAndCards/>
        <PersonalizationQuiz/>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Dashboard;