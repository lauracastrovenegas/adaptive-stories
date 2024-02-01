import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 1rem;
  border: 2px solid black;
`;

const ArticleFeed = () => {
  return (
    <Wrapper>
      This is the Article Feed at the bottom of the homepage
    </Wrapper>
  );
}

export default ArticleFeed;