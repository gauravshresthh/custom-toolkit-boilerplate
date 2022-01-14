import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextEditorIcon from '../../../../../assets/images/TextEditorIcon';
import ScheduleActions from '../../../../views/Message/DetailView/RightBarView/ScheduleActions';
import ScheduledMessageContent from '../../ScheduleLayout/ScheduledMessage/ScheduleMessageContent';
import {
  DayDateFormatting,
  GetMinuteValue,
} from '../../../../../utils/dateHelper';
import ConfirmationModal from '../../../../elements/ConfirmationModal';
import ScheduleModal from '../../../../views/Message/DetailView/RightBarView/ScheduleModal';

const StyledSchedule = styled.div`
  position: relative;
  padding: 10px 15px;
  border-bottom: 1px solid #f0f0f0;

  :hover {
    background: #f0f0f0;
  }

  .scheduled-message {
    font-size: 15px;
    color: #333;
    margin-bottom: 4px;
    display: flex;

    .icon-wrapper {
      margin-right: 4px;
    }
  }

  .scheduled-time {
    display: flex;
    gap: 6px;
    color: #666;
  }
`;

const ScheduleContent = ({
  scheduledMsgList,
  refId,

  toggleDeleteMessageModal,
  deleteMessage,
  openDeleteScheduleMsgModal,
  modalLoader,

  updateRtcMsg,
  selectedScheduledMsg,
  setSelectedScheduledMsg,
  onEditScheduleMsgState,
  setOnEditScheduleMsgState,
  toggleScheduleMsgModal,
  setIsEditingMsg,
  isEditingMsg
}) => {
  const [openActionPopover, setOpenActionPopover] = useState(false);
  const [openSendModal, setOpenSendModal] = useState(false);
  const [openRescheduleModal, setOpenRescheduleModal] = useState(false);
  const [filteredScheduledList, setFilteredScheduledList] = useState(undefined);
  useEffect(() => {
    if (scheduledMsgList) {
      setFilteredScheduledList(
        scheduledMsgList.filter(singleReply => singleReply.refId === refId),
      );
    }
  }, [scheduledMsgList, refId]);

  if (!filteredScheduledList) {
    return null;
  }

  return (
    <>
      {filteredScheduledList
        .sort((a, b) => b.scheduledAt - a.scheduledAt)
        .map(single => (
          <StyledSchedule
            onMouseEnter={() => {
              setOpenActionPopover(single.clientId);
            }}
            onMouseLeave={() => {
              setOpenActionPopover(false);
            }}
          >
            <ScheduledMessageContent scheduledMsg={single} />
            <div className="scheduled-time">
              <TextEditorIcon.Schedule color="#666" />
              {DayDateFormatting(single.scheduledAt / 1000)} at{' '}
              {GetMinuteValue(single.scheduledAt / 1000)}
            </div>
            {openActionPopover === single.clientId && (
              <ScheduleActions
                scheduledMessage={single}
                openSendModal={setOpenSendModal}
                openRescheduleModal={setOpenRescheduleModal}
                selectedScheduledMsg={selectedScheduledMsg}
                setSelectedScheduledMsg={setSelectedScheduledMsg}
                toggleDeleteMessageModal={toggleDeleteMessageModal}
                onEditScheduledMsg={() => {
                  // onEditScheduledMsg();
                  setOnEditScheduleMsgState(true);
                  setIsEditingMsg('SCHEDULE_MESSAGE')
                }}
                onEditScheduleMsgState={onEditScheduleMsgState}
                setOnEditScheduleMsgState={setOnEditScheduleMsgState}
                toggleScheduleMsgModal={toggleScheduleMsgModal}
              />
            )}
          </StyledSchedule>
        ))}

      <ConfirmationModal
        visibility={openSendModal}
        onClick={() => {
          updateRtcMsg(
            selectedScheduledMsg,
            selectedScheduledMsg.messageType,
            selectedScheduledMsg.refId,
            selectedScheduledMsg.clientId,
            selectedScheduledMsg.parentMsgId,
            selectedScheduledMsg.rtcMessageId,
            selectedScheduledMsg.mentionList,
            0,
            isEditingMsg
          );
          setOpenSendModal(false);
        }}
        closeModal={() => setOpenSendModal(false)}
        actionLabel="Send"
        cancelLabel="Cancel"
        width="400px"
        title="Confirmation"
        content="Are you sure you want to send this message now?"
      />

      <ConfirmationModal
        visibility={openDeleteScheduleMsgModal}
        closeModal={() => toggleDeleteMessageModal(false, 'SCHEDULED')}
        actionLabel="Delete"
        cancelLabel="Cancel"
        width="400px"
        title="Confirmation"
        content="Are you sure you want to delete this message?"
        onClick={() =>
          deleteMessage(
            selectedScheduledMsg.refId,
            selectedScheduledMsg.clientId,
            selectedScheduledMsg.rtcMessageId,
          )
        }
        loading={modalLoader}
      />

      <ScheduleModal
        scheduledMsg={selectedScheduledMsg}
        onCancel={() => setOpenRescheduleModal(false)}
        modalVisible={openRescheduleModal}
        updateRtcMsg={updateRtcMsg}
      />
    </>
  );
};

export default ScheduleContent;
