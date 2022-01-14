import React from 'react';
import { CallIcon } from '../../../../../assets/images/CallIcon';
import { CallContainer, CallDetails,Time } from '../style';

function Calling({isMyMsg,sentAt}) {
  return (
    <CallContainer>
      <div className='d-flex'>
        <div>
          {isMyMsg ? <CallIcon.OutgoingCall /> : <CallIcon.CallEnded/>}
        </div>
        <CallDetails>{isMyMsg ? 'Outgoing Call' : 'Incoming Call'}</CallDetails>
      </div>
      <Time>{sentAt}</Time>
    </CallContainer>
  );
}

export default Calling;
