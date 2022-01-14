import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import React from 'react';
import Image from '../../../../elements/Image/Image';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import { CreateUUID, CreateUUIDWithoutDash, ExtractLinkFromText, replaceAll } from '../../../../../utils/helper';

export const parseMessageType = (
  text,
  fileList,
  clientIdForAttachment,
  onMessageSubmitted,
  inboxId,
  parentMsgId,
  selectedMentions,
  scheduledDate,
  isPrivateReply,
  senderAccountObj,
) => {
  console.log(
    '%cPARSED MESSAGE',
    'font-size:28px',
    selectedMentions,
    scheduledDate,
    text,
    isPrivateReply,
    senderAccountObj,
  );
  if (fileList && fileList.length > 0) {
    return groupAttachment(
      fileList,
      onMessageSubmitted,
      inboxId,
      text,
      parentMsgId,
      selectedMentions,
      scheduledDate,
      isPrivateReply,
      clientIdForAttachment,
      senderAccountObj,
    );
  } else {
    if (
      new RegExp(
        '(?:(?:https?|ftp):\\/\\/)?[\\w/\\-?=%.]+\\.[\\w/\\-?=%.]+',
      ).test(text) &&
      ExtractLinkFromText(text)
    ) {
      const link = ExtractLinkFromText(text)[0];
      return onMessageSubmitted(
        'LINK',
        { message: text, url: link },
        CreateUUIDWithoutDash(),
        inboxId,
        false,
        parentMsgId,
        selectedMentions,
        scheduledDate,
        isPrivateReply,
        senderAccountObj,
      );
    } else {
      return onMessageSubmitted(
        'TEXT',
        text,
        CreateUUIDWithoutDash(),
        inboxId,
        false,
        parentMsgId,
        selectedMentions,
        scheduledDate,
        isPrivateReply,
        senderAccountObj,
      );
    }
  }
};

const groupAttachment = (
  fileList,
  onMessageSubmitted,
  inboxId,
  text,
  parentMsgId,
  selectedMentions,
  scheduledDate,
  isPrivateReply,
  clientIdForAttachment,
  senderAccountObj,
) => {
  let imageList = [];
  let docList = [];
  let audioList = [];
  let videoList = [];

  fileList &&
  fileList.map(single => {
    console.log({single});
    if (single.type === 'image') {
      imageList.push(single);
    } else if (single.type === 'doc') {
      console.log('here doc',single.type);
      docList.push(single);
    } else if (single.type === 'audio') {
      audioList.push(single);
    } else if (single.type === 'video') {
      videoList.push(single);
    }
  });

  if (imageList.length > 0) {
    onMessageSubmitted(
      'IMAGE',
      { caption: text, fileList: imageList },
      clientIdForAttachment.image,
      inboxId,
      false,
      parentMsgId,
      selectedMentions,
      scheduledDate,
      isPrivateReply,
      senderAccountObj,
    );
  }

  if (docList.length > 0) {
    docList && docList.map(singleDoc =>
      onMessageSubmitted(
        'FILE',
        {
          caption: imageList.length === 0 ? text : '',
          size: singleDoc.attachment && singleDoc.attachment.size,
          title: singleDoc.attachment.name,
          file: singleDoc.attachment,
          url: singleDoc.url,
          uploadStatus: singleDoc.uploadStatus,
        },
        singleDoc.id,
        inboxId,
        false,
        parentMsgId,
        selectedMentions,
        scheduledDate,
        isPrivateReply,
        senderAccountObj,
      ),
    );
  }

  if (audioList.length > 0) {
    console.log({imageList},{fileList});
    audioList && audioList.map(singleAudio =>
      onMessageSubmitted(
        'AUDIO',
        {
          caption: imageList.length === 0 && docList.length === 0 ? text : '',
          size: singleAudio.attachment && singleAudio.attachment.size,
          title: singleAudio.attachment.name,
          file: singleAudio.attachment,
          url: singleAudio.url,
          uploadStatus: singleAudio.uploadStatus,
        },
        singleAudio.id,
        inboxId,
        false,
        parentMsgId,
        selectedMentions,
        scheduledDate,
        isPrivateReply,
        senderAccountObj,
      ),
    );
  }

  if (videoList.length > 0) {
    videoList && videoList.map(singleVideo =>
      onMessageSubmitted(
        'VIDEO',
        {
          caption: imageList.length === 0 && docList.length === 0 && audioList.length === 0 ? text : '',
          size: singleVideo.attachment && singleVideo.attachment.size,
          title: singleVideo.attachment.name,
          file: singleVideo.attachment,
          url: singleVideo.url,
          uploadStatus: singleVideo.uploadStatus,
        },
        singleVideo.id,
        inboxId,
        false,
        parentMsgId,
        selectedMentions,
        scheduledDate,
        isPrivateReply,
        senderAccountObj,
      ),
    );
  }
};

export const handleSubmit = (
  textMessage,
  setTextMessage,
  onMessageSubmitted,
  tagArray,
  setTagArray,
  el,
) => {
  if (textMessage !== undefined) {
    if (el.querySelectorAll('a').length > 0) {
      setTagArray(...tagArray, el.querySelectorAll('a'));
    } else {
      if (textMessage.getCurrentContent().hasText()) {
        const parsedData = draftToHtml(
          convertToRaw(textMessage.getCurrentContent()),
        );
        const str = parsedData.replace(new RegExp('<[^>]*>', 'g'), '');
        const element = document.createElement('div');
        element.innerHTML = parsedData;
        if (element.childNodes.length === 0) {
          return;
        }
        for (let i = 0; i < element.childNodes.length; i++) {
          const el = element.childNodes[i];
          if (el.innerHTML === '') {
            el.remove();
          } else {
            if (el.childNodes.length > 0) {
              const childEl = el.childNodes[0];
              const childContent = childEl.textContent;
              if (
                childEl.innerHTML === '' ||
                (childContent && childContent.trim() === '')
              ) {
                el.remove();
              }
            }
          }
        }
        let finalData = element.innerHTML;
        element.remove();
        if (finalData) {
          finalData = finalData.trim();
        }
        if (
          finalData.length === 0 ||
          (str && str.charAt(str.length - 2) === '@')
        ) {
          console.log('No data to send.');
          return;
        }
        onMessageSubmitted(finalData);
        setTextMessage(undefined);
      } else {
        console.log('No text to send.');
      }
    }
  } else {
    console.error('Text message not set.');
  }
};

export const keyBindingFn = (
  event,
  textMessage,
  setTextMessage,
  onMessageSubmitted,
  tagArray,
  setTagArray,
  el,
) => {
  if (event.shiftKey) {
    return false;
  }
  handleSubmit(
    textMessage,
    setTextMessage,
    onMessageSubmitted,
    tagArray,
    setTagArray,
    el,
  );
  return true;
};

export const mentionContent = (name, profilePic) => (
  <div className='d-flex'>
    <Image
      src={profilePic || CommonIcons.EmptyProfile}
      width='24px'
      height='24px'
      alt='profile'
    />
    <div style={{ marginLeft: '8px' }}>{name}</div>
  </div>
);

export const mapMention = (
  tagArray,
  mappedEmployeeList,
  handleChangeInMentionArrayInInbox,
  onMessageSubmitted,
  setTextMessage,
  setTagArray,
  message,
) => {
  tagArray.forEach(function(item, index) {
    const employeeObjToParseMentionId = [];

    if (tagArray[index].attributes) {
      const employeeAccountId =
        tagArray[index].attributes[0] && tagArray[index].attributes[0].value;
      const fullName =
        tagArray[index].attributes[3] && tagArray[index].attributes[3].value;

      const idExists = (arr, id) => {
        if (arr) {
          return (
            arr &&
            arr.some(function(el) {
              return el.url === id;
            })
          );
        }
      };
      if (idExists(mappedEmployeeList, employeeAccountId)) {
        const obj = {
          userId: employeeAccountId,
          fullName,
          // profilePic:
          // accountType:
        };
        employeeObjToParseMentionId.push(obj);
        message = replaceAll(
          message,
          tagArray[index].outerHTML,
          `@${employeeAccountId}`,
        );
        if (index === tagArray.length - 1) {
          // console.log(
          //   'here 1',
          //   message.replace(new RegExp('<[^>]*>', 'g'), ''),
          // );

          handleChangeInMentionArrayInInbox(employeeObjToParseMentionId);
          onMessageSubmitted(message);
          setTextMessage(undefined);
          setTagArray([]);
        }
      } else {
        if (index === 0) {
          onMessageSubmitted(message);
          setTextMessage(undefined);
          setTagArray([]);
        }
      }
    } else {
      onMessageSubmitted(message);
      setTextMessage(undefined);
      setTagArray([]);
    }
  });
};

export const onImageUpload = (
  e,
  refId,
  onImageSelection,
  parentMsgId,
  selectedMentions,
) => {
  const { files } = e.target;
  const addedFile = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.match('image')) {
      const imageId = CreateUUID().replace(/-/g, '');
      const fileList = {
        image: file,
        imageId,
        uploadingImage: true,
      };
      addedFile.push(fileList);
    }
  }
  if (addedFile.length > 0) {
    if (addedFile.length > 6) {
      confirm('You can only upload maximum of 6 images at a time');
    } else {
      onImageSelection(
        addedFile,
        CreateUUIDWithoutDash(),
        refId,
        parentMsgId,
        selectedMentions,
      );
    }
  }
};

export const onAttachmentUpload = (
  e,
  refId,
  onFileSubmitted,
  parentMsgId,
  selectedMentions,
) => {
  const { files } = e.target;
  const addedFile = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // else if (file.type.match('audio')) {
    //   const blobURL = URL.createObjectURL(file);
    //   onAudioSubmitted(blobURL);
    // } else if (file.type.match('video')) {
    //   const blobURL = URL.createObjectURL(file);
    //   onVideoSubmitted(blobURL);
    // }
    if (file.type.match('application')) {
      const docId = CreateUUID().replace(/-/g, '');
      const fileList = {
        doc: file,
        docId,
        uploadingDoc: true,
      };
      addedFile.push(fileList);
    }
    onFileSubmitted(
      addedFile,
      CreateUUIDWithoutDash(),
      refId,
      parentMsgId,
      selectedMentions,
    );
  }
};

export const onAudioUpload = (
  audioFile,
  refId,
  parentMsgId,
  selectedMentions,
  scheduledDate,
  clientId,
  onFileSubmitted,
) => {
  onFileSubmitted(
    [audioFile],
    refId,
    parentMsgId,
    selectedMentions,
    scheduledDate,
    clientId,
  );
};

export const onVideoUpload = onAudioUpload;

// TextEditorTest ko helper function eta cha
export const disableSendButton = (
  editorState,
  selectedFileList,
  disableSendBtn,
) => {
  if (
    editorState.getCurrentContent().hasText() === true &&
    convertToRaw(editorState.getCurrentContent()).blocks.filter(
      block => block.text !== '',
    ).length >
    0 ==
    true &&
    disableSendBtn
  ) {
    return true;
  }

  if (disableSendBtn && selectedFileList && selectedFileList.length > 0) {
    return true;
  }
  return false;
};

export const handleReturn = (
  editorState,
  setEditorState,
  SelectionState,
  EditorState,
  Modifier,
) => {
  let contentState = editorState.getCurrentContent();
  const firstBlock = contentState.getFirstBlock();
  const lastBlock = contentState.getLastBlock();
  const allSelected = new SelectionState({
    anchorKey: firstBlock.getKey(),
    anchorOffset: 0,
    focusKey: lastBlock.getKey(),
    focusOffset: lastBlock.getLength(),
    hasFocus: true,
  });
  contentState = Modifier.removeRange(contentState, allSelected, 'backward');
  setEditorState(EditorState.push(editorState, contentState, 'remove-range'));
  setEditorState(
    EditorState.forceSelection(contentState, contentState.getSelectionAfter()),
  );
  setEditorState(editorState);
};

export function handleKeyCommand(
  command,
  RichUtils,
  editorState,
  onChange,
  draftToHtml,
  convertToRaw,
  onMessageSubmitted,
  setEditorState,
  SelectionState,
  EditorState,
  Modifier,
  setSelectedMentions,
) {
  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState) {
    onChange(newState);
    return 'handled';
  }
  if (command === 'submit-comment') {
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
      ).length > 0
    ) {
      onMessageSubmitted(markup);
      handleReturn(
        editorState,
        setEditorState,
        SelectionState,
        EditorState,
        Modifier,
      );
      setSelectedMentions([]);
      return 'handled';
    }
  }
  return 'not-handled';
}

// map mentions id to user name
export const funcToMapMentionIdToName = (
  mentionArray,
  textMessage,
  hasMention,
  clientId,
  isMyMsg
) => {
  let str = textMessage;
  hasMention &&
  mentionArray &&
  mentionArray.map(data => {
    if (str && str.includes(data.userid)) {
      str = str.replaceAll(
        `@${data.userid}`,
        ` <span id='${clientId}'
                isMyMsg='${isMyMsg}'
                mention-id='${data.userid}'
                style='color: inherit; cursor:pointer; text-decoration: underline; position:relative'
                inbox-mention-id='inbox-mention-elem'
 >@${
          data.fullname
        }</span>`,
      );
    }
  });
  return str && parse(str.replace(/\u21B5/g, '<br/>'));
};

export const funcToMapMentionIdToNameAndReturnStr = (
  mentionArray,
  textMessage,
  hasMention,
) => {
  let str = textMessage;
  hasMention &&
  mentionArray &&
  mentionArray.map(data => {
    if (str && str.includes(data.userid)) {
      str = str.replaceAll(
        `@${data.userid}`,
        ` <span id='${
          data.userid
        }' style='color: inherit; cursor:pointer; text-decoration: underline' inbox-mention-id='inbox-mention-elem'>@${
          data.fullname
        }</span>`,
      );
    }
  });
  return str && str.replace(/\u21B5/g, '<br/>');
};

// format the mention data array to desired object userid and fullname
export const formattedData = messageObj =>
  messageObj &&
  messageObj.mentionList &&
  messageObj.mentionList.map(data => {
    return {
      userid: data.userId ? data.userId : data.userid,
      fullname: data.name || data.fullname,
    };
  });
