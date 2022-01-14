import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  CompositeDecorator,
  convertToRaw,
  EditorState,
  getDefaultKeyBinding,
  Modifier,
  RichUtils,
  SelectionState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Editor from '@draft-js-plugins/editor';
import { defaultSuggestionsFilter } from '@draft-js-plugins/mention';

import EntryComponent from './Mention/EntryComponent';
import useDraftComponents from './Mention/useDraftComponents';

import CustomToolbarButtons from '../CustomToolbarButtons';
import RightSideCustomToolbars from '../RightSideCustomToolbars';
import ImageWrapper from '../Attachment/ImageWrapper';

import ScheduleModal from '../../RightBarView/ScheduleModal';

import DocWrapper from '../Attachment/DocWrapper';
import {
  EditorContainer,
  EmojiSelectWrapper,
  FileWrapper,
  ToolbarInnerContainer,
} from './style';

import {
  disableSendButton,
  handleReturn,
  onAudioUpload,
  onVideoUpload,
} from '../helper';
import { parseScheduledMsg } from '../../../../../../containers/Messages/Details/helper';

import createMentionEntity from './createMentionEntity';
import { inlineStyleButtons, renderInlineStyleButton } from './Toolbar/helper';

import AudioRecord from './AudioVideoRecording/AudioRecord';
import AudioWrapper from '../Attachment/AudioWrapper';
import VideoWrapper from '../Attachment/VideoWrapper';
import PopupModal from '../../../../../elements/PopupModal';
import VideoRecord from './AudioVideoRecording/VideoRecord';
import { CreateUUIDWithoutDash } from '../../../../../../utils/helper';

export default function CustomMentionEditor({
  forwhom = 'chat',
  onMessageSubmitted,
  selectedImageList,
  onImageSelection,
  editorForReply,
  imageId,
  attachmentId,
  disableFileUploadBtn,
  parentMsgId,
  disableSendBtn,
  refId,
  selectedMentions,
  setSelectedMentions,
  inboxDetail,
  openScheduleMsgModal,
  toggleScheduleMsgModal,
  selectedFileList,
  onFileSelection,
  resendFile,
  removeSelectedFile,
  onDocSelection,
  selectedScheduledMsg,
  setSelectedScheduledMsg,
  onEditScheduleMsgState,
  setOnEditScheduleMsgState,
  updateScheduledMsg,
  isEditingScheduledMsg,
  setIsEditingScheduledMsg,
  isFromSchedule,
  editorPlaceholder,
  openRecordModal,
  openScreenRecordModal,
  closeScreenRecordModal,
  clientIdForAttachment,
  setClientIdForAttachment,
  isEditingMsg,
}) {
  const [audioRecord, setAudioRecord] = useState(false);
  const [videoRecordPreview, setVideoRecordPreview] = useState(false);
  const [videoRecordPreviewUrl, setVideoRecordPreviewUrl] = useState('');
  const [videoRecord, setVideoRecord] = useState(false);
  const [mediaDevices, setMediaDevices] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [selectedMicrophone, setSelectedMicrophone] = useState(null);

  const participant =
    inboxDetail &&
    inboxDetail.participantsList &&
    inboxDetail.participantsList.map(data => {
      return {
        id: data.account.accountId,
        userId: data.account.accountId,
        name: data.account.fullName,
        profilePic: data.account.profilePic,
      };
    });
  const {
    MentionSuggestions,
    plugins,
    Toolbar,
    editorState,
    setEditorState,
    EmojiSuggestions,
    EmojiSelect,
    ContentState,
  } = useDraftComponents();

  const ref = useRef(null);
  const [openMention, setOpenMention] = useState(false);
  const [clearTextEditor, setClearTextEditor] = useState(false);
  const [suggestions, setSuggestions] = useState(participant);
  const [scheduleDateSuggestion, setScheduleDateSuggestion] = useState(
    undefined,
  );
  const [selectedStyleButton, setSelectedStyleButton] = useState([]);

  function getMessageFromMessageObj(message) {
    switch (message.messageType) {
      case 'TEXT':
        return message.text.message;
      case 'LINK':
        return message.link.message;
      case 'IMAGE':
        return message.image.caption;
      case 'FILE':
        return message.attachment.caption;
      case 'AUDIO':
        return message.audio.caption;
      case 'VIDEO':
        return message.video.caption;
      default:
        return '';
    }
  }

  const getDecoratorFormPlugins = plugins => {
    const _decorators = plugins.reduce(
      (decoratorArray, { decorators = [] }) => [
        ...decoratorArray,
        ...decorators,
      ],
      [],
    );

    return new CompositeDecorator(_decorators);
  };

  const gotDevices = deviceInfos => {
    const devices = {
      audio: deviceInfos.filter(device => device.kind === 'audioinput'),
      video: deviceInfos.filter(device => device.kind === 'videoinput'),
    };
    setMediaDevices(devices);
  };

  const handleError = error => {
    console.log('Error while getting device info');
  };

  useEffect(() => {
    setSelectedStyleButton([]);
  }, [refId]);
  useEffect(() => {
    navigator &&
      navigator.mediaDevices &&
      navigator.mediaDevices
        .enumerateDevices()
        .then(gotDevices)
        .catch(handleError);
  }, []);

  useEffect(() => {
    setSuggestions(participant);

    if (isFromSchedule) {
      const decorators = getDecoratorFormPlugins(plugins);
      // setIsFromSchedule(false);

      setEditorState(
        EditorState.createWithContent(
          createMentionEntity(
            getMessageFromMessageObj(selectedScheduledMsg),
            selectedScheduledMsg.mentionList,
          ),
          decorators,
        ),
      );
      setIsEditingScheduledMsg(true);
    } else {
      const decorators = getDecoratorFormPlugins(plugins);

      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(''),
          decorators,
        ),
      );
    }
  }, [refId, inboxDetail, clearTextEditor]);
  useEffect(() => {
    if (clearTextEditor) {
      const decorators = getDecoratorFormPlugins(plugins);

      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(''),
          decorators,
        ),
      );
      setClearTextEditor(false);
    }
  }, [clearTextEditor]);

  function getMarkUp() {
    const contentState = editorState.getCurrentContent();
    const customEntityTransform = (entity, text) => {
      if (entity.type !== 'mention') return;
      if (entity.data.mention.userId) {
        return `@${entity.data.mention.userId}`;
      }
    };

    const markup = draftToHtml(
      convertToRaw(contentState),
      {},
      false,
      customEntityTransform,
    );

    return markup;
  }

  useEffect(() => {
    if (selectedScheduledMsg && onEditScheduleMsgState) {
      if (!isFromSchedule) {
        setEditorState(
          EditorState.createWithContent(
            createMentionEntity(
              getMessageFromMessageObj(selectedScheduledMsg),
              selectedScheduledMsg.mentionList,
            ),
          ),
        );

        // get the raw blocks and entity from api
        // render in the text editor
        // extract enteties from the raw blocks
        // add to setSuggestion

        setOnEditScheduleMsgState(false);
        setIsEditingScheduledMsg(true);
      }
      const array =
        selectedScheduledMsg &&
        selectedScheduledMsg.mentionList &&
        selectedScheduledMsg.mentionList.map(data => {
          return {
            id: data.userid,
            userId: data.userid,
            name: data.fullname,
            profilePic: data.profilepicture,
          };
        });
      setSelectedMentions(array);
    }
  }, [onEditScheduleMsgState]);

  function myKeyBindingFn(e) {
    if (e.keyCode === 13 && !e.nativeEvent.shiftKey) {
      return 'submit-comment';
    }

    return getDefaultKeyBinding(e);
  }

  function handleKeyCommand(command, scheduledDate) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }
    if (command === 'submit-comment') {
      setClientIdForAttachment({
        image: CreateUUIDWithoutDash(),
        file: CreateUUIDWithoutDash(),
        audio: CreateUUIDWithoutDash(),
        video: CreateUUIDWithoutDash(),
      });
      const contentState = editorState.getCurrentContent();
      const customEntityTransform = (entity, text) => {
        if (entity.type !== 'mention') return;
        if (entity.data.mention.userId) {
          return `@${entity.data.mention.userId}`;
        }
      };

      const markup = draftToHtml(
        convertToRaw(contentState),
        {},
        false,
        customEntityTransform,
      );
      // if we press shift + enter multiple time then we will be sending empty data to chat so to prevent that
      if (
        convertToRaw(editorState.getCurrentContent()).blocks.filter(
          block => block.text !== '',
        ).length > 0 ||
        disableSendButton(editorState, selectedFileList, disableSendBtn)
      ) {
        if (isEditingScheduledMsg) {
          parseScheduledMsg(getMarkUp(), selectedFileList) &&
            updateScheduledMsg(
              parseScheduledMsg(getMarkUp(), selectedFileList).message,
              parseScheduledMsg(getMarkUp(), selectedFileList).type,
              refId,
              selectedScheduledMsg.clientId,
              selectedScheduledMsg.parentMsgId,
              selectedScheduledMsg.rtcMessageId,
              selectedMentions,
              selectedScheduledMsg.scheduledAt,
              isEditingMsg,
            );
        } else {
          onMessageSubmitted(markup, scheduledDate);
        }
        setSelectedMentions([]);
        setSelectedStyleButton([]);
        handleReturn(
          editorState,
          setEditorState,
          SelectionState,
          EditorState,
          Modifier,
        );
        return 'handled';
      }
    }

    return 'not-handled';
  }

  function handleData() {
    const contentState = editorState.getCurrentContent();
    const customEntityTransform = (entity, text) => {
      if (entity.type !== 'mention') return;
      if (entity.data.mention.userId) {
        return `@${entity.data.mention.userId}`;
      }
    };
    // entity cha bhane convert it to userId
    const markup = draftToHtml(
      convertToRaw(contentState),
      {},
      false,
      customEntityTransform,
    );

    return markup;
  }

  const onChange = useCallback(_editorState => {
    setEditorState(_editorState);
  }, []);

  const onOpenChange = useCallback(_open => {
    setOpenMention(_open);
  }, []);
  const onSearchChange = ({ value }) => {
    // remove useCallback if filtering mention fks up
    setSuggestions(defaultSuggestionsFilter(value, participant));
  };

  function toggleInlineStyle(event) {
    event.preventDefault();
    let style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  return (
    <>
      <EditorContainer
        onClick={() => {
          ref.current.focus();
        }}
      >
        <Editor
          editorKey="editor"
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={ref}
          placeholder={editorPlaceholder || 'Type a message...'}
          handleKeyCommand={e => handleKeyCommand(e)}
          keyBindingFn={!openMention ? myKeyBindingFn : undefined}
        />

        <EmojiSuggestions />

        {suggestions && (
          <MentionSuggestions
            open={openMention}
            onOpenChange={onOpenChange}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            onAddMention={e => {
              setSelectedMentions([...selectedMentions, e]);
            }}
            entryComponent={EntryComponent}
          />
        )}
        <FileWrapper>
          {selectedFileList &&
            selectedFileList.map(single =>
              single.type === 'image' ? (
                <ImageWrapper
                  image={single}
                  removeSelectedImage={removeSelectedFile}
                  resendFile={resendFile}
                  refId={refId}
                  parentMsgId={parentMsgId}
                  selectedMentions={selectedMentions}
                  clientIdForAttachment={clientIdForAttachment}
                />
              ) : single.type === 'doc' ? (
                <DocWrapper
                  doc={single}
                  removeSelectedDoc={removeSelectedFile}
                  resendFile={resendFile}
                  refId={refId}
                  parentMsgId={parentMsgId}
                  selectedMentions={selectedMentions}
                  clientIdForAttachment={clientIdForAttachment}
                />
              ) : single.type === 'audio' ? (
                <AudioWrapper
                  audio={single}
                  removeSelectedFile={removeSelectedFile}
                  resendFile={resendFile}
                  refId={refId}
                  parentMsgId={parentMsgId}
                  selectedMentions={selectedMentions}
                  clientIdForAttachment={clientIdForAttachment}
                />
              ) : single.type === 'video' ? (
                <VideoWrapper
                  video={single}
                  removeSelectedFile={removeSelectedFile}
                  resendFile={resendFile}
                  refId={refId}
                  parentMsgId={parentMsgId}
                  setVideoRecordPreview={setVideoRecordPreview}
                  setVideoRecordPreviewUrl={setVideoRecordPreviewUrl}
                  selectedMentions={selectedMentions}
                  clientIdForAttachment={clientIdForAttachment}
                />
              ) : null,
            )}
        </FileWrapper>

        <div>
          <Toolbar>
            {externalProps => (
              <ToolbarInnerContainer forwhom={forwhom}>
                <div style={{ display: 'flex' }}>
                  {forwhom === 'chat' ? (
                    <>
                      {inlineStyleButtons && inlineStyleButtons.map((button, idx) => {
                        return renderInlineStyleButton(
                          button.value,
                          button.style,
                          toggleInlineStyle,
                          idx,
                          forwhom,
                          setSelectedStyleButton,
                          selectedStyleButton,
                          button,
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {inlineStyleButtons && inlineStyleButtons.map((button, idx) => {
                        return (
                          ['B', 'I', 'U', 'S'].includes(button.id) &&
                          renderInlineStyleButton(
                            button.value,
                            button.style,
                            toggleInlineStyle,
                            idx,
                            forwhom,
                            setSelectedStyleButton,
                            selectedStyleButton,
                            button,
                          )
                        );
                      })}
                    </>
                  )}

                  <CustomToolbarButtons
                    forwhom={forwhom}
                    refId={refId}
                    editorForReply={editorForReply}
                    imageId={imageId}
                    attachmentId={attachmentId}
                    isEditingScheduledMsg={isEditingScheduledMsg}
                    onFileSelection={onFileSelection}
                    onImageSelection={onImageSelection}
                    onDocSelection={onDocSelection}
                    disableFileUploadBtn={disableFileUploadBtn}
                    parentMsgId={parentMsgId}
                    selectedMentions={selectedMentions}
                    emojiChildren={
                      <EmojiSelectWrapper forwhom={forwhom}>
                        <EmojiSelect />
                      </EmojiSelectWrapper>
                    }
                    enterMention={() => {}}
                    openRecordModal={openRecordModal}
                    openScreenRecordModal={openScreenRecordModal}
                    closeScreenRecordModal={closeScreenRecordModal}
                    clientIdForAttachment={clientIdForAttachment}
                  />
                </div>
                <>
                  {audioRecord && !isEditingScheduledMsg && (
                    <AudioRecord
                      refId={refId}
                      parentMsgId={parentMsgId}
                      selectedMentions={selectedMentions}
                      setAudioRecord={setAudioRecord}
                      onFileSelection={onFileSelection}
                      onAudioUpload={onAudioUpload}
                    />
                  )}

                  <RightSideCustomToolbars
                    setOpenDatePicker={toggleScheduleMsgModal}
                    editorForReply={editorForReply}
                    setSelectedScheduledMsg={setSelectedScheduledMsg}
                    content={handleData()}
                    onMessageSubmitted={scheduledDate => {
                      console.log('scheduledDate', scheduledDate);
                      setClearTextEditor(true);
                      if (typeof scheduledDate == 'number') {
                        handleKeyCommand('submit-comment', scheduledDate);
                      } else {
                        handleKeyCommand('submit-comment', '');
                      }
                      setEditorState(
                        EditorState.push(
                          editorState,
                          ContentState.createFromText(''),
                          'remove-range',
                        ),
                      );
                    }}
                    disableSendBtn={disableSendButton(
                      editorState,
                      selectedFileList,
                      disableSendBtn,
                    )}
                    updateScheduledMsg={() => {
                      console.log({ selectedScheduledMsg });
                      parseScheduledMsg(getMarkUp(), selectedFileList) &&
                        updateScheduledMsg(
                          parseScheduledMsg(getMarkUp(), selectedFileList)
                            .message,
                          parseScheduledMsg(getMarkUp(), selectedFileList).type,
                          refId,
                          selectedScheduledMsg.clientId,
                          selectedScheduledMsg.parentMsgId,
                          selectedScheduledMsg.rtcMessageId,
                          selectedMentions,
                          selectedScheduledMsg.scheduledAt,
                          isEditingMsg,
                        );
                      setClearTextEditor(true);
                    }}
                    isEditingScheduledMsg={isEditingScheduledMsg}
                    setIsEditingScheduledMsg={setIsEditingScheduledMsg}
                    audioRecord={audioRecord}
                    setAudioRecord={setAudioRecord}
                    videoRecord={videoRecord}
                    setVideoRecord={setVideoRecord}
                    forwhom={forwhom}
                  />
                </>
              </ToolbarInnerContainer>
            )}
          </Toolbar>
        </div>
        <PopupModal
          modalVisible={videoRecordPreview}
          onVisibleChange={visibility => setVideoRecordPreview(visibility)}
          onCancel={() => {
            setVideoRecordPreview(false), setVideoRecordPreviewUrl('');
          }}
          modalTitle="Preview"
          width="600px"
          children={
            <div className="video-record-preview-wrapper">
              <video key={videoRecordPreviewUrl} width="100%" controls>
                <source src={videoRecordPreviewUrl} />
              </video>
            </div>
          }
        />
      </EditorContainer>

      <ScheduleModal
        content={handleData()}
        updateRtcMsg={updateScheduledMsg}
        onMessageSubmitted={onMessageSubmitted}
        scheduledImg={selectedImageList}
        selectedMentions={selectedMentions}
        inboxId={refId}
        scheduledMsg={selectedScheduledMsg}
        modalVisible={openScheduleMsgModal}
        onCancel={() => {
          toggleScheduleMsgModal(false);
        }}
        setClearTextEditor={setClearTextEditor}
      />
      <VideoRecord
        visible={videoRecord}
        closeModal={() => setVideoRecord(false)}
        mediaDevices={mediaDevices}
        setMediaDevices={setMediaDevices}
        selectedCamera={selectedCamera}
        selectedMicrophone={selectedMicrophone}
        setSelectedCamera={setSelectedCamera}
        setSelectedMicrophone={setSelectedMicrophone}
        refId={refId}
        parentMsgId={parentMsgId}
        selectedMentions={selectedMentions}
        onVideoSelection={onFileSelection}
        onVideoUpload={onVideoUpload}
      />
    </>
  );
}
