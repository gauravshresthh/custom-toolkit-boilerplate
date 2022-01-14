import React from 'react';

import DescriptionText from '../../elements/DescriptionText';
import ToggleSwitch from '../../elements/ToggleSwitch';

import { StyledMuteConversation } from './style';

const muteInbox = ({ onChange }) => {
  return (
    <StyledMuteConversation>
      <DescriptionText text="Mute Conversation" color="#333333" />
      <div className="switch">
        <ToggleSwitch onChange={onChange} />
      </div>
    </StyledMuteConversation>
  );
};

export default muteInbox;
