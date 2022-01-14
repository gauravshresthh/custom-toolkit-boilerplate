import React, { useState } from 'react';

import Header from './Header/Header';
import EmblaCarousel from './Carasouel';

import { Container, Main } from './style';

function Index({
  showHeader,
  senderAccountObj,
  onClose,
  imgArray,
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
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  setSelectedAttachmentToDelete,
  messageObj,
  setRtcMessageIdToDelete,
  rtcMessageIdToDelete,
  setAttachmentIdToDelete,
  attchmentIdToDelete,
  whereIsTheDeleteFrom,
}) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  return (
    <Container>
      <Header
        senderAccountObj={senderAccountObj}
        onClose={onClose}
        toggleForwardMessageModal={toggleForwardMessageModal}
        forwardMessage={forwardMessage}
        selectedMsg={selectedMsg}
        selectedParticipants={selectedParticipants}
        from={from}
        setFrom={setFrom}
        imgToDownloadURL={imgToDownloadURL}
        deleteAttachment={deleteAttachment}
        openDeleteAttachmentModal={openDeleteAttachmentModal}
        setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
        rtcMessageIdToDelete={rtcMessageIdToDelete}
        attchmentIdToDelete={attchmentIdToDelete}
        whereIsTheDeleteFrom={whereIsTheDeleteFrom}
        imgArray={imgArray}
        selectedImgIndex={selectedImgIndex}
        showHeader={showHeader}
      />

      <Main>
        <EmblaCarousel
          // imgArray={[messageObj.rtcMessageId, imgArray]}
          imgArray={imgArray}
          setSelectedMsg={setSelectedMsg}
          imgToDownloadURL={imgToDownloadURL}
          setImgToDownloadURL={setImgToDownloadURL}
          setSelectedAttachmentToDelete={setSelectedAttachmentToDelete}
          messageObj={messageObj}
          deleteAttachment={deleteAttachment}
          setRtcMessageIdToDelete={setRtcMessageIdToDelete}
          setAttachmentIdToDelete={setAttachmentIdToDelete}
          // chat , overall , rightside so esma different object haru set garne based on where it came from
          whereIsTheDeleteFrom={whereIsTheDeleteFrom}
          setSelectedImgIndex={setSelectedImgIndex}
        />
      </Main>
    </Container>
  );
}

export default Index;
