import React from 'react';

import LinkifyComponent from '../../../../../elements/LinkifyComponent';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../../views/Message/DetailView/Typing/helper';

import { Container, ImgContainer } from './style';

function Index({ messageObj }) {
  console.log('messageObj link', messageObj);

  return (
    <Container>
      {messageObj && messageObj.link && messageObj.link.image && (
        <ImgContainer>
          <img src={messageObj.link.image} alt="image" />
        </ImgContainer>
      )}
      <LinkifyComponent
        children={
          messageObj &&
          messageObj.link &&
          messageObj.link.message &&
          funcToMapMentionIdToName(
            formattedData(messageObj),
            messageObj.link.message,
            messageObj.hasMentions,
          )
        }
      />
    </Container>
  );
}

export default Index;
