import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../../../../elements/Image/Image';
import DocIcons from '../../../../../../assets/images/messages/DocIcons';

import ImageLightBox from '../../../../../elements/ImageLightBox';

import { renderIconsBasedOnFileUrl } from '../../../../../../utils/helper';

const StyledAttachmentTab = styled.div`
  display: flex;
  margin-left: 15px;

  .attachment-wrapper {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin-right: 15px;
    margin-top: 4px;
    min-width: 70px;
    min-height: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .doc-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .doc-name {
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        color: #fff;
        background: #666666;
        height: 14px;
        overflow: hidden;
        font-size: 10px;
      }
    }
  }
`;

const ImageWrapper = styled.span`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

function renderChildrenBasedOnMessageType(messageType) {
  switch (messageType.messageType) {
    case 'LINK':
      return (
        <div className="doc-wrapper">
          <DocIcons.NoImageLinkFound />
        </div>
      );

    case 'FILE':
      return (
        <div className="doc-wrapper">
          {renderIconsBasedOnFileUrl(messageType.url)}
          <div className="doc-name">{messageType.title}</div>
        </div>
      );

    default:
      return <div>nothing</div>;
  }
}

const OverallAttachment = ({
  attachments,
  employeeList,
  toggleForwardMessageModal,
  inboxDetail,
  from,
  setFrom,
  selectedMsg,
  setSelectedMsg,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  setSelectedAttachmentToDelete,
  rtcMessageIdToDelete,
  setRtcMessageIdToDelete,
  attchmentIdToDelete,
  setAttachmentIdToDelete,
  whereIsTheDeleteFrom,
  deleteAttachment,
  hasAttachmentBeenDeleted,
  setHasAttachmentBeenDeleted,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgArray, setImgArray] = useState([]);
  const [imgToDownloadURL, setImgToDownloadURL] = useState(undefined);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    let newArray = [];

    attachments &&
      attachments.slice(0, 3).map(single => {
        if (single.messageType == 'IMAGE') {
          newArray.push({
            url: single.image,
            senderAccountObj: single.senderAccountObj,
          });
        }
      });

    setImgArray(newArray);
  }, [attachments]);

  useEffect(() => {
    if (hasAttachmentBeenDeleted == true) {
      let newFiltereArray = [];

      const newFiltereArray1 =
        attachments &&
        attachments.slice(0, 3).filter(single => {
          if (single.messageType == 'IMAGE') {
            return single.attachmentid !== attchmentIdToDelete;
          }
        });
      newFiltereArray1.map(data => {
        newFiltereArray.push({ url: data.image });
      });
      setImgArray(newFiltereArray);
      // set has attachment been deleted false
    }
  }, [hasAttachmentBeenDeleted]);

  return (
    <StyledAttachmentTab>
      {attachments &&
        attachments.slice(0, 3).map(single => (
          <div className="attachment-wrapper">
            {single.messageType !== 'IMAGE' ? (
              <a href={single.url} target="_blank">
                {renderChildrenBasedOnMessageType(single)}
              </a>
            ) : (
              <div
                // key={sin}
                aria-hidden="true"
                onClick={() => {
                  setIsModalVisible(true);
                }}
              >
                <>
                  <Image
                    src={single.image}
                    width="70px"
                    height="55px"
                    borderRadius="2px"
                  />
                </>
              </div>
            )}
          </div>
        ))}

      {isModalVisible && (
        <ImageWrapper>
          <ImageLightBox
            imgArray={imgArray}
            onClose={handleCancel}
            // toggleForwardMessageModal={toggleForwardMessageModal}
            imgToDownloadURL={imgToDownloadURL}
            setImgToDownloadURL={setImgToDownloadURL}
            employeeList={employeeList}
            toggleForwardMessageModal={toggleForwardMessageModal}
            inboxDetail={inboxDetail}
            from={from}
            setFrom={setFrom}
            selectedMsg={selectedMsg}
            setSelectedMsg={setSelectedMsg}
            openDeleteAttachmentModal={openDeleteAttachmentModal}
            setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
            rtcMessageIdToDelete={rtcMessageIdToDelete}
            setRtcMessageIdToDelete={setRtcMessageIdToDelete}
            attchmentIdToDelete={attchmentIdToDelete}
            setAttachmentIdToDelete={setAttachmentIdToDelete}
            whereIsTheDeleteFrom={whereIsTheDeleteFrom}
            messageObj={
              attachments &&
              attachments
                .slice(0, 3)
                .map(single => single.messageType == 'IMAGE')
            }
            deleteAttachment={deleteAttachment}
          />
        </ImageWrapper>
      )}
    </StyledAttachmentTab>
  );
};

export default OverallAttachment;
