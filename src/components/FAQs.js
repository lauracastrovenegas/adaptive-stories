import React from "react";
import styled from "styled-components";
import {faqs} from '../data/generalData.js';

const FAQContainer = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  border: 1px solid rgba(233,233,233,1);
  border-radius: 15px;
  margin: 2rem auto;
  background-color: white;
  height: fit-content;
`;

const FAQs = () => {
  return (
    <FAQContainer>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <>
          <b><p>{faq.question}</p></b>
          <p>{faq.answer}</p>
        </>
      ))}
    </FAQContainer>
  )
}

export default FAQs;