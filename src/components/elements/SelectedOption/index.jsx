import React from 'react';

import { CloseButton, Container, IconWrapper, Main, Text } from './style';

function Index({ icon = 'i', text = 'Unread', onClose }) {
  return (
    <Container>
      <Main>
        <IconWrapper>{icon}</IconWrapper>
        <Text>{text}</Text>
        <CloseButton onClick={onClose}>x</CloseButton>
      </Main>
    </Container>
  );
}

export default Index;
