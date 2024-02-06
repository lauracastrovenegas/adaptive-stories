import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  width: fit-content;
  padding: 2rem;
  border: 1px solid lightgray;
  margin: 2rem;
  margin: 2rem auto;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.30);
  height: fit-content;
`;

const Content = styled.div`
  flex: 2;
  height: fit-content;

`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ArticleCard = ({article}) => {
  return (
    <CardWrapper>
      <Content>
        <h2>{article.title}</h2>
        <h4>{new Date().toDateString(article.publishedDate)}</h4>
        <h4>{article.author} {article.author && article.publisher && "|"} {article.publisher}</h4>
        <p>{article.description}</p>
      </Content>
      {article.imageUrl && 
        <ImageWrapper>
          <img src={article.imageUrl} />
        </ImageWrapper>}
    </CardWrapper>
  )
}

export default ArticleCard;