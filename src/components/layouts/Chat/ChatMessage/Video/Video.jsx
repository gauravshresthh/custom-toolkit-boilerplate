import React from 'react';
import { formattedData, funcToMapMentionIdToName } from '../../../../views/Message/DetailView/Typing/helper';

function Video({ messageObj }) {
  if (!messageObj) {
    return null;
  }
  return (
    <div style={{ minWidth: '250px', maxWidth: '300px' }}>
      <div>
        {funcToMapMentionIdToName(
          formattedData(messageObj),
          messageObj.video && messageObj.video.caption,
          messageObj.hasMentions,
          messageObj.clientId,
          !messageObj.isIncoming
        )}
      </div>
      <video controls style={{ width: '100%' }}>
        <source src={messageObj.video && messageObj.video.url} type='video/mp4' />
      </video>
    </div>

  );
}

export default Video;
