import React, { useEffect, useState } from 'react';
import { StyledCreateMessageLayout } from './style';
import SuggestParticipantPopover from '../../../views/Message/CreateView/SuggestParticipantPopover';

const CreateLayout = ({
  subject,
  setSubject,
  selectedParticipants,
  setSelectedParticipants,
  threadSuggestion,
  clearMsgList,
  selectSearchedParticipants,
  searchThreads,
  fetchGroupMsgList,
  showPopover,
  setShowPopover,
  setSelectedMember,
  setShowMemberModal,
}) => {
  const [searchedValue, setSearchedValue] = useState('');
  useEffect(() => {
    if (
      selectedParticipants &&
      selectedParticipants[0] &&
      selectedParticipants[0].type === 1
    ) {
      setSubject('');
    }
  }, [selectedParticipants]);
  return (
    <StyledCreateMessageLayout>
      <div className="title">New Message</div>
      <SuggestParticipantPopover
        setSelectedParticipants={setSelectedParticipants}
        selectedParticipants={selectedParticipants}
        showPopover={showPopover}
        setShowPopover={setShowPopover}
        searchThreads={searchThreads}
        threadSuggestion={threadSuggestion}
        selectSearchedParticipants={selectSearchedParticipants}
        fetchGroupMsgList={fetchGroupMsgList}
        clearMsgList={clearMsgList}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
        setSelectedMember={setSelectedMember}
        setShowMemberModal={setShowMemberModal}
      />
      <input
        disabled={
          selectedParticipants &&
          selectedParticipants[0] &&
          selectedParticipants[0].type === 1
        }
        placeholder="Enter subject"
        className="create-msg-input"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
    </StyledCreateMessageLayout>
  );
};

export default CreateLayout;
