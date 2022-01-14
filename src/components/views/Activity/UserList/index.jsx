import React from 'react';

import {
  Container,
  UnreadIcon,
  IconWrapper,
  Details,
  TopDetails,
  SubIconWrapper,
  Text,
  TextAndDateWrapper,
  SubText,
  Date,
} from './style';

function Index({
  selected,
  unSeen,
  profilePic,
  icon,
  text = 'Michel Jack replied privately to your message in UI/UX Group',
  subText = 'Hello we need to talk about this UI',
  unread = true,
}) {
  return (
    <Container unread={unread} selected={selected}>
      {unread && (
        <UnreadIcon>
          <span />
        </UnreadIcon>
      )}

      <IconWrapper>{profilePic}</IconWrapper>
      <Details>
        <TopDetails>
          <SubIconWrapper>{icon}</SubIconWrapper>
          <Text unSeen={unSeen}>{text}</Text>
        </TopDetails>

        <TextAndDateWrapper>
          <SubText>{subText}</SubText>
          <Date>27 Sep</Date>
        </TextAndDateWrapper>
      </Details>
    </Container>
  );
}

export default Index;
