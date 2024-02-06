import React from "react";
import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";
import { articleData } from "../../data/articleData";

const Wrapper = styled.div`
  padding: 2rem 1rem;
  border-top: 1px solid black;
`;

const ArticleFeed = () => {
  return (
    <Wrapper>
      {articleData.map((article) => (
        <ArticleCard article={article} />
      )
      )}
    </Wrapper>
  );
}

export default ArticleFeed;