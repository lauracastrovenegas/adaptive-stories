import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import FeedIcon from '@mui/icons-material/Feed';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 0;
  padding-bottom: 0.8rem;
  padding-top: 0.1rem;
  padding-right: 1.5rem;
  background-color: #111111;
  color: white;
  text-align: right;
`

const IconButtonGroup = () => {
    const [buttonStates, setButtonStates] = useState({ personalized: false, newslettered: false, bookmarked: false })
    return (
        <Wrapper>
            <IconButton onClick={() => setButtonStates({ personalized: true, newslettered: buttonStates.newslettered, bookmarked: buttonStates.bookmarked })} icon={buttonStates.personalized ? <ColorLensIcon /> : <ColorLensOutlinedIcon />} text={buttonStates.personalized ? "Edit Personalization" : "Personalize"}/>
            <IconButton onClick={() => setButtonStates({ personalized: buttonStates.personalized, newslettered: !buttonStates.newslettered, bookmarked: buttonStates.bookmarked })} icon={buttonStates.newslettered ? <FeedIcon /> : <FeedOutlinedIcon />} text={buttonStates.newslettered ? "Unsubscribe" : "Subscribe"}/>
            <IconButton onClick={() => setButtonStates({ personalized: buttonStates.personalized, newslettered: buttonStates.newslettered, bookmarked: !buttonStates.bookmarked })} icon={buttonStates.bookmarked ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />} text={buttonStates.bookmarked ? "Unbookmark" : "Bookmark"}/>
        </Wrapper>
  )
}

function IconButton(props) {
    return (
        <Button
            sx={{ color: "white", marginLeft: "auto", marginRight: "0", textTransform: 'none' }}
            startIcon={props.icon}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}

export default IconButtonGroup;