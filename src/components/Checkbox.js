import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../theme.ts';

const CheckboxContainer = styled.div`
  margin: 2px 0px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? theme.color.blue : 'white')};
  border: 1px solid ${theme.color.blue};
  border-radius: 6px;
  transition: all 150ms;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  padding: 2px;
  text-align: center;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #acacac;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

const Label = styled.span`
  margin: auto 0px auto 8px;
`;

const Checkbox = ({
  className,
  labelText,
  ...props
}) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked)
  };

  return (
    <div>
      <label style={{ "display": "flex" }}>
        <CheckboxContainer className={className}>
          <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} {...props} />
          <StyledCheckbox checked={isChecked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        <Label>{labelText}</Label>
      </label>
    </div>
  )
};

export default Checkbox