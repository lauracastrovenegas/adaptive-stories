import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme.ts';

const StyledButton = styled.button`
  background-color: ${theme.color.blue};
  border: none;
  border-radius: 2.5rem;
  color: white;
  font-weight: 700;
  padding: 0.8rem 1.875rem;
  font-size: 1.2rem;
  width: fit-content;

  &:hover {
    background-color: ${theme.color.blueDark};
    cursor: pointer;
  }

  &.fullWidth {
    width: auto;
  }

  &.secondary {
    background-color: white;
    color: black;
    border: 1px solid gray;
  }
`;

const Button = ({fullWidth, secondary, ...props}) => {
  return (
    <StyledButton className={(fullWidth ? "fullWidth " : "") + (secondary ? "secondary" : "")} {...props} />
  );
};

export default Button;
