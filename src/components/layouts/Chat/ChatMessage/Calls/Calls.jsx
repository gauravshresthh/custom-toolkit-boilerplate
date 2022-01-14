import React from 'react';
import CallEnded from './CallEnded';
import InprogressCall from './InprogressCall';
import Calling from './Calling';
import MissedCall from './MissedCall';

function Calls({ isMyMsg, messageDetail, inboxParticipants , selectedSuperAdmin,inboxId,}) {
  if (!messageDetail) {
    return null;
  }

  return (
    <>
      {messageDetail.call && messageDetail.call.callparticipantsList && messageDetail.call.callparticipantsList.length > 0 ?
        messageDetail.call && messageDetail.call.missed ?
          <MissedCall sentAt={messageDetail.sentAt} selectedSuperAdmin={selectedSuperAdmin} refId={inboxId}/>
          : <> {messageDetail.call && messageDetail.call.callstatus === 0 ?
            <CallEnded isMyMsg={isMyMsg} messageDetail={messageDetail} inboxParticipants={inboxParticipants} /> :
            <InprogressCall
              isMyMsg={isMyMsg}
              messageDetail={messageDetail}
              inboxParticipants={inboxParticipants}
              rtcMessageId={messageDetail.rtcMessageId}
              inboxId={inboxId}
              selectedSuperAdmin={selectedSuperAdmin}/>
          }</> :
        <Calling isMyMsg={isMyMsg} sentAt={messageDetail.sentAt} />}
    </>
  );
}

export default Calls;
