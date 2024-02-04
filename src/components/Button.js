import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme';

const StyledButton = styled.button`
  background-color: ${theme.color.blue};
  border: none;
  border-radius: 2.5rem;
  color: white;
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
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
    color: ${theme.color.blue};
    border: 1px solid ${theme.color.blue};

    &:hover {
      color: ${theme.color.blueDark};
    }
  }
`;

const Button = ({fullWidth, secondary, ...props}) => {
  return (
    <StyledButton className={(fullWidth ? "fullWidth " : "") + (secondary ? "secondary" : "")} {...props} />
  );
};

export default Button;
