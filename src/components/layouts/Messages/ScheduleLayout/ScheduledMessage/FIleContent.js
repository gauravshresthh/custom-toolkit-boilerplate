import React from 'react';
import Linkify from '../../../../elements/LinkifyComponent';
import { StyledFile } from './Style';
import DocIcons from '../../../../../assets/images/messages/DocIcons';
import { BytesToSize } from '../../../../../utils/helper';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../views/Message/DetailView/Typing/helper';

const FileContent = ({ msg }) => {
  return (
    <StyledFile>
      <Linkify>
        {msg &&
          msg.attachment &&
          funcToMapMentionIdToName(
            formattedData(msg),
            msg.attachment.caption,
            msg.hasMentions,
          )}
      </Linkify>
      <div
        className="d-flex "
        onClick={() => {
          msg &&
            msg.attachment &&
            window.open(
              msg.attachment.url.includes('https://')
                ? msg.attachment.url
                : 'https://' + msg.attachment.url,
              '_blank',
            );
        }}
      >
        <div className="icon-wrapper">
          <DocIcons.DocumentIcon color="#666" />
        </div>
        <div className="doc-name text-truncate">
          {msg && msg.attachment && msg.attachment.title}
          {msg && msg.attachment && BytesToSize(msg.attachment.size)}
        </div>
      </div>
    </StyledFile>
  );
};

export default FileContent;
