import React from 'react';
import { StyledDirectThreadWrapper } from './Style';
import { Inbox } from '../../../../../containers/Messages/model/InboxModel';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { Participants } from '../../../../../containers/Messages/model/ParticipantModel';
import Image from '../../../../elements/Image/Image';

const EmployeeThread = ({ thread }) => {
  if (!thread) {
    return null;
  }
  return (
    <StyledDirectThreadWrapper>
      <div
        className='popover-content d-flex participant-popover'
        key={thread.id}
      >
       <Image src={thread.image} width='34px' height='34px' />
        {thread.inbox && thread.inbox.inboxId ? (thread.inbox.subject ||
          Inbox.GetParticipantsName(thread.inbox.participantsList)) : thread.name}
      </div>
    </StyledDirectThreadWrapper>
  );
};

export default EmployeeThread;
