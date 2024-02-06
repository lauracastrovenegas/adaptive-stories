import React from "react";
import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";
import { articleData } from "../../data/articleData";
import FAQs from "../../components/FAQs";
import SearchBar from "../../components/SearchBar";

const Wrapper = styled.div`
  display: flex;
  padding: 0rem 1rem 2rem 1rem;
  gap: 1rem;
`;

const Articles = styled.div`
  flex: 2;
`;

const SearchWrapper = styled.div`
  padding: 2rem 1rem 0rem 1rem;
`;

const ArticleFeed = () => {
  return (
    <div>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <Wrapper>
        <Articles>
          {articleData.map((article) => (
            <ArticleCard article={article} />
          ))}
        </Articles>
        <FAQs />
      </Wrapper>
    </div>

  );
}

export default ArticleFeed;