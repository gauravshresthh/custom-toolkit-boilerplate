import React, { useState } from 'react';

import SelectedOption from '../../../../components/elements/SelectedOption';

import PopoverModal from '../../../elements/PopoverModal';

import {
  Container,
  Text,
  RightWrapper,
  IconWrapper,
  OptionWrapper,
  FilterContainer,
  FilterList,
  PopoverCss,
} from './style';

import ActivityIcons from '../../../../assets/images/activity/icons';
import SelectedOptionsIcons from '../../../../assets/images/activity/SelectedOptionsIcons';

function Index({ fetchActivityList, activeOption, setActiveOption }) {
  const [showPopoverAction, setShowPopoverAction] = useState(false);

  const fakeData = [
    {
      id: 0,
      text: 'Mentions',
      icon: <SelectedOptionsIcons.Mentions />,
    },
    {
      id: 1,
      text: 'Replies',
      icon: <SelectedOptionsIcons.Replies />,
    },
    {
      id: 2,
      text: 'Private Replies',
      icon: <SelectedOptionsIcons.PrivateReplies />,
    },
    {
      id: 3,
      text: 'Reactions',
      icon: <SelectedOptionsIcons.Reactions />,
    },
    {
      id: 4,
      text: 'Missed Calls',
      icon: <SelectedOptionsIcons.MissedCalls />,
    },
    {
      id: 5,
      text: 'Reminders',
      icon: <SelectedOptionsIcons.Reminders />,
    },
    {
      id: 6,
      text: 'Events',
      icon: <SelectedOptionsIcons.Events />,
    },
    {
      id: 7,
      text: 'Broadcasts',
      icon: <SelectedOptionsIcons.BroadCasts />,
    },
    {
      id: 8,
      text: 'Meetings',
      icon: <SelectedOptionsIcons.Meetings />,
    },
  ];
  const selected = fakeData.filter(data => data.id == activeOption);

  return (
    <>
      <Container>
        <Text>Activity</Text>

        <RightWrapper>
          <OptionWrapper>
            {activeOption !== -1 && (
              <SelectedOption
                icon={selected[0].icon}
                text={selected[0].text}
                onClose={() => {
                  setActiveOption(-1);
                  fetchActivityList(-1);
                }}
              />
            )}
          </OptionWrapper>
          <PopoverModal
            trigger="click"
            placement="bottomRight"
            contentWidth="150px"
            contentTopMargin="0px"
            maxHeight="auto"
            addCSS={PopoverCss}
            popoverContent={
              <FilterContainer>
                {fakeData.map(data => (
                  <FilterList
                    key={data.id}
                    onClick={() => {
                      setActiveOption(data.id);
                      setShowPopoverAction(false);
                      fetchActivityList(data.id, 10, undefined, false);
                      // fetch api with the enum
                    }}
                    selected={activeOption == data.id}
                  >
                    <span>
                      {data.icon} <span className="text">{data.text}</span>
                    </span>
                  </FilterList>
                ))}
              </FilterContainer>
            }
          >
            <IconWrapper
              onClick={() => setShowPopoverAction(!showPopoverAction)}
            >
              <ActivityIcons.Filter />
            </IconWrapper>
          </PopoverModal>
        </RightWrapper>
      </Container>
    </>
  );
}

export default Index;
