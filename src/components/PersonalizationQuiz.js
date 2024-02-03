import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 2rem;
  border: 1px solid grey;
  border-radius: 15px;
  margin: 2rem;
  margin: 2rem auto;
`;

const PersonalizationQuiz = () => {
  return (
    <Wrapper>
      This is the quiz
    </Wrapper>
  );
}

export default PersonalizationQuiz;