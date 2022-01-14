import React from 'react';
import { AudioWrapper } from '../style';
import { formattedData, funcToMapMentionIdToName } from '../../../../views/Message/DetailView/Typing/helper';
import AudioPlayer from './AudioPlayer';

function Audio({ messageObj, audio,isMyMsg }) {
  if (!messageObj) {
    return null;
  }
  if (!audio) {
    return null;
  }
  return (
    <AudioWrapper>
      <div>
        {funcToMapMentionIdToName(
          formattedData(messageObj),
          audio.caption,
          messageObj.hasMentions,
          messageObj.clientId,
          !messageObj.isIncoming
        )}
      </div>
      <AudioPlayer audio={audio} messageObj={messageObj} isMyMsg={isMyMsg} />
    </AudioWrapper>

  );
}

export default Audio;
