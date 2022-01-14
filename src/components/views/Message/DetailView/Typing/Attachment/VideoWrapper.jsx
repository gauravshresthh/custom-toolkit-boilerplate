import React from 'react';
import TextEditorIcon from '../../../../../../assets/images/TextEditorIcon';
import { StyledImageWrapper } from '../Style';
import OutlinedSpinner from '../../../../../elements/Spinner';
import AttachmentIcon from '../../../../../../assets/images/messages/AttachmentIcon';
import { MessageIcon } from '../../../../../../assets/images/messages/MessageIcon';
import Loader from '../../../../../elements/Loader';
import { FileModel } from '../../../../../../model/FileModel';

const VideoWrapper = ({
                        video,
                        removeSelectedFile,
                        refId,
                        resendFile,
                        parentMsgId,
                        setVideoRecordPreview,
                        setVideoRecordPreviewUrl,
                        selectedMentions,
                        clientIdForAttachment,
                        hideRemoveIcon
}) => {
  if (!video) {
    return null;
  }

  return (
    <StyledImageWrapper>
      <div style={{position:'relative',cursor:'pointer'}} onClick={() => {
        setVideoRecordPreview(true);
        setVideoRecordPreviewUrl(video && video.url);
      }}>
        {video.uploadStatus === 'UPLOADING' ? (
           <Loader width='28px' color='#376af5' wrapperHeight='100%'/>
          ) :
          video.uploadStatus === 'FAILED' ? (
            <div
              className='failed_icon'
              onClick={() => {
                resendFile(
                  [{ id: video.id, file: video.attachment }],
                  refId,
                  parentMsgId,
                  selectedMentions, '',
                  FileModel.GetAttachmentClientId(video.attachment, video.id, clientIdForAttachment)
                );
              }}>
              <MessageIcon.ResendIcon />
            </div>
          ) : <div className='play_icon'><AttachmentIcon.Play /></div>}
        <video src={video.url} width='50px' height='50px' />
        <div hidden={hideRemoveIcon}
          className='delete-img'
          onClick={(e) => {
            e.stopPropagation();
            removeSelectedFile(video.id, parentMsgId);
          }}
        >
          <TextEditorIcon.CloseIcon />
        </div>
      </div>
    </StyledImageWrapper>
  );
};


export default VideoWrapper;
