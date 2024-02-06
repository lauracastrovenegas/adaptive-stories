import React, { Fragment } from "react";
import styled from "styled-components";
import { Paper, Link } from '@mui/material'


const UpdateWrapper = styled.div`
    flex: 2;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    padding: 2rem;
    border: 1px solid lightgray;
    margin: 2rem;
    background: #F5F5F5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MyUpdates = () => {
    var items = [
        {
            main: "Israeli leaders vow to continue war in reactions to ICJ ruling",
            points: [
                { content: 'Israeli Prime Minister Benjamin Netanyahu said Israel’s war against Hamas would continue. “We will continue to do what is necessary to defend our country and defend our people.' },
                { content: 'Israeli Defense Minister Yoav Gallant’s response to the ruling cast Israel as the moral actor in the conflict. “Those who seek justice, will not find it on the leather chairs of the court chambers in The Hague,” he wrote on the social media platform X.' }
            ],
            articleLink: "https://www.washingtonpost.com/world/2024/01/26/israel-hamas-war-news-gaza-palestine/"
        },
        {
            main: "U.N. court orders Israel to halt killings in Gaza",
            points: [
                { content: 'ICJ Orders Israel to Protect Civilians in Gaza: The International Court of Justice (ICJ) has directed Israel to take additional measures to prevent harm to civilians in Gaza, stopping short of calling for an immediate cease-fire.' },
                { content: 'Genocide Plausibility Acknowledged: In a preliminary finding, the court acknowledged the plausibility of genocide in the case brought by South Africa, emphasizing the urgency to prevent harm to civilians.' },
                { content: 'Specific Orders to Israel: The ICJ ordered Israel to prevent the possibility of genocide, allow more aid into Gaza, and sanction officials and soldiers for incitement. Israel must submit a report within a month outlining the implementation of these measures.' }
            ],
            articleLink: 'https://www.nytimes.com/live/2024/01/26/world/israel-hamas-gaza-news#:~:text=The%20United%20Nations\'%20highest%20court,immediately%20suspend%20its%20military%20campaign.'
        }
    ]
    return (
        <UpdateWrapper>
            <h2>Updates For You:</h2>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </UpdateWrapper>
    );
};

function Item(props) {
    return (
        <Fragment>
            <h3>{props.item.main}</h3>
            <ul>
                {props.item.points.map(point => <li>{point.content}</li>)}
            </ul>
            {props.item.articleLink && <Link href={props.item.articleLink}>Read More</Link>}
        </Fragment>
    )
}

export default MyUpdates
