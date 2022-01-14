import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import SecondaryTitle from '../../../../elements/SecondaryTitle';
import DateTime from '../../../../elements/DateTime';
import Participant from '../../../../elements/Participant';
import AddParticipants from '../../../../elements/AddParticipants';
import CollapseContent from '../../../../elements/CollpaseContent';
import ConvertToGroupModal from '../../../../views/Message/ConvertToGroupModal';
import MuteSettingsModal from '../../../../views/Message/MuteSettingsModal';
import ToggleSwitch from '../../../../elements/ToggleSwitch';
import DescriptionText from '../../../../elements/DescriptionText';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import { RIGHT_SIDE_CONTENT } from '../../../../../containers/Messages/Details/constants';
import ConfirmationModal from '../../../../elements/ConfirmationModal';
import { DateTimeFormat } from '../../../../../utils/dateHelper';
import InboxProto from '../../../../../protos/inbox_pb';
import localStorage from '../../../../../localStorage';
import OverallAttachment from '../../../../views/Message/DetailView/RightBarView/Attachment/OverallAttachment';
import { getMediaList } from '../../../../../containers/Messages/Details/helper';
import { mapObjToEdit } from '../../../../../containers/Messages/Details/DTO';

const StyledDetail = Styled.div`

  .mb-10{
    margin-bottom: 10px;
  }
  .top{
      padding: 20px 15px 15px 15px;
      border-bottom: 1px solid #E7E7E7;

      .subject{
        .subject-text{
          font-size: 12px;
          color: #666666;
          line-height: 2;
          cursor:pointer;
          &:hover{
            background: #f8f8f8;
          }
        }
        .subject-edit-form{
          display: flex;
          align-items:center;
          justify-content: space-between;
          .subject-edit-input{
            width: 75%;
            height: 36px;
            border: 1px solid #c4c4c4;
            border-radius: 4px;
            padding: 0 8px;
            margin: 0 10px 0 0;
          }
          .actions{
            display: flex;
            align-items: center;
            p{
              margin-right: 15px;
              cursor:pointer;
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }

      }
  }
  .participants{
    padding: 15px 0;
    border-bottom: 1px solid #E7E7E7;

    .ant-collapse-header{
      padding: 0 15px;
    }

    .participant-contents{
      padding-left: 15px;
    }
  }
  .media-links{
    padding: 12px 0 10px 0;
    border-bottom: 1px solid #E7E7E7;
    cursor:pointer;
    .media-contents{
    display:flex;
    align-items:center;
      padding: 0 15px;
      div{margin-right:auto;}
    }
  }
  .bottom-section{
    padding: 20px 15px;
    .blue-text{
      font-size: 14px;
      line-height: 1.2;
      color: #376AF5;
      letter-spacing: 0.01em;
      cursor:pointer;
    }
    /* to group */
    .convert-to-group{
      margin-bottom: 20px;
    }
    /* mute-wrapper */
    .mute-wrapper{
      margin-bottom: 20px;

    }
    .mute-conversation{
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-bottom: 8px;
      .switch{
          margin-left: 20px;
          margin-top: -5px;
      }
    }
    /* selete conversation */
    .delete-conversation{
      color: #DE4132;
    }
  }

  .media-contents{
  font-weight:500;
  }
`;

const DetailsContent = ({
  isSelf,
  setRightSideDetailType,
  inboxDetail,
  muteInbox,
  deleteConversation,
  btnLoading,
  deleteModalVisibility,
  toggleDeleteInboxModalVisibility,
  toggleConvertModalVisibility,
  convertModalVisibility,
  convertToGroup,
  editSubject,

  muteSettingModalVisibility,
  toggleMuteSettingModal,

  muteParticipant,
  removeParticipant,

  toggleAddParticipantsMsgModal,
  sectionId,

  toggleLeaveMsgModal,
  LeaveMsg,
  leaveInboxModal,
  fetchMediaFiles,
  refId,

  employeeList,
  toggleForwardMessageModal,
  from,
  setFrom,
  selectedMsg,
  setSelectedMsg,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  setSelectedAttachmentToDelete,
  rtcMessageIdToDelete,
  setRtcMessageIdToDelete,
  attchmentIdToDelete,
  setAttachmentIdToDelete,
  deleteAttachment,
  hasAttachmentBeenDeleted,
  setHasAttachmentBeenDeleted,
}) => {
  const [subjectEditVisible, setSubjectEditVisible] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState('');
  const [amIAdmin, setAmIAdmin] = useState(false);

  const checkAdmin = inboxDetail => {
    const user =
      inboxDetail &&
      inboxDetail.participantsList.filter(
        employee =>
          employee &&
          employee.account &&
          employee.account.accountId === localStorage.getUserAccountId(),
      );
    if (user.length && user[0].role === 'INBOX_ADMIN') {
      setAmIAdmin(true);
    } else {
      setAmIAdmin(false);
    }
  };

  useEffect(() => {
    checkAdmin(inboxDetail);
    fetchMediaFiles(refId, 'UNKNOWN');
  }, []);

  useEffect(() => {
    inboxDetail && setSubjectToEdit(inboxDetail.subject);
  }, [
    inboxDetail && inboxDetail.subject,
    subjectEditVisible,
    convertModalVisibility,
  ]);

  function muteConversationClick() {
    const muteProtoData = new InboxProto.UpdateInboxNotificationRequest();
    muteProtoData.setInboxid(inboxDetail.inboxId);
    muteProtoData.setNotificationtype(inboxDetail.notificationType ? 0 : 3);
    muteInbox(muteProtoData);
  }

  function renderLeaveAndDeleteConversation(inboxDetail) {
    if (inboxDetail && (inboxDetail.inboxType === 1 || ((inboxDetail.inboxType === 2 || inboxDetail.inboxType === 3) && inboxDetail.left)) ) {
      return (
        <p
          className="delete-conversation blue-text"
          onClick={() => toggleDeleteInboxModalVisibility(true)}
        >
          Delete Conversation
        </p>
      );
    }

    if (inboxDetail && ((inboxDetail.inboxType === 2 || inboxDetail.inboxType === 3) && !inboxDetail.left)) {
      return (
        <>
          <p
            className="delete-conversation blue-text"
            onClick={() => toggleLeaveMsgModal(true)}
          >
            Leave Conversation
          </p>
          <br />
          <p
            className="delete-conversation blue-text"
            onClick={() => toggleDeleteInboxModalVisibility(true)}
          >
            Leave and Delete Conversation
          </p>
        </>
      );
    }
  }

  function deleteConversationClick() {
    const deleteId = inboxDetail && inboxDetail.inboxId;
    deleteConversation(deleteId);
  }

  function editSubjectClick() {
    setSubjectEditVisible(false);
    editSubject(mapObjToEdit(subjectToEdit,inboxDetail), inboxDetail.inboxId);
  }

  return (
    <StyledDetail>
      {/* top */}
      <div className="top" hidden={isSelf}>
        <div className="subject mb-10">
          <SecondaryTitle
            title={
              inboxDetail && inboxDetail.inboxType === 1
                ? 'Subject'
                : 'Group Name'
            }
            font="14px"
            margin="0 0 6px 0"
          />
          {subjectEditVisible ? (
            <div className="subject-edit-form">
              <input
                className="subject-edit-input"
                type="text"
                value={subjectToEdit}
                onChange={e => setSubjectToEdit(e.target.value)}
              />
              <div className="actions">
                <p
                  onClick={() => {
                    setSubjectEditVisible(false);
                  }}
                >
                  <CommonIcons.CrossIcon color="#DE4132" />
                </p>
                <p onClick={editSubjectClick}>
                  <CommonIcons.TickIcon />
                </p>
              </div>
            </div>
          ) : (
            <p
              className="subject-text"
              onClick={() => {
                setSubjectEditVisible(true);
              }}
            >
              {(inboxDetail && inboxDetail.subject) || 'No Subject'}
            </p>
          )}
        </div>
        <div className="created-by mb-10">
          <SecondaryTitle title="Created By" font="14px" margin="0 0 6px 0" />
          <Participant
            image={
              inboxDetail &&
              inboxDetail.createdBy &&
              inboxDetail.createdBy.profilePic
            }
            name={
              inboxDetail &&
              inboxDetail.createdBy &&
              inboxDetail.createdBy.fullName
            }
          />
        </div>
        <div className="created-date">
          <SecondaryTitle title="Created Date" font="14px" margin="0 0 6px 0" />
          <DateTime
            dateTime={inboxDetail && DateTimeFormat(inboxDetail.createdAt)}
          />
        </div>
      </div>

      {/* participants */}
      <div hidden={isSelf} className="participants">
        <CollapseContent
          arrowPosition="right"
          arrowColor="#376AF5"
          defaultActiveKey="1"
          label={
            <div>
              <p>
                <span
                  style={{
                    color: '#333333',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Participants
                </span>
                <span
                  style={{
                    color: '#376AF5',
                    marginLeft: '5px',
                    fontSize: '14px',
                  }}
                >
                  (
                  {inboxDetail &&
                    inboxDetail.participantsList &&
                    inboxDetail.participantsList.length}
                  )
                </span>
              </p>
            </div>
          }
        >
          <div className="participant-contents">
            {inboxDetail &&
              inboxDetail.participantsList &&
              inboxDetail.participantsList.map(singleParticipant => (
                <Participant
                  participantDetails={singleParticipant}
                  inboxDetail={inboxDetail}
                  inboxId={inboxDetail && inboxDetail.inboxId}
                  isMuted={singleParticipant.isMuted}
                  image={singleParticipant.account.profilePic}
                  name={singleParticipant.account.fullName}
                  hasActions={
                    singleParticipant.account.accountId !==
                    localStorage.getUserAccountId()
                      ? true
                      : false
                  }
                  role={
                    singleParticipant.role === 'INBOX_ADMIN' ? 'ADMIN' : 'USER'
                  }
                  localStorage={localStorage}
                  muteParticipant={muteParticipant}
                  removeParticipant={removeParticipant}
                  sectionId={sectionId}
                  amIAdmin={amIAdmin}
                  left={inboxDetail.left}
                />
              ))}
            {inboxDetail &&
              (inboxDetail.inboxType === 2 || inboxDetail.inboxType === 3) &&
              amIAdmin && (
                <AddParticipants
                  onClick={() => {
                    toggleAddParticipantsMsgModal(true);
                  }}
                />
              )}
          </div>
        </CollapseContent>
      </div>

      {/* media files  links */}
      <div className="media-links">
        <div
          className="media-contents"
          onClick={() => setRightSideDetailType(RIGHT_SIDE_CONTENT['2'])}
        >
          <div>
            Media, Files and Links{' '}
            {getMediaList(inboxDetail) && getMediaList(inboxDetail).length > 0 && (
              <span
                style={{
                  color: '#376AF5',
                  marginLeft: '5px',
                  fontSize: '14px',
                }}
              >
                ({getMediaList(inboxDetail) && getMediaList(inboxDetail).length}
                )
              </span>
            )}
          </div>
          <CommonIcons.ArrowRight color="#376af5" />
        </div>
        <OverallAttachment
          attachments={getMediaList(inboxDetail)}
          employeeList={employeeList}
          toggleForwardMessageModal={toggleForwardMessageModal}
          inboxDetail={inboxDetail}
          from={from}
          setFrom={setFrom}
          selectedMsg={selectedMsg}
          setSelectedMsg={setSelectedMsg}
          openDeleteAttachmentModal={openDeleteAttachmentModal}
          setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
          setSelectedAttachmentToDelete={setSelectedAttachmentToDelete}
          rtcMessageIdToDelete={rtcMessageIdToDelete}
          setRtcMessageIdToDelete={setRtcMessageIdToDelete}
          attchmentIdToDelete={attchmentIdToDelete}
          setAttachmentIdToDelete={setAttachmentIdToDelete}
          whereIsTheDeleteFrom={'overall'}
          deleteAttachment={deleteAttachment}
          hasAttachmentBeenDeleted={hasAttachmentBeenDeleted}
          setHasAttachmentBeenDeleted={setHasAttachmentBeenDeleted}
        />
      </div>

      {/* bottom section */}
      <div className="bottom-section" hidden={isSelf}>
        {/* convert to group */}
        {inboxDetail && inboxDetail.inboxType === 1 && (
          <div className="convert-to-group">
            <p
              className="blue-text"
              onClick={() => {
                toggleConvertModalVisibility(true);
                setSubjectEditVisible(false);
              }}
            >
              Convert to group
            </p>
            <ConvertToGroupModal
              groupName={subjectToEdit}
              setGroupName={setSubjectToEdit}
              modalVisible={convertModalVisibility}
              btnLoading={btnLoading}
              msg={inboxDetail}
              convertToGroup={convertToGroup}
              closeConvertGroupModal={() => {
                toggleConvertModalVisibility(false);
              }}
            />
          </div>
        )}

        {/* mute conversation */}
        <div className="mute-wrapper">
          <div className="mute-conversation">
            <DescriptionText
              text="Mute Conversation"
              font="14px"
              color="#333333"
            />
            <div className="switch">
              <ToggleSwitch
                checked={
                  (inboxDetail && inboxDetail.notificationType === 1) ||
                  (inboxDetail && inboxDetail.notificationType === 3)
                    ? true
                    : false
                }
                onChange={muteConversationClick}
              />
            </div>
          </div>
          {(inboxDetail && inboxDetail.notificationType === 1) ||
          (inboxDetail && inboxDetail.notificationType === 3) ? (
            <p
              className="mute-settings blue-text"
              onClick={() => toggleMuteSettingModal(true)}
            >
              Mute Settings
            </p>
          ) : null}

          <MuteSettingsModal
            modalVisible={muteSettingModalVisibility}
            closeMuteSettingModal={() => {
              toggleMuteSettingModal(false);
            }}
            muteInbox={muteInbox}
            inboxId={inboxDetail && inboxDetail.inboxId}
            loading={btnLoading}
            mutedType={inboxDetail && inboxDetail.notificationType}
          />
        </div>
        {/* delete conversation */}
        {renderLeaveAndDeleteConversation(inboxDetail)}
      </div>

      {/* delete confirmation modal */}
      <ConfirmationModal
        visibility={deleteModalVisibility}
        title="Delete confirmation"
        cancelLabel="Cancel"
        actionLabel="Delete"
        content="Are you sure you want to delete?"
        closeModal={() => toggleDeleteInboxModalVisibility(false)}
        onClick={deleteConversationClick}
        loading={btnLoading}
      />

      {/* leave confirmation modal */}
      <ConfirmationModal
        visibility={leaveInboxModal}
        title="Leave conversation"
        cancelLabel="Cancel"
        actionLabel="Leave"
        content="Are you sure you want to leave?"
        closeModal={() => toggleLeaveMsgModal(false)}
        onClick={() => LeaveMsg(inboxDetail.inboxId)}
        loading={btnLoading}
      />
    </StyledDetail>
  );
};

export default DetailsContent;
