import React, { useEffect, useState } from 'react';
import { CallIcon } from '../../../../../assets/images/CallIcon';
import { CallContainer, CallDetails, DetailBottom, JoinButton, JoinedDiv } from '../style';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { checkIfParticipantExists } from './helper';
import LocalDb from '../../../../../localStorage';
import { getUserDataToSaveInCookie } from '../../../../../containers/App/helper';
import { CALL_BASE_API, subDomain } from '../../../../../globalConstants';
import TimerComponent from '../../../../elements/TimerComponent';

function InprogressCall({ isMyMsg, messageDetail, inboxParticipants, selectedSuperAdmin, inboxId, rtcMessageId }) {
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
        {isMyMsg ? <CallIcon.OutgoingCall /> : <CallIcon.CallEnded />}
        <CallDetails>
          Call in progress
          {console.log({messageDetail})}
          {/*<TimerComponent*/}
          {/*  title="Call in progress: "*/}
          {/*  // initialTime={callDetail && Date.now() - callDetail.startTime}*/}
          {/*/>*/}
        </CallDetails>

        {!checkIfParticipantExists(messageDetail.call.callparticipantsList, LocalDb.getUserAccountId())
        && <JoinButton hidden={isMyMsg} onClick={() => {
          document.cookie = `anyDoneSession=${getUserDataToSaveInCookie(
            selectedSuperAdmin,
          )}; Domain=${subDomain}; path=/`;
          window.open(
            `${CALL_BASE_API}/CALL_MODE_RECEIVE/${inboxId
            }/${rtcMessageId}/${LocalDb.getUserAccountId()}`,
            '_blank',
          );
        }}>Join</JoinButton>}
      </div>

      {profileList && profileList.length > 0 && <DetailBottom>
        <AvatarGroup profilePicList={profileList} />
        {checkIfParticipantExists(messageDetail.call.callparticipantsList, LocalDb.getUserAccountId())
        && <JoinedDiv hidden={isMyMsg}>You joined</JoinedDiv>}
      </DetailBottom>}
    </CallContainer>
  );
}

export default InprogressCall;
