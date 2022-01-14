import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { StyledTextEditor } from './Style';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { keyBindingFn, mapMention, mentionContent } from './helper';
import CustomToolbarButtons from './CustomToolbarButtons';
import RightSideCustomToolbars from './RightSideCustomToolbars';

const TextEditor = ({
                      onMessageSubmitted,
                      handleChangeInMentionArrayInInbox,
                      selectedImageList,
                      onImageSelection,
                      removeSelectedImage,
                      editorForReply,
                      imageId,
                      attachmentId,
                      onDocUpload,
                      disableFileUploadBtn,
                      parentMsgId,
                      disableSendBtn,
                      refId,
                      openRecordModal,
                    }) => {
  const [textMessage, setTextMessage] = useState('');
  const [tagArray, setTagArray] = useState([]);
  const mappedEmployeeList = [
    {
      text: mentionContent(
        'Sujata Dongol',
        'https://storage.googleapis.com/anydone_files_prod/9b97564b9d1f4c76a5e3f194a67e688f.jpg',
      ),
      value: 'Sujata Dongol',
      url: '1',
    },
    {
      text: mentionContent(
        'Suj Dongol',
        'https://storage.googleapis.com/anydone_files_prod/9b97564b9d1f4c76a5e3f194a67e688f.jpg',
      ),
      value: 'Suj Dongol',
      url: '4',
    },
    {
      text: mentionContent(
        'Hello Dongol',
        'https://storage.googleapis.com/anydone_files_prod/9b97564b9d1f4c76a5e3f194a67e688f.jpg',
      ),
      value: 'Hello Dongol',
      url: '2',
    },
    {
      text: mentionContent(
        'Bye Dongol',
        'https://storage.googleapis.com/anydone_files_prod/9b97564b9d1f4c76a5e3f194a67e688f.jpg',
      ),
      value: 'Bye Dongol',
      url: '3',
    },
  ];

  const el = document.createElement('div');
  el.innerHTML =
    textMessage && draftToHtml(convertToRaw(textMessage.getCurrentContent()));
  const message = el.innerHTML;

  useEffect(() => {
    if (tagArray && tagArray.length > 0) {
      mapMention(
        tagArray,
        mappedEmployeeList,
        handleChangeInMentionArrayInInbox,
        onMessageSubmitted,
        setTextMessage,
        setTagArray,
        message,
      );
    }
  }, [tagArray]);

  return (
    <StyledTextEditor
      imageSelected={selectedImageList && selectedImageList.length > 0}
    >
      <form className='form-section'>
        <Editor
          stripPastedStyles={true}
          toolbarCustomButtons={[
            <CustomToolbarButtons
              refId={refId}
              editorForReply={editorForReply}
              imageId={imageId}
              attachmentId={attachmentId}
              onImageSelection={onImageSelection}
              onDocUpload={onDocUpload}
              disableFileUploadBtn={disableFileUploadBtn}
              parentMsgId={parentMsgId}
              openRecordModal={openRecordModal}
            />,
          ]}
          onBlur={() => {
            setTextMessage(textMessage);
          }}
          handleReturn={e =>
            keyBindingFn(
              e,
              textMessage,
              setTextMessage,
              onMessageSubmitted,
              tagArray,
              setTagArray,
              el,
            )
          }
          placeholder='Type a message ...'
          editorState={textMessage}
          wrapperClassName='demo-wrapper'
          editorClassName='demo-editor'
          toolbarClassName='toolbar-class'
          onEditorStateChange={e => {
            setTextMessage(EditorState.forceSelection(e, e.getSelection()));
          }}
          mention={{
            separator: ' ',
            trigger: '@',
            suggestions: mappedEmployeeList,
          }}
          toolbar={{
            options: ['inline', 'list', 'emoji'],
            inline: {
              inDropdown: false,
              options: ['bold', 'italic', 'underline', 'strikethrough'],
            },
            list: { inDropdown: false, options: [] },
          }}
        />
        <RightSideCustomToolbars
          disableSendBtn={disableSendBtn}
          editorForReply={editorForReply}
          onMessageSubmitted={onMessageSubmitted}
          el={el}
          setTagArray={setTagArray}
          setTextMessage={setTextMessage}
          tagArray={tagArray}
          textMessage={textMessage}
        />
      </form>
    </StyledTextEditor>
  );
};

TextEditor.propTypes = {
  onImageSelection: PropTypes.func,
  onMessageSubmitted: PropTypes.func,
  selectedImageList: PropTypes.bool,
  editorForReply: PropTypes.bool,
  handleChangeInMentionArrayInInbox: PropTypes.func,
  removeSelectedImage: PropTypes.func,
  onDocUpload: PropTypes.func,
  imageId: PropTypes.string,
  attachmentId: PropTypes.string,
  refId: PropTypes.string,
  parentMsgId: PropTypes.any,
  disableSendBtn: PropTypes.any,
};

export default TextEditor;
