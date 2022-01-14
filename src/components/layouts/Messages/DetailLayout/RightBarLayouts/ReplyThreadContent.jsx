import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import OthersMessage from '../../../Chat/OthersMessage/OthersMesage';
import TextEditor from '../../../../views/Message/DetailView/Typing/TextEditor';
import TextEditorTest from '../../../../views/Message/DetailView/Typing/TextEditorTest';

import { parseMessageType } from '../../../../views/Message/DetailView/Typing/helper';
import { CreateUUIDWithoutDash } from '../../../../../utils/helper';

const StyledReplyThread = Styled.div`
.sent-status,.gybQyG{
  display:none;
}
.jvcxri{
      display:none;
    }
    padding: 15px;
  .reply-main-message{
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(241 241 241);
    padding-bottom: 10px;
    max-height: 320px;

    .message-content{
      max-width: 100%;
      .message{
      }
      .hRHITi{
        width: 100%;
      }
    }
    .FaiTj{
      max-width: 100%;

    }

  }
  .replied-messages{
    padding-top: 10px;
    height: ${props => props.height};
    overflow-x:hidden;
    overflow-y: auto;


  }
  .others-message{
    .message-content{
      padding: 8px 12px;
    }
    .chat-profile-image{
      width: 28px;
      height: 28px;
    }
    .message{
      font-size: 12px;
    }
    .time{
      font-size: 11px;
    }
    .user-status{
      display:none;
    }
  }
`;

const ReplyThreadContent = ({
  onFileSelection,
  selectedFileList,
  removeSelectedFile,
  handleChangeInMentionArrayInInbox,
  onMessageSubmitted,
  selectedMessage,
  repliesList,
  fetchReplyMessageList,
  onDocUpload,
  refId,
  parseLink,
  // my changes
  inboxDetail,
  selectedMentions,
  setSelectedMentions,
  isReplyContent,
  isSearching,
  resendFile,
  isPrivateReply,
}) => {
  const [repliesHeight, setRepliesHeight] = useState('');
  const [filteredReplies, setFilteredReplies] = useState(undefined);
  const [clientIdForAttachment, setClientIdForAttachment] = useState({
    image: CreateUUIDWithoutDash(),
    file: CreateUUIDWithoutDash(),
    audio: CreateUUIDWithoutDash(),
    video: CreateUUIDWithoutDash(),
  });

  useEffect(() => {
    const mainMsgHeight =
      document.querySelector('.reply-main-message') &&
      document.querySelector('.reply-main-message').clientHeight;
    const editorHeight =
      document.getElementById('editorTest') &&
      document.getElementById('editorTest').clientHeight;
    const height = mainMsgHeight + editorHeight + 63 + 52 + 70;
    const contentHeight = window.innerHeight - height + 'px';
    setRepliesHeight(contentHeight);

    selectedMessage &&
      fetchReplyMessageList(
        (selectedMessage && selectedMessage.rtcMessageId) ||
          (isSearching && isSearching),
      );
    isSearching && fetchReplyMessageList(isSearching);
  }, [selectedMessage, isSearching]);

  useEffect(() => {
    selectedMessage &&
      setFilteredReplies(
        repliesList &&
          repliesList.filter(
            singleReply =>
              singleReply.parentMessageId === selectedMessage.rtcMessageId,
          ),
      );
    isSearching &&
      selectedMessage &&
      setFilteredReplies(
        repliesList &&
          repliesList.filter(
            singleReply => singleReply.parentMessageId === isSearching,
          ),
      );
  }, [repliesList, selectedMessage, isSearching]);

  if (!selectedMessage) {
    return null;
  }

  return (
    <StyledReplyThread height={repliesHeight}>
      <div className="reply-main-message withScrollbar">
        <OthersMessage
          message={selectedMessage}
          isReplyContent={isReplyContent}
          isPrivate={false}
          showProfilePicture={true}
          resendFile={resendFile}
        />
      </div>

      {/* replied message */}
      <div className="replied-messages withScrollbar">
        {filteredReplies &&
          filteredReplies.map((reply, idx) => {
            return (
              <div key={idx} style={{ marginBottom: '5px' }}>
                <OthersMessage
                  message={reply}
                  isReplyContent={isReplyContent}
                  isPrivate={reply.isPrivate}
                  showProfilePicture={true}
                />
              </div>
            );
          })}
      </div>

      {inboxDetail && !inboxDetail.left && (
        <div id="editorTest" style={{ marginTop: '25px' }}>
          <TextEditorTest
            forwhom="reply"
            editorPlaceholder="Write a reply"
            refId={refId}
            attachmentId="reply-attachment-id"
            imageId="reply-image-id"
            parseLink={parseLink}
            onFileSelection={onFileSelection}
            removeSelectedFile={removeSelectedFile}
            selectedFileList={selectedFileList}
            resendFile={resendFile}
            handleChangeInMentionArrayInInbox={
              handleChangeInMentionArrayInInbox
            }
            onMessageSubmitted={(text, scheduledDate) =>
              parseMessageType(
                text,
                selectedFileList,
                clientIdForAttachment,
                onMessageSubmitted,
                refId,
                isSearching
                  ? selectedMessage.parentMessageId
                  : selectedMessage.rtcMessageId,
                selectedMentions,
                scheduledDate,
                isPrivateReply,
                selectedMessage.senderAccountObj,
              )
            }
            selectedMentions={selectedMentions}
            setSelectedMentions={setSelectedMentions}
            inboxDetail={inboxDetail}
            editorForReply={true}
            parentMsgId={
              isSearching
                ? selectedMessage.parentMessageId
                : selectedMessage.rtcMessageId
            }
            disableSendBtn={true}
            clientIdForAttachment={clientIdForAttachment}
            setClientIdForAttachment={setClientIdForAttachment}
          />
        </div>
      )}
      {/* text editor */}
    </StyledReplyThread>
  );
};

export default ReplyThreadContent;
