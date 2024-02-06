import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem;
  margin: 2rem auto;
  height: fit-content;
  background-color: white;
  border: 1px solid rgb(240,240,240);
`;

const Content = styled.div`
  flex: 2;
  height: fit-content;

  div {
    margin-bottom: 1rem;
  }

  p, h2 {
    margin: 0.5rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 15rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArticleCard = ({ article }) => {
  const date = new Date(article.publishedDate)
  console.log(date)
  return (
    <CardWrapper>
      <Content>
        <div>
          <h2>{article.title}</h2>
          <b><p>{date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() + ", " + date.getFullYear()}</p></b>
          <b><p>{article.author} {article.author && article.publisher && "|"} {article.publisher}</p></b>
        </div>
        <p>{article.description}</p>
      </Content>
      {article.imageUrl &&
        <ImageWrapper>
          <img alt="" src={article.imageUrl} />
        </ImageWrapper>}
    </CardWrapper>
  )
}

export default ArticleCard;