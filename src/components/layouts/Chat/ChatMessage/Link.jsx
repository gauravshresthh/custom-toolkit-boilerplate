import React from 'react';
import PropTypes from 'prop-types';

import LinkifyComponent from '../../../elements/LinkifyComponent';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../views/Message/DetailView/Typing/helper';

import { Description, ImgContainer, Link, Title } from './style';

function LinkMessage({ messageObj, setIsImgLoading }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '250px',
      }}
    >
      <Link>
        <LinkifyComponent
          children={
            messageObj &&
            messageObj.link &&
            messageObj.link.message &&
            funcToMapMentionIdToName(
              formattedData(messageObj),
              messageObj.link.message,
              messageObj.hasMentions,
              messageObj.clientId,
              !messageObj.isIncoming,
            )
          }
        />
      </Link>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open(
            messageObj &&
              messageObj.link &&
              messageObj.link.url.includes('https://')
              ? messageObj.link.url
              : 'https://' + messageObj &&
                  messageObj.link &&
                  messageObj.link.url,
            '_blank',
          );
        }}
      >
        {messageObj && messageObj.link && messageObj.link.image && (
          <ImgContainer>
            <img
              src={messageObj.link.image}
              onLoad={() => setIsImgLoading(true)}
              onError={() => setIsImgLoading(false)}
              alt="image"
            />
          </ImgContainer>
        )}
        <Title>
          {messageObj &&
            messageObj.link &&
            messageObj.link.title &&
            funcToMapMentionIdToName(
              formattedData(messageObj),
              messageObj.link.title,
              messageObj.hasMentions,
            )}
        </Title>
        <Description>
          {messageObj && messageObj.link && messageObj.link.description}
        </Description>
      </div>
    </div>
  );
}

LinkMessage.propTypes = {
  messageObj: PropTypes.object,
};

export default LinkMessage;
