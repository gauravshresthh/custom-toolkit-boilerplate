import React, { useState } from 'react';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../views/Message/DetailView/Typing/helper';

import ImageLightBox from '../../../../elements/ImageLightBox';

import { ImageContainer, Overlay, Count, ImageWrapper } from './style';

function Image({ messageObj, imgArray, onClick }) {
  //   const [imgArray, setImgArray] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (imgArray.imagesList.length > 3) {
    return (
      <>
        <p>
          {funcToMapMentionIdToName(
            formattedData(messageObj),
            imgArray.title,
            messageObj.hasMentions,
          )}
        </p>

        <ImageContainer onClick={() => showModal()}>
          {imgArray.imagesList.slice(0, 2).map(single => (
            <img src={single.url} />
          ))}

          <div className="overlayContainer">
            <img src={imgArray.imagesList[2].url} alt="" />

            <Overlay>
              <Count>+{imgArray.imagesList.length - 3}</Count>
            </Overlay>
          </div>
        </ImageContainer>

        {isModalVisible && (
          <ImageWrapper>
            <ImageLightBox
              // senderAccountObj={messageObj.senderAccountObj}
              showHeader={'dontShow'}
              onClose={handleCancel}
              imgArray={imgArray.imagesList}
            />
          </ImageWrapper>
        )}
      </>
    );
  }

  return (
    <>
      <p>
        {funcToMapMentionIdToName(
          formattedData(messageObj),
          imgArray.title,
          messageObj.hasMentions,
        )}
      </p>

      <ImageContainer onClick={() => setIsModalVisible(true)}>
        {imgArray.imagesList.map(single => (
          <img src={single.url} />
        ))}
      </ImageContainer>

      {isModalVisible && (
        <ImageWrapper>
          <ImageLightBox
            showHeader={'dontShow'}
            // senderAccountObj={messageObj.senderAccountObj}
            onClose={handleCancel}
            imgArray={imgArray.imagesList}
          />
        </ImageWrapper>
      )}
    </>
  );
}
export default Image;
