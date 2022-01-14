import React from 'react';
import PropTypes from 'prop-types';
import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../views/Message/DetailView/Typing/helper';

const TextMessage = ({ messageObj }) => {
  return (
    <>
      {messageObj &&
        messageObj.text &&
        funcToMapMentionIdToName(
          formattedData(messageObj),
          messageObj.text.message,
          messageObj.hasMentions,
          messageObj.clientId,
          !messageObj.isIncoming
        )}
    </>
  );
};

TextMessage.propTypes = {
  messageObj: PropTypes.object,
};

export default TextMessage;
