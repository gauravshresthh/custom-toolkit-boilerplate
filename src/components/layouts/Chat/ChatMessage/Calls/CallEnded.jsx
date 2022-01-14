import React, { useEffect, useState } from 'react';
import { CallIcon } from '../../../../../assets/images/CallIcon';
import { CallContainer, CallDetails, DetailBottom, JoinedDiv } from '../style';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { checkIfParticipantExists } from './helper';
import  LocalDb from '../../../../../localStorage';

function CallEnded({ isMyMsg, messageDetail,inboxParticipants }) {
  const [profileList, setProfileList] = useState(undefined);
  useEffect(() => {
    let profiles = [];
    inboxParticipants && inboxParticipants.map(single => {
        messageDetail &&
        messageDetail.call && single.account &&
        checkIfParticipantExists(messageDetail.call.callparticipantsList, single.account.accountId)
        && profiles.push(single.account.profilePic);
      },
    );
    setProfileList(profiles);
  }, [messageDetail]);

  return (
    <CallContainer>
      <div className='d-flex'>
        {isMyMsg ? <CallIcon.OutgoingCall /> : <CallIcon.CallEnded/>}
        <CallDetails>Call Ended: {messageDetail && messageDetail.sentAt}</CallDetails>
      </div>

      {profileList && profileList.length > 0 && <DetailBottom>
        <AvatarGroup profilePicList={profileList} />
        {checkIfParticipantExists(messageDetail.call.callparticipantsList,LocalDb.getUserAccountId())
        && <JoinedDiv hidden={isMyMsg}>You joined</JoinedDiv>}
      </DetailBottom>}
    </CallContainer>
  );
}

export default CallEnded;
