import React from "react";
import styled from "styled-components";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Link } from '@mui/material'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 2rem;
  border: 1px solid grey;
  border-radius: 15px;
  margin: 2rem;
`;


const CarouselWrapper = styled.div`
  flex: 1;
  width: 40%;
  margin: 1rem;
`;

const ImageAndCards = () => {
  var items = [
    {
      imageURL: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O425AO2UTWGNZESKCZFRDJ46AI_size-normalized.jpg&w=1200"
    },
    {
        name: "May 2021 Conflict",
        description: "Intense fighting erupted between Israel and Hamas in May 2021, triggered by tensions in East Jerusalem and Israeli police actions at the Al-Aqsa Mosque.",
        articleLink: "https://www.washingtonpost.com/world/2021/05/17/israel-gaza-conflict-latest-update/",
        articleTitle: "Israel-Hamas conflict hurtles into its second week as cease-fire talks struggle",
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
  ]
  return (
    <CarouselWrapper>
      <Carousel 
        autoPlay={false}
        indicatorContainerProps={{
          style: {
              marginTop: '2rem'
          }
        }}
      >
           {
               items.map( (item, i) => <Item key={i} item={item} /> )
           }
       </Carousel>
    </CarouselWrapper>
  );
}

function Item(props)
{
    return (
      props.item.imageURL ?
        <Paper style={{maxHeight: "20rem"}}>
            <img src={props.item.imageURL} style={{maxHeight: "20rem"}}/>
        </Paper>
      :
        <Paper style={{paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1rem', paddingTop: '0.2rem', backgroundColor: "#f5f5f5"}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            {props.item.articleLink && <Link href="https://www.washingtonpost.com">{props.item.articleTitle}</Link>}
        </Paper>
    )
}

export default ImageAndCards;