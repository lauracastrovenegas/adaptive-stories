import React from 'react';
import styled from 'styled-components';

const WhatYouNeedToKnowWrapper = styled.div`
  border: 1px solid white;
  padding 2rem;
  background-color: white;
  border-radius: 15px;
  padding: 1rem 2rem;
  flex: 1;

  p {
    font-size: 12px;
  }
`;

const knowledgePoints = [
  {
    title: "May 2021",
    content: "Escalation between Israel and Hamas over tensions in East Jerusalem"
  },
  {
    title: "Rocket Attacks",
    content: "Hamas fired rockets into Israel, leading to Israeli airstrikes on Gaza"
  },
  {
    title: "Ceasefire Brokered",
    content: "International mediation, including efforts by Egypt and the UN, resulted in a ceasefire on May 21, 2021"
  },
  {
    title: "Humanitarian Impact",
    content: "Conflict worsened the humanitarian situation in Gaza, raising concerns about civilian well-being and infrastructure damage"
  },
  {
    title: "Rebuilding Challenges",
    content: "Discussions ongoing about international aid, Palestinian Authority involvement, and preventing future conflicts in the efforts to rebuild Gaza"
  }
]

const WhatYouNeedToKnow = () => {
  return (
    <WhatYouNeedToKnowWrapper>
      <h2>What you need to know</h2>
      {knowledgePoints.map((point, idx) => (
        <p>{idx+1}. <b>{point.title}: </b>{point.content}</p>
      ))}
    </WhatYouNeedToKnowWrapper>
  );
};

export default WhatYouNeedToKnow;