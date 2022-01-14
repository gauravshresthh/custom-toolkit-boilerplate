import React from 'react';

import { Container, Wrapper, Text, StartNowButton } from './index.style';

import ActivityIcons from '../../../../assets/images/activity/icons';

function Index(props) {
  return (
    <Container>
      <Wrapper>
        <ActivityIcons.StartNewConversation />
        <Text>Start a new conversation</Text>
        <StartNowButton>Start Now</StartNowButton>
      </Wrapper>
    </Container>
  );
}

export default Index;
