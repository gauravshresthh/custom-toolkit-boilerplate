import React from 'react';
import PropTypes from 'prop-types';
import DocIcons from '../../../../assets/images/messages/DocIcons';

import { Caption, Details, DocTitle, IconContainer, Size, TopContainer } from './style';
import OutlinedSpinner from '../../../elements/Spinner';
import { formattedData, funcToMapMentionIdToName } from '../../../views/Message/DetailView/Typing/helper';
import { BytesToSize } from '../../../../utils/helper';

function Index({
                 title,
                 isMyMsg,
                 isUploading,
                 url,
                 messageObj,
               }) {
  function renderIconsBasedOnFileUrl(url) {
      // get the file type .mp3 .jpg .pdf etc
      const extention =url && url.split(/[#?]/)[0]
        .split('.')
        .pop()
        .trim();

      switch (extention) {
        case 'pdf':
          return <DocIcons.PdfIcons color={isMyMsg ? '#fff':'#666'} />;

        case 'zip':
          return <DocIcons.ZipIcons color={isMyMsg ? '#fff':'#666'} />;

        default:
          return <DocIcons.DocumentIcon color={isMyMsg ? '#fff':'#666'} />;
      }
  }

  return (
    <>
      <Caption>
        {messageObj &&
        messageObj.attachment &&
        messageObj.attachment.caption &&
        funcToMapMentionIdToName(
          formattedData(messageObj),
          messageObj.attachment.caption,
          messageObj.hasMentions,
          messageObj.clientId,
          !messageObj.isIncoming
        )}
      </Caption>
      <TopContainer>
        <IconContainer>
          {isUploading ? (
            <OutlinedSpinner color={isMyMsg ? '#fff' : '#666'} />
          ) : renderIconsBasedOnFileUrl(url)}
        </IconContainer>
        <Details
          onClick={() => {
            window.open(
              url.includes('https://') ? url : 'https://' + url,
              '_blank',
            );
          }}
        >
          <DocTitle>{title}</DocTitle>
          <Size>
            {messageObj &&
            messageObj.attachment &&
            BytesToSize(messageObj.attachment.size)}
          </Size>
        </Details>
      </TopContainer>
    </>
  );
}

Index.propTypes = {
  format: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  isMyMsg: PropTypes.bool,
  isUploading: PropTypes.bool,
};

export default Index;
