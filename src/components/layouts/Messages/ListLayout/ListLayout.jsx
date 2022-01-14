/* eslint-disable func-names */
import React, { useState } from 'react';
import styled from 'styled-components';
import CreateMessage from '../../../views/Message/ListView/CreateMessage';
import ScheduledMessage from '../../../views/Message/ListView/ScheduledMessage';
import CollapseContent from '../../../elements/CollpaseContent';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import history from '../../../../utils/history';
import { GetSpecificSectionInboxList } from '../../../../containers/Messages/List/helper';
import ChatThread from '../../../views/Message/ListView/ChatThread/ChatThread';
import PopoverModal from '../../../elements/PopoverModal';
import ConfirmationModal from '../../../elements/ConfirmationModal';
import PopupModal from '../../../elements/PopupModal';
import InputWithLabel from '../../../elements/InputWithLabel/InputField';
import SubmitButton from '../../../elements/Button/SubmitButton';

import { ListIcons } from '../../../../assets/images/list/ListIcons';

const StyledListLayout = styled.div`
  .lists-wrapper {
    padding: 20px 0;
    height: calc(100vh - 120px);

    .ant-collapse-header {
      padding: 0 20px;
    }
  }

  .sections-content {
    width: 290px;
  }

  .msg-wrap {
    position: relative;
    display: flex;
    width: 100%;

    .section-name {
      display: flex;
      width: 100%;
    }

    .ml-auto {
      margin-left: auto;
    }

    &:hover {
      .section-edit-icon {
        display: flex;
      }
    }

    .section-edit-icon {
      display: none;
      margin-right: 5px;
      cursor: pointer;
      width: 20px;
      height: 12px;
      border-radius: 30%;
      align-items: center;
      justify-content: center;

      :hover {
        background: #f0f0f0;
      }
    }

    .plus-icon {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 27px;
    }

    .section-edit-action {
      padding: 4px 8px;
      color: #666;
      cursor: pointer;

      :hover {
        background: #f0f0f0;
      }
    }
  }

  .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
`;

const ListLayout = ({
  match,
  scheduledMsgCount,
  handleChangeInActiveInboxId,
  sectionsList,
  inboxList,
  convertToGroup,
  moveMessage,
  muteInbox,
  deleteConversation,
  btnLoading,
  convertModalVisibility,
  toggleConvertModalVisibility,
  deleteModalVisibility,
  toggleDeleteInboxModalVisibility,
  createSection,
  publishSeenRequest,
  sectionModalVisibility,
  toggleSectionVisibility,
  modalLoader,
  editSection,
  deleteSection,
  setIsSearching,
  LeaveMsg,
  toggleLeaveMsgModal,
  leaveInboxModal,
  setIsFromSchedule,
}) => {
  const { id: activeInboxId } = match.params;
  const [sectionActionVisibility, setSectionActionVisibility] = useState(false);
  const [selectedSection, setSelectedSection] = useState({
    sectionName: '',
    sectionId: '',
  });
  return (
    <StyledListLayout>
      <CreateMessage />
      <div className="lists-wrapper withScrollbar">
        {scheduledMsgCount > 0 && (
          <ScheduledMessage scheduledMsgCount={scheduledMsgCount} />
        )}
        {sectionsList &&
          sectionsList.map(section => (
            <div key={section.sectionId} className="msg-wrap">
              <CollapseContent
                key={section.sectionId}
                defaultActiveKey="1"
                margin="0 0 20px 0"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <div style={{ marginRight: '6.5px' }}>
                      {' '}
                      <ListIcons.DownArrow />{' '}
                    </div>
                  ) : (
                    <div style={{ marginRight: '8px' }}>
                      {' '}
                      <ListIcons.RightArrow />{' '}
                    </div>
                  )
                }
                label={
                  <div className="section-name">
                    {section.sectionName}
                    <div className="ml-auto">
                      {section.sectionId !== '1' &&
                        section.sectionId !== '2' &&
                        section.sectionId !== '3' && (
                          <PopoverModal
                            visible={
                              sectionActionVisibility === section.sectionId
                            }
                            onVisibleChange={visibility => {
                              visibility
                                ? setSectionActionVisibility(section.sectionId)
                                : setSectionActionVisibility(false);
                            }}
                            contentTopMargin="-10px"
                            contentWidth="132px"
                            trigger="hover"
                            placement="bottomRight"
                            popoverContent={
                              <>
                                <div
                                  className="section-edit-action"
                                  onClick={e => {
                                    e.stopPropagation();
                                    setSectionActionVisibility(false);
                                    toggleSectionVisibility('EDIT');
                                    setSelectedSection({
                                      sectionName: section.sectionName,
                                      sectionId: section.sectionId,
                                    });
                                  }}
                                >
                                  Edit
                                </div>
                                <div
                                  className="section-edit-action"
                                  onClick={e => {
                                    e.stopPropagation();
                                    setSectionActionVisibility(false);
                                    toggleSectionVisibility('DELETE');
                                    setSelectedSection({
                                      sectionName: section.sectionName,
                                      sectionId: section.sectionId,
                                    });
                                  }}
                                >
                                  Delete
                                </div>
                              </>
                            }
                            children={
                              <div
                                className="section-edit-icon"
                                onClick={e => e.stopPropagation()}
                              >
                                <CommonIcons.MoreIcon />
                              </div>
                            }
                          />
                        )}
                      {(section.sectionId === '1' ||
                        section.sectionId === '2') && (
                        <div
                          className="plus-icon"
                          onClick={e => {
                            e.stopPropagation();
                            history.push(
                              `/messages/${section.sectionId}/${
                                section.sectionId === '1' ? 'compose' : 'group'
                              }`,
                            );
                          }}
                        >
                          <CommonIcons.PlusIcon />
                        </div>
                      )}
                    </div>
                  </div>
                }
              >
                <div className="sections-content">
                  {GetSpecificSectionInboxList(inboxList, section.sectionId) &&
                    GetSpecificSectionInboxList(inboxList, section.sectionId).map(msg => (
                        <ChatThread
                          match={match}
                          activeInboxId={activeInboxId}
                          sectionId={section.sectionId}
                          key={msg.id}
                          msg={msg}
                          sectionsList={sectionsList}
                          moveMessage={moveMessage}
                          muteInbox={muteInbox}
                          deleteConversation={deleteConversation}
                          handleChangeInActiveInboxId={
                            handleChangeInActiveInboxId
                          }
                          btnLoading={btnLoading}
                          convertToGroup={convertToGroup}
                          convertModalVisibility={convertModalVisibility}
                          toggleConvertModalVisibility={
                            toggleConvertModalVisibility
                          }
                          deleteModalVisibility={deleteModalVisibility}
                          toggleDeleteInboxModalVisibility={
                            toggleDeleteInboxModalVisibility
                          }
                          createSection={createSection}
                          publishSeenRequest={publishSeenRequest}
                          setIsSearching={setIsSearching}
                          LeaveMsg={LeaveMsg}
                          toggleLeaveMsgModal={toggleLeaveMsgModal}
                          leaveInboxModal={leaveInboxModal}
                          setIsFromSchedule={setIsFromSchedule}
                        />
                      ))}
                </div>
              </CollapseContent>
            </div>
          ))}
      </div>
      <ConfirmationModal
        visibility={sectionModalVisibility === 'DELETE'}
        onClick={() => deleteSection(selectedSection.sectionId)}
        closeModal={() => toggleSectionVisibility(false)}
        width="400px"
        title="Confirmation"
        content="Are you sure you want to delete this section ?"
        actionLabel="Delete"
        cancelLabel="Cancel"
        loading={modalLoader}
      />

      <PopupModal
        modalVisible={sectionModalVisibility === 'EDIT'}
        onCancel={() => toggleSectionVisibility(false)}
        width="400px"
        children={
          <StyledListLayout>
            <InputWithLabel
              label="Section Name"
              value={selectedSection.sectionName}
              onChange={e =>
                setSelectedSection({
                  ...selectedSection,
                  sectionName: e.target.value,
                })
              }
            />
            <div className="btn-wrapper">
              <SubmitButton
                onClick={() => {
                  editSection(
                    selectedSection.sectionId,
                    selectedSection.sectionName,
                  );
                }}
                width="100px"
                text="Save"
                loading={modalLoader}
              />
            </div>
          </StyledListLayout>
        }
        showCloseIcon
        modalTitle="Edit Section"
      />
    </StyledListLayout>
  );
};

export default ListLayout;
