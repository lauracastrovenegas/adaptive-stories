import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  gap: 25px;
  width: ${props => props.showSubtopics ? "auto" : "fit-content"};

  h1 {
    font-weight: 500;
    font-size: 3rem;
  }
`
const Subtopics = styled.div`
  display: ${props => props.showSubtopics ? "flex" : "none"};
  gap: 25px;
  margin: auto 0rem auto auto;

  h2 {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    text-decoration: none;
    color: black;

   &:hover {
      cursor: pointer;
    }
  }
`

const Navbar = ({showSubtopics = true}) => {
  return (
    <NavWrapper showSubtopics={showSubtopics}>
      <h1>ISRAEL-GAZA WAR</h1>
      <Subtopics showSubtopics={showSubtopics}>
        <h2>Israeli hostages</h2>
        <h2>ICJ genocide case</h2>
        <h2>Gaza devastation</h2>
        <h2>Who are the Houthis?</h2>
      </Subtopics>
    </NavWrapper>
  )
}

export default Navbar;