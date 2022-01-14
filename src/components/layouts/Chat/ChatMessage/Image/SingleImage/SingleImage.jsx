import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

import { Caption, Container, ImgContainer, SpinnerWrapper } from './style';
import OutlinedSpinner from '../../../../../elements/Spinner';
import parse from 'html-react-parser';

function SingleImage({
  caption,
  img,
  loading,
  formattedData,
  funcToMapMentionIdToName,
  messageObj,
}) {
  return (
    <Container>
      {caption && (
        <Caption>
          {funcToMapMentionIdToName(
            formattedData(messageObj),
            caption,
            messageObj.hasMentions,
          )}
        </Caption>
      )}
      <ImgContainer>
        {loading && (
          <SpinnerWrapper>
            <OutlinedSpinner width="24px" />
          </SpinnerWrapper>
        )}

        <Image
          width="100%"
          height="100%"
          onLoad={() => {}}
          style={{ objectFit: 'contain' }}
          src={img}
        />
      </ImgContainer>
    </Container>
  );
}

SingleImage.propTypes = {
  caption: PropTypes.string,
  img: PropTypes.string,
  loading: PropTypes.bool,
};

export default SingleImage;
