import React from 'react';
import Styled from 'styled-components';
import PopupModal from '../../elements/PopupModal';
import InputWithLabel from '../../elements/InputWithLabel/InputField';
import SubmitButton from '../../elements/Button/SubmitButton';
// proto
import InboxProto from '../../../protos/inbox_pb';

const BtnWrap = Styled.div`
    display: flex;
    justify-content: flex-end;
    button{
        width: 110px;
    }
`;

const ConvertToGroupModal = ({
  msg,
  modalVisible,
  closeConvertGroupModal,
  convertToGroup,
  btnLoading,
  groupName,
  setGroupName,
}) => {
  function convertToGroupSubmit() {
    // setBtnLoading(true);
    const convertProto = new InboxProto.Inbox();
    convertProto.setSubject(groupName);
    convertProto.setType(2); //private group
    // participants
    const participantsList = [];
    msg.participantsList.forEach(participant => {
      const participantProto = new InboxProto.InboxParticipant();
      participantProto.setParticipantid(participant.participantId);
      participantsList.push(participantProto);
    });
    convertProto.setParticipantsList(participantsList);
    convertToGroup(msg.inboxId, convertProto);
  }

  return (
    <PopupModal
      modalVisible={modalVisible}
      modalTitle="Convert to group"
      width="395px"
      onCancel={() => {
        closeConvertGroupModal();
      }}
    >
      <div>
        <InputWithLabel
          label="Group Name"
          placeholder="Enter Group Name"
          type="text"
          value={groupName}
          onChange={e => {
            setGroupName(e.target.value);
          }}
        />
        <div style={{ padding: '12px' }} />
        <BtnWrap>
          <SubmitButton
            disable={!groupName}
            loading={btnLoading}
            text="Save"
            onClick={convertToGroupSubmit}
          />
        </BtnWrap>
      </div>
    </PopupModal>
  );
};

export default ConvertToGroupModal;
