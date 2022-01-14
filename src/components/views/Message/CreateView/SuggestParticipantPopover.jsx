import React from 'react';
import CustomPopover from '../../../elements/CustomPopover/CustomPopover';
import { AddThreads, RemoveThread, ThreadExists } from '../../../../containers/Messages/CreateMessage/helper';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import LocalDb from '../../../../localStorage';
import ThreadView from './Thread/ThreadView';
import { Inbox } from '../../../../containers/Messages/model/InboxModel';
import Image from '../../../elements/Image/Image';

const SuggestParticipantPopover = ({
                                     showPopover,
                                     setShowPopover,
                                     threadSuggestion,
                                     selectedParticipants,
                                     setSelectedParticipants,
                                     selectSearchedParticipants,
                                     clearMsgList,
                                     searchedValue,
                                     setSearchedValue,
                                     searchThreads,
                                     fetchGroupMsgList,
                                     setShowMemberModal,
                                     setSelectedMember,
                                   }) => {
  return (
    <CustomPopover
      popoverMaxHeight='300px'
      setShowPopover={setShowPopover}
      showPopover={showPopover}
      children={
        <div className='participants-wrapper'>
          {selectedParticipants &&
          selectedParticipants.map(single => (
            <div className='participant-tags'
                 onClick={() => {
                   setShowMemberModal(true);
                   setSelectedMember(single.inbox.participantsList);
                 }}
                 style={{ cursor: single.inbox && (single.inbox.inboxType === 2 || single.inbox.inboxType === 3) ? 'pointer' : 'auto' }}
            >
              {single.type === 2 ?
                <>
                  {/*if type is employee*/}
                  <Image src={single.image} width='24px' height='24px' />
                  {single.inbox && single.inbox.inboxId ? (single.inbox.subject ||
                    Inbox.GetParticipantsName(single.inbox.participantsList)) : single.name}
                </>
                :
                <>
                  {/*if type is inbox*/}
                  {single.inbox && Inbox.GetInboxProfilePic(single.inbox, '24px', '24px')}
                  {single.inbox && (single.inbox.subject || Inbox.GetParticipantsName(single.inbox.participantsList))}
                </>}
              <div
                className='close-icon'
                onClick={(e) => {
                  e.stopPropagation();
                  if (RemoveThread(
                    selectedParticipants,
                    single.id,
                  ) && RemoveThread(
                    selectedParticipants,
                    single.id,
                  ).length > 0) {
                    selectSearchedParticipants(RemoveThread(
                      selectedParticipants,
                      single.id,
                    ));
                  } else {
                    clearMsgList();
                  }
                  setSelectedParticipants(
                    RemoveThread(
                      selectedParticipants,
                      single.id,
                    ),
                  );
                  setShowPopover(false);
                }
                }
              >
                <CommonIcons.CrossIcon width='10px' height='10px' />
              </div>
            </div>
          ))}
          <input
            value={searchedValue}
            placeholder='Enter the name of participants, subject or group '
            onChange={e => {
              setSearchedValue(e.target.value);
              searchThreads(e.target.value);
            }}
          />
        </div>
      }
      popoverContent={
        threadSuggestion &&
        threadSuggestion.map(
          single =>
            !ThreadExists(selectedParticipants, single.id) &&
            LocalDb.getUserAccountId() !== single.id && (
              <ThreadView thread={single} onThreadClick={() => {
                setSearchedValue('');
                setShowPopover(false);
                setSelectedParticipants(
                  AddThreads(selectedParticipants, single),
                );
                if (single.type === 1) {
                  fetchGroupMsgList(single.id);
                } else {
                  selectSearchedParticipants(AddThreads(selectedParticipants, single));
                }
              }} />
            ),
        )
      }
    />
  );
};

export default SuggestParticipantPopover;
