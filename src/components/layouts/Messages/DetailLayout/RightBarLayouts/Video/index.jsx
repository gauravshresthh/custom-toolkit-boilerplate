import React from 'react';
import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../../views/Message/DetailView/Typing/helper';

import { VideoContainer } from './style';

function Index({ messageObj }) {
  if (!messageObj) {
    return null;
  }

  return (
    <VideoContainer>
      <div>
        {funcToMapMentionIdToName(
          formattedData(messageObj),
          messageObj.video && messageObj.video.caption,
          messageObj.hasMentions,
        )}
      </div>
      <video controls style={{ width: '100%' }}>
        <source
          src={messageObj.video && messageObj.video.url}
          type="video/mp4"
        />
      </video>
    </VideoContainer>
  );
}

export default Index;
