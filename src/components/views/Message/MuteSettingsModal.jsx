import React, { useState } from 'react';
import Styled from 'styled-components';
import PopupModal from '../../elements/PopupModal';
import Checkbox from '../../elements/Checkbox';
import SubmitButton from '../../elements/Button/SubmitButton';
import InboxProto from '../../../protos/inbox_pb';

const StyledCheckboxWrapper = Styled.div`
    .label-row{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span{
            color: #333333;
            font-size: 14px;
            line-height: 1;
        }
    }
    .save-btn{
        display: flex;
        justify-content: flex-end;
        button{
            width: 110px;
            border-radius: 5px;
        }
    }
`;

const MuteSettingsModal = ({
  modalVisible,
  closeMuteSettingModal,
  inboxId,
  muteInbox,
  mutedType,
  loading,
}) => {
  const [muteMentions, setmuteMentions] = useState(
    mutedType === 3 ? true : false,
  );
  const [btnDisabled, setBtnDisabled] = useState(true);
  function handleMuteSettingSubmit() {
    const muteProtoData = new InboxProto.UpdateInboxNotificationRequest();
    muteProtoData.setInboxid(inboxId);
    muteProtoData.setNotificationtype(!muteMentions ? 1 : 3);
    muteInbox(muteProtoData);
  }

  return (
    <PopupModal
      modalVisible={modalVisible}
      modalTitle="Mute Settings"
      width="395px"
      onCancel={() => {
        closeMuteSettingModal();
      }}
    >
      <StyledCheckboxWrapper>
        <div className="label-row">
          <Checkbox defaultChecked />
          <span>Mute every message</span>
        </div>
        <div className="label-row">
          <Checkbox
            onChange={() => {
              setmuteMentions(!muteMentions);
              setBtnDisabled(false);
            }}
            defaultChecked={muteMentions}
          />
          <span>Mute @mentions also</span>
        </div>
        <div className="save-btn">
          <SubmitButton
            text="Save"
            disable={btnDisabled}
            loading={loading}
            onClick={handleMuteSettingSubmit}
          />
        </div>
      </StyledCheckboxWrapper>
    </PopupModal>
  );
};

export default MuteSettingsModal;
