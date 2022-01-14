import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import ImageLightBox from '../../../../../elements/ImageLightBox';

import {
  Caption,
  Collection,
  Container,
  Count,
  ImageWrapper,
  ImgContainer,
  Overlay,
} from './style';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../../views/Message/DetailView/Typing/helper';
import Loader from '../../../../../elements/Loader';
import OutlinedSpinner from '../../../../../elements/Spinner';

function Index({
  caption,
  img,
  messageObj,
  toggleForwardMessageModal,
  forwardMessage,
  selectedMsg,
  setSelectedMsg,
  selectedParticipants,
  from,
  setFrom,
  imgToDownloadURL,
  setImgToDownloadURL,
  deleteAttachment,
  setRtcMessageIdToDelete,
  rtcMessageIdToDelete,
  setAttachmentIdToDelete,
  attchmentIdToDelete,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  whereIsTheDeleteFrom,
  isReplyContent,
  setIsImgLoading,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAttachmentToDelete, setSelectedAttachmentToDelete] = useState(
    false,
  );

  const imageLength = img && img.length;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function renderImage(images) {
    if (images && images.length <= 4) {
      return images.map(imgData => {
        return (
          <ImgContainer key={imgData.id} onClick={() => showModal()}>
            {imgData.uploadStatus === 'UPLOADING' && (
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <OutlinedSpinner
                  width="25px"
                  spinnerStyle={{
                    zIndex: 1,
                    width: '25px',
                  }}
                />
              </div>
            )}
            <img
              src={imgData.url}
              onLoad={() => setIsImgLoading(true)}
              onError={() => setIsImgLoading(false)}
              alt="img"
            />
          </ImgContainer>
        );
      });
    } else if (images && images.length > 4) {
      return (
        <>
          {images &&
            images.slice(0, 3).map(imgData => (
              <ImgContainer key={imgData.id} onClick={() => showModal()}>
                {imgData.uploadStatus === 'UPLOADING' && (
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <OutlinedSpinner
                      width="25px"
                      spinnerStyle={{
                        zIndex: 1,
                        width: '25px',
                      }}
                    />
                  </div>
                )}
                <img
                  src={imgData.url}
                  alt="img"
                  onLoad={() => setIsImgLoading(true)}
                  onError={() => setIsImgLoading(false)}
                />
              </ImgContainer>
            ))}

          <ImgContainer
            isReplyContent={isReplyContent}
            onClick={() => showModal()}
          >
            <Image
              src={img[3].url}
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />

            <Overlay>
              <Count>+{imageLength - 4}</Count>
            </Overlay>
          </ImgContainer>
        </>
      );
    }
  }

  return (
    <>
      <Container>
        {caption && (
          <Caption>
            {funcToMapMentionIdToName(
              formattedData(messageObj),
              caption,
              messageObj.hasMentions,
              messageObj.clientId,
              !messageObj.isIncoming,
            )}
          </Caption>
        )}
        <Collection>{renderImage(img)}</Collection>
      </Container>

      {isModalVisible && (
        <ImageWrapper>
          <ImageLightBox
            senderAccountObj={messageObj.senderAccountObj}
            onClose={handleCancel}
            imgArray={img}
            toggleForwardMessageModal={toggleForwardMessageModal}
            forwardMessage={forwardMessage}
            selectedMsg={selectedMsg}
            setSelectedMsg={setSelectedMsg}
            selectedParticipants={selectedParticipants}
            from={from}
            setFrom={setFrom}
            imgToDownloadURL={imgToDownloadURL}
            setImgToDownloadURL={setImgToDownloadURL}
            selectedAttachmentToDelete={selectedAttachmentToDelete}
            setSelectedAttachmentToDelete={setSelectedAttachmentToDelete}
            messageObj={messageObj}
            deleteAttachment={deleteAttachment}
            setRtcMessageIdToDelete={setRtcMessageIdToDelete}
            rtcMessageIdToDelete={rtcMessageIdToDelete}
            setAttachmentIdToDelete={setAttachmentIdToDelete}
            attchmentIdToDelete={attchmentIdToDelete}
            openDeleteAttachmentModal={openDeleteAttachmentModal}
            setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
            whereIsTheDeleteFrom={whereIsTheDeleteFrom}
          />
        </ImageWrapper>
      )}
    </>
  );
}

Index.propTypes = {
  caption: PropTypes.string,
  img: PropTypes.array,
};

export default Index;
