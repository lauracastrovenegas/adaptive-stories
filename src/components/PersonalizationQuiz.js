import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { theme } from "../theme.js";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const topicsList = [
  "Israeli hostages",
  "Gaza devastation",
  "ICJ genocide case",
  "Who are the Huthis?",
  "U.S. role in Israel-Hamas War",
  "History of Israel-Palestine Conflict",
  "Global demonstration"
];

const events = [
  {
    id: 0,
    title: "Israeli leaders vow to continue war in reactions to ICJ ruling",
    date: "January 26, 2024"
  },
  {
    id: 1,
    title: "U.N. court orders Israel to halt killings in Gaza",
    date: "January 24, 2024"
  },
  {
    id: 2,
    title: "Two more attacks on US positions in Iraq",
    date: "January 23, 2024"
  },
  {
    id: 3,
    title: "Biden to deploy CIA director to help broker Gaza deal",
    date: "January 20, 2024"
  }
]

const Wrapper = styled.div`
  flex: 2;
  display: ${props => props.hidden ? "none" : "flex"};
  flex-direction: column;
  gap: 20px;
  width: fit-content;
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 2rem;
  margin: 2rem auto;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.30);

  h3 {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  }

  &.hidden {
    display: none;
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

  .vertical-timeline{
    padding: 0.5rem 0;
  }

  .vertical-timeline::before {
    left: 6px;
  }

  .vertical-timeline-element {
    margin: 1rem 0;

    p {
      font-size: 14px;
      line-height: normal;
      margin: 1rem 0;
    }

    span {
      font-weight: 700;
    }

    :hover {
      cursor: pointer;
    }
  }

  .date {
    display: none;
  }

  .icon {
    background: ${theme.color.blue};
    height: 15px;
    width: 15px;
    top: 15px;
  }

  .textBox {
    background-color: white;
    border: 1px solid ${theme.color.blue};
    border-radius: 10px;
    padding: 0 1rem;
  }

  .selected {
    background-color: ${theme.color.blue};
    color: white;
  }
`;

const PersonalizationQuiz = ({ setPersonalizationOptions }) => {
  const [topicsSelected, setTopicsSelected] = useState([]);
  const [dateSelected, setDateSelected] = useState(-1);
  const [hidden, setHidden] = useState(false);

  const handleSubmitOptions = () => {
    setPersonalizationOptions({
      favoriteTopics: topicsSelected,
      startReadingDate: dateSelected
    })
    setHidden(true);
  }

  return (
    <Wrapper hidden={hidden}>
      <Row>
        <Topics>
          <h3>I want to learn more about...</h3>
          {topicsList.map((item, idx) => (
            <Checkbox labelText={item} onSelect={() => setTopicsSelected([...topicsSelected, idx])} />
          ))}
        </Topics>
        <Timeline>
          <h3>I want to see updates starting from...</h3>
          <VerticalTimeline layout="1-column-left" lineColor={theme.color.blue}>
            {events.map((event, idx) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: "8px solid " + theme.color.blue }}
                date={event.date}
                dateClassName="date"
                iconClassName="icon"
                textClassName={"textBox" + (idx === dateSelected ? " selected" : "")}
                onTimelineElementClick={() => idx === dateSelected ? setDateSelected(-1) : setDateSelected(idx)}
              >
                <p><span>{event.date}</span> - {event.title}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Timeline>
      </Row>
      <Row className="buttons">
        <Button secondary onClick={() => setHidden(true)}>Skip Personalization</Button>
        <Button onClick={() => handleSubmitOptions()}>Start Reading</Button>
      </Row>
    </Wrapper>
  );
}

export default PersonalizationQuiz;