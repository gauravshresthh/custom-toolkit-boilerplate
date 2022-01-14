import React from 'react';
import PopupModal from '../../../elements/PopupModal';
import { Inbox } from '../../../../containers/Messages/model/InboxModel';
import styled from 'styled-components';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import { CallIcon } from '../../../../assets/images/CallIcon';
import { CALL_BASE_API, subDomain } from '../../../../globalConstants';
import LocalDb from '../../../../localStorage';
import { getUserDataToSaveInCookie } from '../../../../containers/App/helper';

const StyledJoinCall = styled.div`
  background: #333333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;

  .close {
    cursor: pointer;
    float: right;
    display: flex;
    margin: 20px 15px 15px auto;
  }

  .name {
    width: 240px;
    font-size: 24px;
    margin-top: 25px;
    text-align: center;
  }

  .btn-wrapper {
    margin: 35px 50px 50px;
    display: flex;
    gap: 30px;

    div {
      cursor: pointer;
    }
  }
`;

const JoinCallModal = ({
                         modalVisible,
                         closeModal,
                         detail,
                         selectedSuperAdmin,
                         handleCallDecline,
                         handleCallAccept
                       }) => {
  if (!detail) {
    return null;
  }
  return (
    <PopupModal
      contentStyle={{ padding: 0 }}
      modalVisible={modalVisible}
      mask={true}
      width='310px'
      onCancel={closeModal}
      showCloseIcon={false}
    >
      <StyledJoinCall>
        <div className='close' onClick={closeModal}>
          <CommonIcons.CrossIcon color='#fff' />
        </div>
        <div>
          {Inbox.GetInboxProfilePic(detail.inbox, '110px', '110px', false)}
        </div>
        <div className='name text-truncate'>
          {detail.inbox && detail.inbox.subject ? detail.inbox.subject : detail.inbox && detail.inbox.participantsList
            ? Inbox.GetParticipantsName(detail.inbox.participantsList)
            : 'Unknown'}
        </div>
        <div className=''>is calling ...</div>
        <div className='btn-wrapper'>
          <div
            onClick={() => {
              handleCallAccept();
              closeModal();
              document.cookie = `anyDoneSession=${getUserDataToSaveInCookie(
                selectedSuperAdmin,
              )}; Domain=${subDomain}; path=/`;
              window.open(
                `${CALL_BASE_API}/CALL_MODE_RECEIVE/${
                  detail.inboxId
                }/${detail.broadcastVideoCall &&
                detail.broadcastVideoCall
                  .rtcMessageId}/${LocalDb.getUserAccountId()}`,
                '_blank',
              );
            }}
          >
            <CallIcon.Receive />
          </div>
          <div onClick={()=>{ handleCallDecline(); closeModal(); }}>
            <CallIcon.End />
          </div>
        </div>
      </StyledJoinCall>
    </PopupModal>
  );
};

export default JoinCallModal;
