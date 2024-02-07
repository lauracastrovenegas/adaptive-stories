import React from 'react';
import styled from 'styled-components';

const KeyUpdatesWrapper = styled.div`
  border: 1px solid white;
  padding 2rem;
  background-color: white;
  border-radius: 15px;
  padding: 1rem 2rem;
  flex: 1;
`;

const updates = [
  "The U.S. State Department confirmed that an American civilian in the West Bank died Friday",
  "Communication restored in Gaza after week-long outage",
  "Israeli cabinet member lays bare government divisions in frank interview"
]

const KeyUpdates = () => {
  return (
    <KeyUpdatesWrapper>
      <h2>Key Updates</h2>
      {updates.map((update) => (
        <p>• {update}</p>
      ))}
    </KeyUpdatesWrapper>
  );
};

export default KeyUpdates;