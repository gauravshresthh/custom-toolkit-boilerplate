import React from 'react';
import { CallIcon } from '../../../../../assets/images/CallIcon';
import { CallBackButton, CallContainer, CallDetails } from '../style';
import { getUserDataToSaveInCookie } from '../../../../../containers/App/helper';
import { CALL_BASE_API, subDomain } from '../../../../../globalConstants';
import LocalDb from '../../../../../localStorage';

function MissedCall({ sentAt, selectedSuperAdmin, refId }) {
  return (
    <CallContainer>
      <div className='d-flex'>
        <div>
          <CallIcon.MissedCall />
        </div>
        <CallDetails>Missed Call : {sentAt}</CallDetails>
        <CallBackButton
          onClick={() => {
            document.cookie = `anyDoneSession=${getUserDataToSaveInCookie(
              selectedSuperAdmin,
            )}; Domain=${subDomain}; path=/`;
            setTimeout(() => {
              window.open(
                `${CALL_BASE_API}/CALL_MODE_INITIATE/${refId}/initiate/${LocalDb.getUserAccountId()}`,
                '_blank',
              );
            }, 0);
          }}> <CallIcon.CallOutline />Call Back</CallBackButton>
      </div>
    </CallContainer>
  );
}

export default MissedCall;
