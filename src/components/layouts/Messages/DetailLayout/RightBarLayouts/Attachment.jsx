import React from 'react';
import Styled from 'styled-components';
import Media from '../../../../views/Message/DetailView/RightBarView/Attachment/Media';
import File from '../../../../views/Message/DetailView/RightBarView/Attachment/File';
import Link from '../../../../views/Message/DetailView/RightBarView/Attachment/Link';

const StyledAttachment = Styled.div`
 padding:10px 0;
`;

const Attachment = ({
  tabType,
  employeeList,
  toggleForwardMessageModal,
  inboxDetail,
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
}) => {
  return (
    <StyledAttachment>
      {tabType === 'MEDIA' && (
        <Media
          mediaList={
            inboxDetail && inboxDetail.mediaList && inboxDetail.mediaList.media
          }
          employeeList={employeeList}
          toggleForwardMessageModal={toggleForwardMessageModal}
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
          inboxDetail={inboxDetail}
        />
      )}
      {tabType === 'FILES' && (
        <File
          fileList={
            inboxDetail && inboxDetail.mediaList && inboxDetail.mediaList.files
          }
        />
      )}
      {tabType === 'LINKS' && (
        <Link
          linkList={
            inboxDetail && inboxDetail.mediaList && inboxDetail.mediaList.links
          }
        />
      )}
    </StyledAttachment>
  );
};

export default Attachment;
