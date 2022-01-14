import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Image from '../../../../../elements/Image/Image';

import ImageLightBox from '../../../../../elements/ImageLightBox';
import { DayDateFormatting } from '../../../../../../utils/dateHelper';
import { removeDuplicates } from '../../../../../../utils/helper';

const StyledMedia = Styled.div`
.title {
padding-top:10px;
border-bottom:1px solid #f0f0f0;
 .date {
 padding: 0 15px;
 color:#666;
 }
}
.content {
padding: 15px;
display:flex;
gap:10px;
flex-wrap:wrap;
}

.img-wrapper{
  cursor:pointer;
}

`;

const ImageWrapper = Styled.span`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Media = ({
  mediaList,
  toggleForwardMessageModal,
  from,
  setFrom,
  selectedMsg,
  setSelectedMsg,
  deleteAttachment,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  rtcMessageIdToDelete,
  setRtcMessageIdToDelete,
  attchmentIdToDelete,
  setAttachmentIdToDelete,
  inboxDetail,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgList, setImgList] = useState(undefined);
  const [imgToDownloadURL, setImgToDownloadURL] = useState(undefined);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    let imgArr = [];
    mediaList &&
      mediaList.map(single => {
        single.image.imagesList.map(image =>
          imgArr.push({
            attachmentid: image.attachmentid,
            thumbnailurl: image.thumbnailurl,
            url: image.url,
            rtcMessageId: single.rtcMessageId,
            senderAccountObj: single.senderAccountObj,
          }),
        );
      }),
      setImgList(imgArr);
  }, [mediaList]);

  const group =
    mediaList !== undefined &&
    mediaList.reduce((r, a) => {
      r[DayDateFormatting(a.sentAtTimestamp / 1000)] = [
        ...(r[DayDateFormatting(a.sentAtTimestamp / 1000)] || []),
        a,
      ];
      return r;
    }, {});

  const keys = Object.keys(group).sort((a, b) => new Date(b) - new Date(a));
  return (
    <StyledMedia>
      {isModalVisible && (
        <ImageWrapper>
          <ImageLightBox
            imgArray={imgList}
            onClose={handleCancel}
            toggleForwardMessageModal={toggleForwardMessageModal}
            imgToDownloadURL={imgToDownloadURL}
            setImgToDownloadURL={setImgToDownloadURL}
            from={from}
            setFrom={setFrom}
            selectedMsg={selectedMsg}
            setSelectedMsg={setSelectedMsg}
            deleteAttachment={deleteAttachment}
            openDeleteAttachmentModal={openDeleteAttachmentModal}
            setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
            rtcMessageIdToDelete={rtcMessageIdToDelete}
            setRtcMessageIdToDelete={setRtcMessageIdToDelete}
            attchmentIdToDelete={attchmentIdToDelete}
            setAttachmentIdToDelete={setAttachmentIdToDelete}
            whereIsTheDeleteFrom={'rightside'}
          />
        </ImageWrapper>
      )}

      {keys &&
        keys.map((singleLastMessage, idx) => {
          const singleData =
            group[singleLastMessage] &&
            group[singleLastMessage].sort(function(a, b) {
              const dateA = a.sentAtTimestamp;
              const dateB = b.sentAtTimestamp;
              return dateA - dateB;
            });

          return (
            <>
              <div className="title">
                <div className="date">{singleLastMessage}</div>
              </div>
              <div className="content">
                {singleData &&
                  singleData.map(single => (
                    <React.Fragment key={single.rtcMessageId}>
                      {single.image &&
                        single.image.imagesList &&
                        single.image.imagesList.map((singleImg, idx) => (
                          <div
                            key={idx}
                            aria-hidden="true"
                            className="img-wrapper"
                            onClick={() => {
                              setIsModalVisible(true);
                            }}
                          >
                            <Image
                              width="60px"
                              height="42px"
                              src={singleImg.url}
                              borderRadius="4px"
                            />
                          </div>
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            </>
          );
        })}
    </StyledMedia>
  );
};

export default Media;
