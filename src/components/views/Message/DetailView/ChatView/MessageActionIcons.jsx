import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';

import PopoverModal from '../../../../elements/PopoverModal';

import {
  sendMessageObject,
  useClipboard,
} from '../../../../layouts/Chat/use-clipboard';

import {
  ClickMoreContentWrapper,
  OptionItem,
  StyledMessageActionIcons,
} from './MessageActionIconsStyle';
import { CreateUUIDWithoutDash } from '../../../../../utils/helper';

import { EmojiData } from './emojiData';

const MessageActionIcons = ({
  isMyMsg,
  message,
  onClickReply,
  onClickPrivateReply,
  onClickForward,
  onClickPin,
  onClickDelete,
  visible,
  onPinClick,
  showMoreOptions,
  setShowMoreOptions,
  setReaction,
  onEditClick,
  showEmojiContainer,
  setShowEmojiContainer,
  inboxType,
}) => {
  const clipboard = useClipboard({ timeout: 500 });

  const emojiArray = ['✅', '😀', '😄', '😮', '😭', '👋'];

  const moreClickContent = (
    <ClickMoreContentWrapper>
      <OptionItem
        onClick={onClickPrivateReply}
        hidden={message.delivered !== 'IS_DELIVERED' || inboxType === 1}
      >
        <CommonIcons.PrivateReplyOption />
        <span>Private reply</span>
      </OptionItem>
      {(message.messageType === 'TEXT' || message.messageType === 'LINK') && (
        <OptionItem
          hidden={message.delivered !== 'IS_DELIVERED'}
          onClick={() => {
            let msgToCopy = sendMessageObject(message);
            clipboard.copy(
              msgToCopy
                .replace(new RegExp('<[^>]*>', 'g'), '')
                .replace(/\&nbsp;/g, ''),
            );
          }}
        >
          <CommonIcons.CopyOption />
          <span>Copy</span>
        </OptionItem>
      )}
      {isMyMsg && (
        <>
          <OptionItem onClick={onClickDelete}>
            <CommonIcons.DeleteOption />
            <span>Delete</span>
          </OptionItem>
          {(message.messageType === 'TEXT' || message.messageType === 'LINK') &&
            message.delivered === 'IS_DELIVERED' && (
              <OptionItem onClick={onEditClick}>
                <CommonIcons.EditOption />
                <span>Edit</span>
              </OptionItem>
            )}
        </>
      )}
      <OptionItem
        onClick={onPinClick}
        hidden={message.delivered !== 'IS_DELIVERED'}
      >
        {message.pinned ? (
          <CommonIcons.UnPinOption />
        ) : (
          <CommonIcons.PinOption />
        )}

        <span>{message.pinned ? 'Unpin' : 'Pin'}</span>
      </OptionItem>
    </ClickMoreContentWrapper>
  );

  return (
    <StyledMessageActionIcons
      isMyMsg={isMyMsg}
      visible={visible}
      msgDeliveryFail={message.delivered !== 'IS_DELIVERED'}
    >
      <div className="msg-actions">
        {/* forward icon */}
        <Tooltip
          title="Forward"
          placement="top"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <div
            className="action-icon"
            onClick={onClickForward}
            hidden={message.delivered !== 'IS_DELIVERED'}
          >
            <CommonIcons.NewForward />
          </div>
        </Tooltip>

        {/* reply icon */}
        <Tooltip
          title="Reply"
          placement="top"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <div
            className="action-icon"
            onClick={onClickReply}
            hidden={message.delivered !== 'IS_DELIVERED'}
          >
            <CommonIcons.ReplyIcon />
          </div>
        </Tooltip>

        {/* emoji icon */}
        <Tooltip
          title=""
          placement="top"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <div
            hidden={message.delivered !== 'IS_DELIVERED'}
            className="action-icon"
            onClick={() => {
              setShowEmojiContainer(true);
            }}
            onMouseEnter={() => {
              setShowMoreOptions(false);
              setShowEmojiContainer(true);
            }}
          >
            <CommonIcons.NewEmoji />

            {showEmojiContainer && (
              <div className="emojiFakeWrapper">
                <div className="emojiContainer">
                  {emojiArray.map(single => (
                    <button
                      key={single}
                      style={{ padding: '0' }}
                      onClick={() => {
                        setShowEmojiContainer(false);
                        setReaction(
                          'SET_REACTION_MESSAGE',
                          single,
                          CreateUUIDWithoutDash(),
                          message.refId,
                          '',
                          message.rtcMessageId,
                          '',
                          '',
                        );
                      }}
                    >
                      {single}
                    </button>
                  ))}

                  <PopoverModal
                    contentWidth="200px"
                    contentTopMargin="-200px"
                    trigger="click"
                    placement="top"
                    maxHeight="200px"
                    popoverContent={
                      <div className="emojiCollection">
                        {EmojiData.map(single => (
                          <span
                            onClick={() => {
                              setReaction(
                                'SET_REACTION_MESSAGE',
                                single.emoji,
                                CreateUUIDWithoutDash(),
                                message.refId,
                                '',
                                message.rtcMessageId,
                                '',
                                '',
                              );
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            {single.emoji}
                          </span>
                        ))}
                      </div>
                    }
                    // eslint-disable-next-line
                    children={<CommonIcons.MoreEmoji />}
                  />
                </div>
              </div>
            )}
          </div>
        </Tooltip>

        {/* more icon */}
        <div
          style={{ position: 'relative' }}
          className="action-icon"
          onClick={() => {
            setShowEmojiContainer(false);
            setShowMoreOptions(!showMoreOptions);
          }}
        >
          {showMoreOptions && (
            <div
              style={{ position: 'absolute', width: '125px', bottom: '30px' }}
            >
              {moreClickContent}
            </div>
          )}
          <CommonIcons.ThreeDots
            color={showMoreOptions ? '#376AF5' : '#666666'}
          />
        </div>
      </div>
    </StyledMessageActionIcons>
  );
};

MessageActionIcons.propTypes = {
  isMyMsg: PropTypes.bool,
  onClickForward: PropTypes.func,
  onClickReply: PropTypes.func,
  onClickPin: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default MessageActionIcons;
