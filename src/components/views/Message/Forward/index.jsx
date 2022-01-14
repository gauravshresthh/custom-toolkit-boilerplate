import React, { useState, useEffect } from 'react';

import SearchBar from '../../../elements/SearchBar';
import Participant from '../../../elements/Participant';
import Checkbox from '../../../elements/Checkbox';
import SubmitButton from '../../../elements/Button/SubmitButton';
import Image from '../../../elements/Image/Image';

import { SearchEmployeeInArray } from '../../../../containers/Messages/CreateMessage/helper';

import NoData from '../../../elements/NoData';

import { Inbox } from '../../../../containers/Messages/model/InboxModel';

import {
  Container,
  Hr,
  List,
  Main,
  ParticipantNameCSS,
  SearchBarCSS,
  Title,
  Ul,
  UserContainer,
  ButtonContainer,
  ForwardContainer,
  ForwardList,
  ListInner,
} from './style';

function Index({
  loading,
  employeeList,
  selectedParticipants,
  setSelectedParticipants,
  selecteInboxList,
  setSelecteInboxList,
  buttonText,
  buttonOnClick,
  searchThreads,
  threadSuggestion,
  isFrom,
}) {
  const [value, setValue] = useState('');
  const [disable, setDisable] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
  const [searchedParticipants, setSearchedParticipants] = useState(undefined);

  useEffect(() => {
    setSelectedParticipants([]);
    setSelecteInboxList && setSelecteInboxList([]);
    setCheckedItems({});
    employeeList && setSearchedParticipants(employeeList);
  }, [employeeList]);

  useEffect(() => {
    // searchThreads && searchThreads('');
    setSelectedParticipants([]);
    setSelecteInboxList && setSelecteInboxList([]);
    setCheckedItems({});
  }, []);

  useEffect(() => {
    selectedParticipants.length > 0 ||
    (selecteInboxList && selecteInboxList.length > 0)
      ? setDisable(false)
      : setDisable(true);
  }, [selectedParticipants, selecteInboxList]);

  const renderNoData = searchedParticipants => {
    if (searchedParticipants && searchedParticipants.length == 0) {
      return <NoData />;
    }
    return null;
  };

  const handleChange = (user, event) => {
    setCheckedItems({
      ...checkedItems,
      [user.profileId]: event,
    });
  };

  return (
    <Container>
      <Hr />
      <SearchBar
        // value={value}
        width="100%"
        addCss={SearchBarCSS}
        placeholder={
          isFrom == 'forward'
            ? 'Enter the name of participants, subject or group '
            : 'Enter name'
        }
        getSearchValue={setValue}
        onChange={e => {
          if (isFrom == 'forward') {
            console.log('what is text', e);
            // setSearchedParticipants(e);
            searchThreads(e);
          } else {
            setSearchedParticipants(SearchEmployeeInArray(e, employeeList));
          }
        }}
      />
      <Hr />
      <Main>
        <UserContainer>
          <Title>Recent</Title>

          {isFrom == 'forward' ? (
            <ForwardContainer className="withScrollbar">
              {threadSuggestion &&
                threadSuggestion.map(single => (
                  <label htmlFor={`custom-checkbox-${single.id}`}>
                    <ForwardList>
                      {single.type === 2 ? (
                        <ListInner>
                          {/*if type is employee*/}
                          <Image
                            src={single.image}
                            width="30px"
                            height="30px"
                          />
                          <p>
                            {single.inbox && single.inbox.inboxId
                              ? single.inbox.subject ||
                                Inbox.GetParticipantsName(
                                  single.inbox.participantsList,
                                )
                              : single.name}
                          </p>
                        </ListInner>
                      ) : (
                        <ListInner>
                          {/*if type is inbox*/}
                          {single.inbox &&
                            Inbox.GetInboxProfilePic(
                              single.inbox,
                              '30px',
                              '30px',
                            )}
                          <p className="inboxParticipant">
                            {single.inbox &&
                              (single.inbox.subject ||
                                Inbox.GetParticipantsName(
                                  single.inbox.participantsList,
                                ))}
                          </p>
                        </ListInner>
                      )}
                      <Checkbox
                        id={`custom-checkbox-${single.id}`}
                        defaultChecked={
                          checkedItems && Object.keys(checkedItems).length == 0
                            ? false
                            : checkedItems[single.id]
                        }
                        onChange={e => {
                          handleChange(single, e);
                          if (e) {
                            console.log({ single }, { e });
                            if (single.type === 1) {
                              setSelecteInboxList([
                                ...selecteInboxList,
                                single.id,
                              ]);
                            }
                            if (single.type === 2) {
                              setSelectedParticipants([
                                ...selectedParticipants,
                                single.refId,
                              ]);
                            }
                          } else {
                            if (single.type === 1) {
                              const filterId =
                                selecteInboxList &&
                                selecteInboxList.filter(
                                  data => data !== single.id,
                                );
                              if (filterId.length == 0) {
                                setSelecteInboxList([]);
                              } else {
                                setSelecteInboxList(filterId);
                              }
                            }
                            if (single.type === 2) {
                              const filterId1 =
                                selectedParticipants &&
                                selectedParticipants.filter(
                                  data => data !== single.refId,
                                );
                              if (filterId1.length == 0) {
                                setSelectedParticipants([]);
                              } else {
                                setSelecteInboxList(filterId1);
                              }
                            }
                          }
                        }}
                      />
                    </ForwardList>
                  </label>
                ))}
            </ForwardContainer>
          ) : (
            <Ul className="withScrollbar">
              {renderNoData(searchedParticipants)}
              {searchedParticipants &&
                searchedParticipants.map(user => (
                  <label htmlFor={`custom-checkbox-${user.profileId}`}>
                    <List key={user.profileId}>
                      <Participant
                        image={user.profilePic}
                        imgSize="31px"
                        name={user.fullName}
                        extraCss={ParticipantNameCSS}
                      />
                      <Checkbox
                        id={`custom-checkbox-${user.profileId}`}
                        defaultChecked={
                          checkedItems && Object.keys(checkedItems).length == 0
                            ? false
                            : checkedItems[user.profileId]
                        }
                        onChange={e => {
                          handleChange(user, e);
                          if (e) {
                            setSelectedParticipants([
                              ...selectedParticipants,
                              user.profileId,
                            ]);
                          } else {
                            const filterId =
                              selectedParticipants &&
                              selectedParticipants.filter(
                                data => data !== user.profileId,
                              );
                            if (filterId.length == 0) {
                              setSelectedParticipants([]);
                            } else {
                              setSelectedParticipants(filterId);
                            }
                          }
                        }}
                      />
                    </List>
                  </label>
                ))}
            </Ul>
          )}
        </UserContainer>
        <ButtonContainer>
          <SubmitButton
            disable={disable}
            // from can have 2 values
            // 1 if its from image lightBox, 0 for rest, -1 for the right hand side
            onClick={() => {
              buttonOnClick();
              // setSelectedParticipants([]);
              // setCheckedItems({});
            }}
            loading={loading}
            text={buttonText}
          />
        </ButtonContainer>
      </Main>
    </Container>
  );
}

export default Index;
