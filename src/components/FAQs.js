import React from "react";
import styled from "styled-components";

const faqs = [
  {
    question: "How have international actors, such as the United Nations, responded to the conflict?",
    answer: "The international response varies, but many call for a peaceful resolution, condemn violence, and advocate for a two-state solution."
  },
  {
    question: "When did the Hamas-Israel conflict begin, and what are its historical origins?",
    answer: "The conflict has deep historical roots but escalated with the founding of Hamas in 1987 and its subsequent rise in Gaza."
  },
  {
    question: "What is the root cause of the conflict between Hamas and Israel?",
    answer: "The conflict has deep historical roots, including disputes over land, identity, and the establishment of the state of Israel in 1948."
  }
]

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