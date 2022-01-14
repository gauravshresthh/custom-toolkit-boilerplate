import React from 'react';

import {
  Container,
  EventButton,
  HeaderWrapper,
  HeaderText,
  Message,
  IconWrapper,
  Description,
  DetailsList,
  Li
} from './style';

import SelectedOptionsIcons from '../../../../assets/images/activity/SelectedOptionsIcons';

const fakeData = [
  {
    id: 0,
    icon: '',
    text: 'invite.anydone.com/qmg-mxmq-ckg',
  },
  {
    id: 1,
    icon: '',
    text: 'James Corner',
  },
  {
    id: 2,
    icon: '',
    text: '20 minutes before',
  },
  {
    id: 3,
    icon: '',
    text: 'Treeleaf Technologies Pvt Ltd.',
  },
];

function renderButton(text) {
  return <EventButton>{text}</EventButton>;
}

function renderMessage(text) {
  return <Message>{text}</Message>;
}

function renderEventHeader(icon, text) {
  return (
    <HeaderWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <HeaderText>{text}</HeaderText>
    </HeaderWrapper>
  );
}

function renderDescription(text) {
  return <Description>{text}</Description>;
}

function renderDetailsList(data) {
  return (
    <DetailsList>
      <ul>
        {data.map(items => (
          <Li>{items.text}</Li>
        ))}
      </ul>
    </DetailsList>
  );
}

function Index({ icon }) {
  return (
    <Container>
      {renderEventHeader(
        <SelectedOptionsIcons.Events color="#376AF5" width="23" height="23" />,
        'Reminder: Reply to client',
      )}
      {renderDescription('Wednesday 12 Sep, 2021 (10 AM)')}
      {renderMessage('A monthly meeting organized for UI/ UX team.')}
      {renderDetailsList(fakeData)}
      {renderButton('Mark as done')}
    </Container>
  );
}

export default Index;
