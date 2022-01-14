import React from 'react';
import { StyledScheduledMessageContent } from './Style';
import LinkContent from './LinkContent';
import ImageContent from './ImageContent';
import FileContent from './FIleContent';
import { formattedData, funcToMapMentionIdToName } from '../../../../views/Message/DetailView/Typing/helper';
import VideoWrapper from '../../../../views/Message/DetailView/Typing/Attachment/VideoWrapper';
import AudioWrapper from '../../../../views/Message/DetailView/Typing/Attachment/AudioWrapper';

const ScheduledMessageContent = ({ scheduledMsg }) => {
  if (!scheduledMsg) {
    return null;
  }
  return (
    <StyledScheduledMessageContent>
      {scheduledMsg.messageType === 'TEXT' ? (
        scheduledMsg.text &&
        scheduledMsg.text.message &&
        funcToMapMentionIdToName(
          formattedData(scheduledMsg),
          scheduledMsg.text.message,
          scheduledMsg.hasMentions,
        )
      ) : scheduledMsg.messageType === 'LINK' ? (
        <LinkContent msg={scheduledMsg} />
      ) : scheduledMsg.messageType === 'IMAGE' ? (
        <ImageContent msg={scheduledMsg} />
      ) : scheduledMsg.messageType === 'FILE' ? (
        <FileContent msg={scheduledMsg} />
      ) : scheduledMsg.messageType === 'AUDIO' ? (
        <AudioWrapper audio={scheduledMsg.audio} hideRemoveIcon={true} />
      ) : scheduledMsg.messageType === 'VIDEO' ? (
        <VideoWrapper video={scheduledMsg.video} hideRemoveIcon={true} />
      ) : (
        ''
      )}
    </StyledScheduledMessageContent>
  );
};

export default ScheduledMessageContent;
