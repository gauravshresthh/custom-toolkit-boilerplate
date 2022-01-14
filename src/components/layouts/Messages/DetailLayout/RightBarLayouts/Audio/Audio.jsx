import React from 'react';
import { Wrapper, AudioWrapper } from './style';
import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../../views/Message/DetailView/Typing/helper';
import AudioPlayer from './AudioPlayer';

function Audio({ messageObj, audio, isMyMsg }) {
  if (!messageObj) {
    return null;
  }
  if (!audio) {
    return null;
  }
  return (
    <Wrapper>
      <AudioWrapper>
        <div>
          {funcToMapMentionIdToName(
            formattedData(messageObj),
            audio.caption,
            messageObj.hasMentions,
          )}
        </div>
        <AudioPlayer audio={audio} messageObj={messageObj} isMyMsg={isMyMsg} />
      </AudioWrapper>
    </Wrapper>
  );
}

export default Audio;
