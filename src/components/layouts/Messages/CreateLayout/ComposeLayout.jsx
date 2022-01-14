import React, { useState } from 'react';
import { StyledCreateMessageLayout } from './style';
import SuggestParticipantPopover from '../../../views/Message/CreateView/SuggestParticipantPopover';

const ComposeLayout = ({
  searchThreads,
  selectedParticipants,
  setSelectedParticipants,
  threadSuggestion,
  selectSearchedParticipants,
  fetchGroupMsgList,
  showPopover,
  setShowPopover,
  clearMsgList,
  setShowMemberModal,
  setSelectedMember,
}) => {
  const [searchedValue, setSearchedValue] = useState('');
  return (
    <StyledCreateMessageLayout>
      <div className="title">Compose Message</div>
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
        setShowMemberModal={setShowMemberModal}
        setSelectedMember={setSelectedMember}
      />
    </StyledCreateMessageLayout>
  );
};

export default ComposeLayout;
