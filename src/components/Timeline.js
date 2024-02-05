import React, { useState } from 'react';
import styled from 'styled-components';
import HorizontalTimeline from './horizontalTimeline/HorizontalTimeline';

const TimelineWrapper = styled.div`
  padding 2rem;
`;

/*
Format: YYYY-MM-DD
Note: Make sure dates are sorted in increasing order
*/
const VALUES = [
  '2008-06-01',
  '2010-06-01',
  '2013-06-01',
  '2015-03-01',
  '2019-01-01',
  '2019-06-17',
  '2019-08-01',
];

const Timeline = () => {
  const [value, setValue] = useState(0);
  // const [previous, setPrevious] = useState(0);
  return (
      <TimelineWrapper>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '100%', height: '6rem', margin: '1rem auto' }}>
          <HorizontalTimeline
            index={value}
            indexClick={(index) => {
              // setPrevious(value)
              setValue(index);
              // console.log('hi')
              // this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES } />
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}
          {value}
        </div>
      </TimelineWrapper>
  );
};

export default Timeline;
