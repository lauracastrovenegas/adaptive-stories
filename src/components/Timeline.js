import React, { useState } from 'react';
import styled from 'styled-components';
import HorizontalTimeline from './horizontalTimeline/HorizontalTimeline';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TimelineWrapper = styled.div`
  padding 2rem;
  color: white;
`;

/*
Format: YYYY-MM-DD
Note: Make sure dates are sorted in increasing order
*/
const VALUES = [
  '1967-06-05',
  '2007-06-14',
  '2008-12-27',
  '2012-11-14',
  '2014-07-08',
  '2018-03-30',
  '2020-05-05',
  '2021-05-10',
  '2022-11-03',
];

const EVENTS = [
  {
    eventTitle: "Six-Day War",
    eventDescription: "The Six-Day War occurred between Israel and its neighboring Arab states. The war resulted in a swift and decisive Israeli victory, leading to the occupation of the West Bank, East Jerusalem, the Gaza Strip, the Sinai Peninsula, and the Golan Heights."
  },
  {
    eventTitle: "Hamas Takes Control of Gaza",
    eventDescription: "In a violent coup, Hamas seizes control of the Gaza Strip from the Palestinian Authority, leading to a division between Hamas-controlled Gaza and the Fatah-led West Bank."
  },
  {
    eventTitle: "Operation Cast Lead",
    eventDescription: "Israel launches a major military offensive, known as Operation Cast Lead, in response to rocket attacks from Gaza. The conflict results in significant casualties and destruction in Gaza."
  },
  {
    eventTitle: "Operation Pillar of Defense",
    eventDescription: "Israel conducts airstrikes in Gaza, targeting Hamas militants and infrastructure, in response to ongoing rocket attacks. The conflict ends with a ceasefire brokered by Egypt."
  },
  {
    eventTitle: "Operation Protective Edge",
    eventDescription: "Israel launches a large-scale military operation in Gaza, aiming to stop rocket fire and destroy Hamas tunnels. The conflict results in high casualties and widespread destruction."
  },
  {
    eventTitle: "Great March of Return Protests",
    eventDescription: "Palestinians in Gaza begin weekly protests along the border with Israel, demanding the right of return for refugees and an end to the blockade. The protests lead to clashes with Israeli forces and numerous casualties."
  },
  {
    eventTitle: "Escalation of Tensions",
    eventDescription: "Tensions between Israel and Hamas escalate after weeks of clashes, airstrikes, and incendiary balloon attacks from Gaza, leading to fears of a full-scale conflict."
  },
  {
    eventTitle: "May 2021 Escalation",
    eventDescription: "Violence erupts again as Hamas launches rockets into Israel, prompting Israeli airstrikes on Gaza. The conflict intensifies, resulting in significant casualties and destruction on both sides."
  },
  {
    eventTitle: "Renewed Border Clashes",
    eventDescription: "Renewed clashes occur along the Gaza-Israel border, with Hamas firing rockets into southern Israel and Israeli forces retaliating with airstrikes, sparking fears of another round of escalation."
  }
]

const style = {
  position: 'absolute',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const Timeline = () => {
  const [value, setValue] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [modalPosition, setModalPosition] = useState({ left: 0, bottom: 0 });
  const handleClose = () => setClicked(false);
  
  const updateModalPosition = (e) => {
    const { clientX, clientY } = e;
    const scrollY = window.scrollY; // Get the vertical scroll position
    setModalPosition({ left: clientX, top: clientY, scroll: clientY + scrollY });
  }
  console.log(modalPosition.top)
  return (
      <TimelineWrapper>
        <div onClick={updateModalPosition} style={{ width: '100%', height: '6rem', margin: '8rem auto' }}>
            <HorizontalTimeline
              index={value}
              className="item"
              indexClick={(index) => {
                setValue(index);
                setClicked(true);
              }}
              values={ VALUES } />
        </div>
        {clicked && EVENTS.map((event, i) =>
          <div>
            <div 
              style={{ 
                borderLeft: '6px solid #006CB8', 
                height: '1.5rem', 
                position: 'absolute', 
                left: modalPosition.left, 
                top: modalPosition.scroll - 85
              }}
            ></div>
            <Modal
              className="modal"
              key={i}
              open={i === value}
              onClose={handleClose}
              slotProps={{
                backdrop: {
                  sx: {
                    backgroundColor: 'transparent',
                  },
                },
              }}
            >
              <Box sx={{...style, top: modalPosition.top - 320, left: modalPosition.left > 200 ? modalPosition.left - 310 : 30}}>
                <Typography variant="h5" component="h2">
                  {event.eventTitle}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  {event.eventDescription}
                </Typography>
              </Box>
            </Modal>
          </div>
        )}
      </TimelineWrapper>
  );
};

export default Timeline;
