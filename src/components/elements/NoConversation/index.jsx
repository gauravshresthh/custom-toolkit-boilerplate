import React from 'react';
import NoMessages from '../../../assets/images/messages/no-message.svg';
import DescriptionText from '../DescriptionText';
import SubmitButton from '../Button/SubmitButton';

import { StyledNoConversation } from './style';

const NoConversation = () => {
  return (
    <StyledNoConversation>
      <img src={NoMessages} alt="No Messages" />
      <DescriptionText
        text="You haven’t started any conversation yet !"
        margin="20px 0 20px 0"
      />

      <SubmitButton text="Start Now" />
    </StyledNoConversation>
  );
};

NoConversation.propTypes = {};

export default NoConversation;
