import React from 'react';
import { StyledDirectThreadWrapper } from './Style';
import { Inbox } from '../../../../../containers/Messages/model/InboxModel';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { Participants } from '../../../../../containers/Messages/model/ParticipantModel';

const DirectThread = ({ thread }) => {
  if (!thread) {
    return null;
  }
  return (
    <StyledDirectThreadWrapper>
      <div
        className='popover-content d-flex participant-popover'
        key={thread.id}
      >
        {thread.inbox && thread.inbox.participantsList && Inbox.GetThreadProfilePic(thread.inbox.participantsList, '34px', '34px')}
        {thread.inbox && (thread.inbox.subject ||
          Inbox.GetParticipantsName(thread.inbox.participantsList))}
        <div className='ml-auto' hidden={thread.inbox && thread.inbox.participantsList.length < 3}>
          <AvatarGroup profilePicList={Participants.GetProfilePicList(thread.inbox.participantsList)} />
        </div>
      </div>
    </StyledDirectThreadWrapper>
  );
};

export default DirectThread;
