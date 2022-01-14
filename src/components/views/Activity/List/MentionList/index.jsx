import React from 'react';

import history from '../../../../../utils/history';

import { showDateAccordingly } from '../../../../../utils/dateHelper';

import ActivityListIcons from '../../../../../assets/images/activity/ActivityListIcons';
import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../Message/DetailView/Typing/helper';

import {
  Container,
  UnreadIcon,
  IconWrapper,
  Details,
  TopDetails,
  SubIconWrapper,
  CallBackButton,
  Text,
  TextAndDateWrapper,
  SubText,
  Date,
} from './style';

function Index({
  key,
  activityType,
  selected,
  unSeen,
  profilePic,

  unread = false,
  sentAtTime,
  inboxObj,
  notificationid,
  active,
  setActive,
  setActivityLogAsRead,
  activityDetail,
  getActivityLogCount,
  activity,
  fetchSelectedActivityMessageList,
  setSelectedMessageIdToScrollTo,
  match,
  setIsSearching,
  areYouStilInboxMember,
  isMember,
}) {
  function renderIcons(type, activity1, activityDetail1) {
    const fullName =
      activity1 &&
      activity1.senderAccountObj &&
      activity1.senderAccountObj.fullName;

    // TODO retrive subject
    switch (type) {
      case 7:
        return {
          icon: <ActivityListIcons.Mention />,
          message: `${fullName} mentioned you ${
            activityDetail1 && activityDetail1.inbox.subject
              ? `in ${activityDetail1.inbox.subject}`
              : ''
          }`,
          subText: renderSubText(activity),
        };
      case 8:
        return {
          icon: <ActivityListIcons.Reply />,
          message: `${fullName} replied to your message ${
            activityDetail1 && activityDetail1.inbox.subject
              ? `in ${activityDetail1.inbox.subject}`
              : ''
          }`,
          subText: renderSubText(activity),
        };
      case 10:
        return {
          icon: <ActivityListIcons.Reaction />,
          message: `${fullName} reacted to your message ${
            activityDetail1 && activityDetail1.inbox.subject
              ? `in ${activityDetail1.inbox.subject}`
              : ''
          }`,
          subText: renderSubText(activity),
        };
      case 12:
        return {
          icon: <ActivityListIcons.MissedCall />,
          message: `${fullName}`,
          subText: 'Missed Call',
        };
      default:
        return {
          icon: <ActivityListIcons.MissedCall />,
          message: `${fullName}`,
          subText: 'Missed Call',
        };
    }
  }

  function renderSubText(activityDetail1) {
    const messageType = activityDetail1 && activityDetail1.messageType;
    switch (messageType) {
      case 'TEXT':
        return funcToMapMentionIdToName(
          formattedData(activityDetail1),
          activityDetail1.text.message,
          activityDetail1.hasMentions,
        );

      case 'LINK':
        return 'Sent a link';

      case 'IMAGE':
        return 'Sent an image';

      case 'FILE':
        return 'Sent an attachment';

      default:
        return null;
    }
  }

  return (
    <Container
      key={key}
      unSeen={unSeen}
      selected={active == notificationid ? 1 : 0}
      onClick={() => {
        setActive(notificationid);
        setIsSearching(
          activity.parentMessageId
            ? activity.parentMessageId
            : activity.rtcMessageId,
        );
        inboxObj.lastMessage &&
          setActivityLogAsRead(activityDetail.notificationid);
        console.log({activity});
        setSelectedMessageIdToScrollTo(activity);

        // activityDetail.inbox.isMember
        history.push(`/messages/${inboxObj.sectionId}/${inboxObj.inboxId}`);
        // : areYouStilInboxMember(activityDetail.inbox.isMember);
      }}
    >
      {unSeen == 1 && (
        <UnreadIcon>
          <span />
        </UnreadIcon>
      )}

      <IconWrapper>
        {renderIcons(activityType, activity, activityDetail).icon}
      </IconWrapper>
      <Details>
        <TopDetails>
          <SubIconWrapper />
          <Text unSeen={unSeen}>
            {activityDetail
              ? renderIcons(activityType, activity, activityDetail).message
              : null}
          </Text>

          {activityType == 12 && (
            <CallBackButton
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <ActivityListIcons.Phone />
              <span>Call Back</span>
            </CallBackButton>
          )}
        </TopDetails>

        <TextAndDateWrapper>
          <SubText>
            {renderIcons(activityType, activity, activityDetail).subText}
          </SubText>

          {activityDetail.type !== 10 && (
            <Date>{showDateAccordingly(sentAtTime)}</Date>
          )}
        </TextAndDateWrapper>
      </Details>
    </Container>
  );
}

export default Index;
