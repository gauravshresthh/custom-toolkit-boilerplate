import React, { useState } from 'react';

import MessageIndividualTopBar from '../../../views/Message/DetailView/ChatView/MessageIndividualTopBar';
import TypingLayout from '../../Messages/DetailLayout/TypingLayout';

import { Container } from './style';

function Index({ inboxDetail }) {
  const [rightSideDetailType, setRightSideDetailType] = useState(false);

  if (!inboxDetail) {
    return null;
  }

  return (
    <Container>
      {/* <EventPage /> */}
      <MessageIndividualTopBar
        name={'UI/UX Group'}
        isMuted={true}
        rightSideDetailType={rightSideDetailType}
        setRightSideDetailType={setRightSideDetailType}
      />

      <>

        <TypingLayout
          imageId='message-detail-image'
          attachmentId='message-detail-attachment'
        />
      </>

      {rightSideDetailType && <div>right side</div>}
    </Container>
  );
}

export default Index;
