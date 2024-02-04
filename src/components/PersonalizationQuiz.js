import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Checkbox from "./Checkbox";

const topicsList = [
  "Israeli hostages",
  "Gaza devastation",
  "ICJ genocide case",
  "Who are the Huthis?",
  "U.S. role in Israel-Hamas War",
  "History of Israel-Palestine Conflict",
  "Global demonstration"
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: fit-content;
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 2rem;
  margin: 2rem auto;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.30);

  h2 {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
  }
`;

const Topics = styled.div`
  label {
    margin: 0.5rem 0rem;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;

  &.buttons {
    margin-left: auto;
  }
`;

const Timeline = styled.div`

`;

const PersonalizationQuiz = () => {
  return (
    <Wrapper>
      <Row>
        <Topics>
          <h2>I want to learn more about...</h2>
          {topicsList.map(item => (
            <Checkbox labelText={item} />
          ))}
        </Topics>
        <Timeline>
          <h2>I want to see updates starting from...</h2>

        </Timeline>
      </Row>
      <Row className="buttons">
        <Button secondary type="submit">Skip Personalization</Button>
        <Button type="submit">Start Reading</Button>
      </Row>
    </Wrapper>
  );
}

export default PersonalizationQuiz;