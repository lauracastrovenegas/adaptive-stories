import React from "react";
import styled from "styled-components";
import { topicsList } from '../data/generalData.js';

const NavWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  gap: 25px;
  // background-color: #111111;
  // color: white;

  h1 {
    font-weight: 500;
    font-size: 3rem;

    &:hover{
      cursor: pointer;
    }
  }
`
const Subtopics = styled.div`
  display: flex;
  gap: 25px;
  margin: auto 0rem auto auto;

  Subtopic {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: ${props => props.selected ? '800' : '400'};
    font-size: 1.3rem;
    // color: white;

   &:hover {
      cursor: pointer;
    }
  }
`

const Subtopic = styled.h2`
  font-family: 'Libre Franklin', sans-serif;
  font-weight: ${props => props.selected ? '800' : '400'};
  font-size: 1.3rem;
  // color: white;

  &:hover {
    cursor: pointer;
  }
`

const Navbar = ({ personalizationOptions, subtopicSelected, setSubtopicSelected }) => {

  return (
    <NavWrapper>
      <h1 onClick={() => setSubtopicSelected("All")} >ISRAEL-GAZA WAR</h1>
      <Subtopics>
        {personalizationOptions.favoriteTopics ?
          personalizationOptions.favoriteTopics.map((topicIdx) => (
            <Subtopic
              selected={topicsList[subtopicSelected] === topicsList[topicIdx]}
              onClick={() => setSubtopicSelected(topicIdx)}>
              {topicsList[topicIdx]}
            </Subtopic>
          ))
          : topicsList.slice(0, 4).map((topic, idx) => (
            <Subtopic
              selected={topicsList[subtopicSelected] === topic}
              onClick={() => setSubtopicSelected(idx)}>
              {topic}
            </Subtopic>
          ))}
      </Subtopics>
    </NavWrapper>
  )
}

export default Navbar;