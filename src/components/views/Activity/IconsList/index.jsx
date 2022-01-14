import React from 'react';

import AvatarGroup from '../../../elements/AvatarGroup';

import {
  Container,
  IconWrapper,
  Details,
  TopDetails,
  Text,
  TimeAndDateWrapper,
  Time,
  Date,
} from './style';

// todo : add icon groups see figma
function Index({
  selected,
  icon,
  text = 'Meeting : UI/UX Discussion Meeting',
}) {
  return (
    <Container selected={selected}>
      <IconWrapper>{icon}</IconWrapper>
      <Details>
        <TopDetails>
          <Text>{text}</Text>
          {/* <AvatarGroup /> */}
        </TopDetails>
        <TimeAndDateWrapper>
          <Time>1 PM - 2 PM</Time>
          <Date>27 Sep</Date>
        </TimeAndDateWrapper>
      </Details>
    </Container>
  );
}

export default Index;
