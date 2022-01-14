import React from 'react';
import { StyledGroupThreadWrapper } from './Style';
import { Inbox } from '../../../../../containers/Messages/model/InboxModel';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { Participants } from '../../../../../containers/Messages/model/ParticipantModel';

const GroupThread = ({ thread }) => {
  if(!thread){
    return null
  }
  return (
    <StyledGroupThreadWrapper>
      <div
        className='popover-content d-flex participant-popover'
        key={thread.id}
      ><div >
        {thread.inbox && Inbox.GetInboxProfilePic(thread.inbox,'34px','34px')}
      </div>
        <div>
          {thread.inbox && thread.inbox.subject}
          <div className='participant-names text-truncate'>
            {thread.inbox && Inbox.GetParticipantsName(thread.inbox.participantsList)}
          </div>
        </div>
        <div className='ml-auto'>
          <AvatarGroup profilePicList={Participants.GetProfilePicList(thread.inbox.participantsList)} />
        </div>
      </div>
    </StyledGroupThreadWrapper>
  );
};

export default GroupThread;
