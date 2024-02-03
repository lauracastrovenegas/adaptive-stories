import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 2rem;
  border: 1px solid grey;
  border-radius: 15px;
  margin: 2rem;
`;

const ImageAndCards = () => {
  return (
    <Wrapper>
      This is the image/cards
    </Wrapper>
  );
}

export default ImageAndCards;