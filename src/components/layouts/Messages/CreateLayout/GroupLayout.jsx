import React, { useState } from 'react';
import { StyledCreateMessageLayout, StyledParticipantWrapper } from './style';
import CustomPopover from '../../../elements/CustomPopover/CustomPopover';
import Participant from '../../../elements/Participant';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import {
  AddParticipants,
  AddThreads,
  ParticipantExists,
  RemoveParticipants,
  ThreadExists,
} from '../../../../containers/Messages/CreateMessage/helper';
import LocalDb from '../../../../localStorage';
import SubmitButton from '../../../elements/Button/SubmitButton';
import SwitchComponent from '../../../elements/Switch';
import history from '../../../../utils/history';
import ThreadView from '../../../views/Message/CreateView/Thread/ThreadView';
import { SearchEmployeeInArray } from '../../../../utils/helper';

const GroupLayout = ({
  selectedParticipants,
  setSelectedParticipants,
  searchedParticipants,
  setSearchedParticipants,
  loading,
  threadSuggestion,
  searchThreads,
  createNewInbox,
  employeeList
}) => {
  const [searchedGroupValue, setSearchedGroupValue] = useState('');
  const [searchedParticipantValue, setSearchedParticipantValue] = useState('');
  const [showGroupPopover, setShowGroupPopover] = useState(false);
  const [showParticipantPopover, setShowParticipantPopover] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  return (
    <StyledCreateMessageLayout>
      <div className="title">New Group</div>
      <CustomPopover
        showPopover={showGroupPopover}
        setShowPopover={setShowGroupPopover}
        children={
          <div className="participants-wrapper">
            <input
              value={searchedGroupValue}
              placeholder="Group name"
              onChange={e => {
                setSearchedGroupValue(e.target.value);
                searchThreads(e.target.value, undefined, 'GROUP');
              }}
            />
            <div className="switch-wrapper">
              <SwitchComponent
                label="Private Group"
                checked={isPrivate}
                onChange={e => {
                  e.stopPropagation();
                  setIsPrivate(!isPrivate);
                }}
              />
            </div>
          </div>
        }
        popoverContent={
          threadSuggestion &&
          threadSuggestion.map(
            single =>
              !ThreadExists(selectedParticipants, single.id) &&
              LocalDb.getUserAccountId() !== single.id && (
                <ThreadView
                  thread={single}
                  onThreadClick={() => {
                    setSearchedGroupValue('');
                    setShowGroupPopover(false);
                    setSelectedParticipants(
                      AddThreads(selectedParticipants, single),
                    );
                    history.push(`/messages/2/${single.id}`);
                  }}
                />
              ),
          )
        }
      />

      <CustomPopover
        showPopover={showParticipantPopover}
        setShowPopover={setShowParticipantPopover}
        children={
          <div className="participants-wrapper">
            {selectedParticipants &&
              selectedParticipants.map(single => (
                <div className="participant-tags" key={single.accountId}>
                  <Participant
                    image={single.profilePic}
                    imgSize="22px"
                    name={single.fullName}
                    extraCss={StyledParticipantWrapper}
                  />
                  <div
                    className="close-icon"
                    onClick={() =>
                      setSelectedParticipants(
                        RemoveParticipants(
                          selectedParticipants,
                          single.accountId,
                        ),
                      )
                    }
                  >
                    <CommonIcons.CrossIcon width="10px" height="10px" />
                  </div>
                </div>
              ))}
            <input
              placeholder="Enter the name of participants"
              value={searchedParticipantValue}
              onChange={e => {
                setSearchedParticipantValue(e.target.value);
                setSearchedParticipants(SearchEmployeeInArray(e.target.value,employeeList))
              }}
            />
          </div>
        }
        popoverContent={
          searchedParticipants &&
          searchedParticipants.map(
            single =>
              !ParticipantExists(selectedParticipants, single.accountId) &&
              LocalDb.getUserAccountId() !== single.accountId && (
                <div
                  className="popover-content"
                  key={single.accountId}
                  onClick={() => {
                    setSelectedParticipants(
                      AddParticipants(selectedParticipants, single),
                    );
                    setSearchedParticipantValue('');
                  }}
                >
                  <Participant
                    image={single.profilePic}
                    imgSize="30px"
                    name={single.fullName}
                    extraCss={StyledParticipantWrapper}
                  />
                </div>
              ),
          )
        }
      />
      <div className="btn-wrapper">
        <SubmitButton
          loading={loading}
          text="Create"
          width="145px"
          disable={!searchedGroupValue || !selectedParticipants}
          onClick={() => {
            createNewInbox(
              isPrivate ? 2 : 3,
              undefined,
              searchedGroupValue,
              selectedParticipants,
              isPrivate ? '2' : '3',
            );
          }}
        />
      </div>
    </StyledCreateMessageLayout>
  );
};

export default GroupLayout;
