import React, { useState, useCallback, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import Header from '../../../views/Activity/Header';
import MentionList from '../../../views/Activity/List/MentionList';
import IconsList from '../../../views/Activity/IconsList';
import OutlinedSpinner from '../../../elements/Spinner/index.jsx';

import { Container, ListWrapper, NoData } from './style';

function Index({
  inboxList,
  fetchActivityList,
  active,
  setActive,
  setActivityLogAsRead,
  getActivityLogCount,
  nextPaginationCursor,
  paginateActivityList,

  isFilter,
  setFilterActivityList,
  isActivityListLoading,
  setActivityPagination,
  activeOption,
  setActiveOption,

  fetchSelectedActivityMessageList,
  setSelectedMessageIdToScrollTo,
  match,
  setIsSearching,
  areYouStilInboxMember,
  isMember,
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setFilterActivityList(true);
  }, [activeOption]);

  const incrementDelta = useCallback(() => setRender(true), [render]);

  return (
    <Container>
      <Header
        fetchActivityList={fetchActivityList}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        setFilterActivityList={setFilterActivityList}
      />

      <ListWrapper onScroll={() => incrementDelta()}>
        {!isActivityListLoading && inboxList.length == 0 && (
          <NoData>No Data to show</NoData>
        )}

        {inboxList &&
          inboxList
            .sort((a, b) => b.inbox.createdAt - a.inbox.createdAt)
            .map((data, idx) => (
              <MentionList
                activity={data.message}
                notificationid={data.notificationid}
                activityType={data.type}
                active={active}
                setActive={setActive}
                unSeen={data.readstatus == false ? 1 : 0}
                inboxObj={data.inbox}
                sentAtTime={data.inbox.createdAt}
                setActivityLogAsRead={setActivityLogAsRead}
                activityDetail={data}
                getActivityLogCount={getActivityLogCount}
                fetchSelectedActivityMessageList={
                  fetchSelectedActivityMessageList
                }
                setSelectedMessageIdToScrollTo={setSelectedMessageIdToScrollTo}
                match={match}
                setIsSearching={setIsSearching}
                key={idx}
                areYouStilInboxMember={areYouStilInboxMember}
                isMember={isMember}
              />
            ))}

        <Waypoint
          topOffset="0"
          onEnter={() => {
            if (render) {
              nextPaginationCursor && setActivityPagination(true);
              inboxList !== undefined &&
                // to do set the filter id when paginating
                fetchActivityList(activeOption, 10, nextPaginationCursor, true);
            }
          }}
        >
          {nextPaginationCursor && inboxList.length !== 0 ? (
            <div>
              <OutlinedSpinner
                width="24px"
                spinnerStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px 0',
                }}
                color="#376af5"
              />
            </div>
          ) : null}
        </Waypoint>
      </ListWrapper>
    </Container>
  );
}

export default Index;
