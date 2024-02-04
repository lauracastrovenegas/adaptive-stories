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
      name: "Rocket Attacks",
      description: "In early May 2021, escalating tensions led to Hamas launching a series of rocket attacks into Israeli territory, causing widespread fear among Israeli civilians. In response, Israel carried out airstrikes in Gaza, intensifying the conflict and raising concerns about the potential for further escalation.",
      articleLink: "https://www.washingtonpost.com/world/middle_east/tel-aviv-israel-hamas-rockets/2021/05/19/c9587b66-b72a-11eb-bc4a-62849cf6cca9_story.html",
      articleTitle: "Tel Aviv was long known as ‘the Bubble’ for its distance from war. This time is different.      ",
    },
    {
      name: "Ceasefire Brokered",
      description: "International mediation efforts, with prominent roles played by countries like Egypt and organizations such as the United Nations, successfully brokered a ceasefire on May 21, 2021, temporarily halting the hostilities and providing a diplomatic window. The agreement marked a critical step towards addressing the root causes of the conflict and initiating diplomatic initiatives to bring a lasting resolution to the Israeli-Palestinian tensions.",
      articleLink: "https://www.washingtonpost.com/world/2021/05/20/israel-gaza-conflict-latest-updates/",
      articleTitle: "Cease-fire aimed at ending 11 days of fighting between Israel and Hamas takes effect",
    },
    {
      name: "Humanitarian Impact",
      description: "The conflict's severe humanitarian consequences were particularly felt in the Gaza Strip, where Israeli airstrikes resulted in civilian casualties, damaged infrastructure, and limited access to essential services. The dire situation raised alarm among humanitarian organizations, highlighting the urgent need for aid delivery and addressing the well-being of the affected Gazan population.",
      articleLink: "https://www.washingtonpost.com/world/2023/12/09/gaza-starvation-israel-war-united-states-veto/",
      articleTitle: "Aid groups warn of starvation in Gaza after U.S. vetoes cease-fire call",
    },
    {
      name: "Rebuilding Challenges",
      description: "Post-ceasefire discussions focused on the formidable task of rebuilding Gaza, requiring substantial international aid and support. Debates ensued regarding the coordination of reconstruction efforts, the involvement of the Palestinian Authority, and the implementation of measures to prevent a recurrence of the conflict, emphasizing the complexity of the rebuilding process.",
      articleLink: "https://www.washingtonpost.com/world/2023/11/22/gaza-destruction-destroy-israel-strikes-reconstruction/",
      articleTitle: "Israel has utterly devastated Gaza",
    },
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

            {props.item.articleLink && <Link href={props.item.articleLink} target="_blank" rel="noopener">{props.item.articleTitle}</Link>}
        </Paper>
    )
}

export default ImageAndCards;