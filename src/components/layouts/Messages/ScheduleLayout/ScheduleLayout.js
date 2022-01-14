import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../../../elements/Image/Image';
import ScheduleActions from '../../../views/Message/DetailView/RightBarView/ScheduleActions';
import history from '../../../../utils/history';
import ScheduledMessageContent from './ScheduledMessage/ScheduleMessageContent';
import {
  DayDateFormatting,
  GetMinuteValue,
} from '../../../../utils/dateHelper';
import { Inbox } from '../../../../containers/Messages/model/InboxModel';
import ConfirmationModal from '../../../elements/ConfirmationModal';
import ScheduleModal from '../../../views/Message/DetailView/RightBarView/ScheduleModal';
import { Waypoint } from 'react-waypoint';
import OutlinedSpinner from '../../../elements/Spinner';

const StyledScheduleLayout = styled.div`
  width: 100%;

  .title {
    height: 63px;
    display: flex;
    align-items: center;
    border: 1px solid #f0f0f0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    padding-left: 15px;
  }

  .scheduled-outer-wrapper {
    height: calc(100vh - 120px);
  }

  .schedule-wrapper {
    display: flex;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    padding: 15px;
    gap: 8px;

    :hover {
      background: #f0f0f0;
    }

    .schedule-detail {
      display: flex;
      flex-direction: column;

      .sender-name {
        color: #376af5;
        font-weight: 500;
      }

      .scheduled-time {
        color: #666;
      }
    }
  }
`;

const ScheduleLayout = ({
  fetchScheduledMessages,
  scheduledMsgList,
  sendNewMessage,
  parseLink,
  deleteMessage,
  openDeleteScheduleMsgModal,
  toggleDeleteMessageModal,
  modalLoader,
  updateRtcMsg,
  next,
  isPaginationLoader,
  selectedScheduledMsg,
  setSelectedScheduledMsg,
  setOnEditScheduleMsgState,
  setIsFromSchedule,
}) => {
  const [openActionPopover, setOpenActionPopover] = useState(false);
  const [openSendModal, setOpenSendModal] = useState(false);
  const [openRescheduleModal, setOpenRescheduleModal] = useState(false);

  return (
    <StyledScheduleLayout>
      <div className="title">Scheduled Messages</div>

      <div className="withScrollbar scheduled-outer-wrapper">
        {scheduledMsgList &&
          scheduledMsgList.map(single => (
            <div
              className="schedule-wrapper"
              onMouseEnter={() =>
                single.lastMessage &&
                setOpenActionPopover(single.lastMessage.clientId)
              }
              onMouseLeave={() => setOpenActionPopover(false)}
            >
              <div>
                <Image height={32} width={32} />
              </div>
              <div className="schedule-detail">
                <div className="sender-name">
                  {single.subject ||
                    Inbox.GetParticipantsName(single.participantsList)}
                </div>
                <div className="scheduled-time">
                  Scheduled for{' '}
                  {single.lastMessage &&
                    DayDateFormatting(
                      single.lastMessage.scheduledAt / 1000,
                    )}{' '}
                  at{' '}
                  {single.lastMessage &&
                    GetMinuteValue(single.lastMessage.scheduledAt / 1000)}
                </div>
                <ScheduledMessageContent scheduledMsg={single.lastMessage} />
              </div>

              {single.lastMessage &&
                openActionPopover === single.lastMessage.clientId && (
                  <ScheduleActions
                    onEditScheduledMsg={() => {
                      console.log('single', { single });
                      setIsFromSchedule(true);
                      history.push(`/messages/1/${single.inboxId}`);
                    }}
                    openRescheduleModal={setOpenRescheduleModal}
                    openSendModal={setOpenSendModal}
                    scheduledMessage={single.lastMessage}
                    setSelectedScheduledMsg={setSelectedScheduledMsg}
                    setOnEditScheduleMsgState={setOnEditScheduleMsgState}
                    toggleDeleteMessageModal={toggleDeleteMessageModal}
                  />
                )}
            </div>
          ))}

        <Waypoint
          topOffset="0"
          onEnter={() => {
            if (next) {
              scheduledMsgList && fetchScheduledMessages(next);
            }
          }}
        >
          {isPaginationLoader && next && (
            <OutlinedSpinner
              width="24px"
              spinnerStyle={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px 0',
              }}
              color="#376af5"
            />
          )}
        </Waypoint>
      </div>

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

      {/*<ScheduleModal*/}
      {/*  onCancel={() => setOpenRescheduleModal(false)}*/}
      {/*  modalVisible={openRescheduleModal}*/}
      {/*  scheduledMsg={selectedScheduledMsg}*/}
      {/*  updateRtcMsg={updateRtcMsg}*/}
      {/*/>*/}
    </StyledScheduleLayout>
  );
};

export default ScheduleLayout;
