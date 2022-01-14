import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextEditorIcon from '../../../../../assets/images/TextEditorIcon';
import { StyledCustomToolbar, TypeStyle } from './Style';
import Popover from '../../../../elements/PopoverModal/index';
import { ACTION_TYPE_MESSAGE_DETAIL } from '../../../../../containers/Messages/Details/constants';
import { CreateUUIDWithoutDash } from '../../../../../utils/helper';

const CustomToolbarButtons = ({
                                forwhom,
                                isEditingScheduledMsg,
                                imageId,
                                attachmentId,
                                editorForReply,
                                disableFileUploadBtn,
                                parentMsgId,
                                refId,
                                selectedMentions,
                                onFileSelection,
                                openRecordModal,
                                openScreenRecordModal,
                                closeScreenRecordModal,
                                emojiChildren,
                                enterMention,
                                clientIdForAttachment
                              }) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <StyledCustomToolbar forwhom={forwhom}>
      <div className='wrapper'>
        <div
          className='custom-toolbar-wrapper'
          style={{ cursor: disableFileUploadBtn ? 'not-allowed' : 'pointer' }}
        >
          <TextEditorIcon.Mentions />
        </div>

        {emojiChildren}

        {!isEditingScheduledMsg && <>
          <input
            // accept='application/*'
            multiple
            value=''
            type='file'
            name={attachmentId}
            id={attachmentId}
            style={{ display: 'none' }}
            onChange={e => {
              e.preventDefault();
              let fileList = [];
              for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files[i];
                fileList.push({ id: CreateUUIDWithoutDash(), file });
              }
              onFileSelection(
                fileList,
                refId,
                parentMsgId,
                selectedMentions, '',
                clientIdForAttachment,
              );
            }}
          />
          <label htmlFor={disableFileUploadBtn ? '' : attachmentId}>
            <div
              className='custom-toolbar-wrapper'
              style={{ cursor: disableFileUploadBtn ? 'not-allowed' : 'pointer' }}
            >
              <TextEditorIcon.Attachment />
            </div>
          </label>

          <input
            multiple={!editorForReply}
            accept='image/*'
            value=''
            type='file'
            name={imageId}
            id={imageId}
            style={{ display: 'none' }}
            onChange={e => {
              e.preventDefault();
              let imageList = [];
              for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files[i];
                imageList.push({ id: CreateUUIDWithoutDash(), file });
              }
              onFileSelection(
                imageList,
                refId,
                parentMsgId,
                selectedMentions, '',
                clientIdForAttachment,
              );
            }}
          />
          <label htmlFor={imageId}>
            <div className='custom-toolbar-wrapper'>
              <TextEditorIcon.GalleryIcon />
            </div>
          </label>
        </>}

      </div>

      {!editorForReply && !isEditingScheduledMsg && (
        <Popover
          trigger='click'
          visible={openPopup}
          onVisibleChange={visibility => setOpenPopup(visibility)}
          children={
            <div
              className='custom-toolbar-wrapper'
              onClick={() => setOpenPopup(true)}
            >
              <TextEditorIcon.ScreenShareIcon />
            </div>
          }
          popoverContent={
            <TypeStyle>
              <div className='typing-popover'>
                <div
                  className='options'
                  role='presentation'
                  id='share'
                  onClick={e => {
                    openRecordModal(
                      ACTION_TYPE_MESSAGE_DETAIL.SHARE_EXISTING_SCREEN_RECORD,
                    );
                    setOpenPopup(false);
                  }}
                >
                  Share existing recordings
                </div>
                <div
                  className='options'
                  role='presentation'
                  id='start'
                  onClick={() => {
                    openRecordModal(
                      ACTION_TYPE_MESSAGE_DETAIL.START_NEW_SCREEN_RECORD,
                    );
                    setOpenPopup(false);
                  }}
                >
                  Start new screen recording
                </div>
              </div>
            </TypeStyle>
          }
        />
      )}
    </StyledCustomToolbar>
  );
};

CustomToolbarButtons.propTypes = {
  imageId: PropTypes.string,
  attachmentId: PropTypes.string,
  onImageSelection: PropTypes.func,
  onDocSelection: PropTypes.func,
  editorForReply: PropTypes.any,
  parentMsgId: PropTypes.any,
};

export default CustomToolbarButtons;
