import React, { useState } from 'react';
import { Image } from 'antd';
import { ImageWrapper, StyledImage } from './Style';
import ImageLightBox from '../../../../elements/ImageLightBox';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../views/Message/DetailView/Typing/helper';

const ImageContent = ({ msg }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <div style={{ width: '100%' }}>
        {msg &&
          msg.image &&
          funcToMapMentionIdToName(
            formattedData(msg),
            msg.image.caption,
            msg.hasMentions,
          )}
      </div>
      <StyledImage>
        {msg &&
          msg.image &&
          msg.image.imagesList &&
          msg.image.imagesList.slice(0, 3).map((singleImg, index) => {
            return (
              <div className="img-wrapper">
                <Image
                  src={singleImg.url}
                  borderRadius="4px"
                  width="100%"
                  height="100%"
                />
                {msg &&
                  msg.image &&
                  msg.image.imagesList &&
                  msg.image.imagesList.length > 3 && (
                    <div
                      hidden={index !== 2}
                      className="img-count"
                      onClick={() => setIsModalVisible(true)}
                    >
                      +{msg.image.imagesList.length - 2}
                    </div>
                  )}
                {isModalVisible && (
                  <ImageWrapper>
                    <ImageLightBox
                      onClose={() => setIsModalVisible(false)}
                      imgArray={msg && msg.image && msg.image.imagesList}
                    />
                  </ImageWrapper>
                )}
              </div>
            );
          })}
      </StyledImage>
    </div>
  );
};

export default ImageContent;
