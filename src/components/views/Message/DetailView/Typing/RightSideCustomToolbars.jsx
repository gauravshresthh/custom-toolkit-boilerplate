import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextEditorIcon from '../../../../../assets/images/TextEditorIcon';
import CommonIcon from '../../../../../assets/images/common/CommonIcons';
import { StyledRightSideCustomToolbar } from './Style';
import PopoverModal from '../../../../elements/PopoverModal';
import SchedulePopoverContent from './SchedulePopoverContent';

const RightSideCustomToolbars = ({
                                   editorForReply,
                                   onMessageSubmitted,
                                   disableSendBtn,
                                   setOpenDatePicker,
                                   updateScheduledMsg,
                                   isEditingScheduledMsg,
                                   setSelectedScheduledMsg,
                                   setIsEditingScheduledMsg,
                                   audioRecord,
                                   setAudioRecord,
                                   videoRecord,
                                   setVideoRecord,
                                   setClearTextEditor,
                                   content,
                                   forwhom,
                                 }) => {
  const [openMoreOption, setOpenMoreOption] = useState(false);
  return (
    <StyledRightSideCustomToolbar editorForReply={editorForReply}>
      <div className='toolbar-icon' hidden={isEditingScheduledMsg || editorForReply}
           onClick={() => setVideoRecord(true)}>
        {TextEditorIcon.VideoIcon(videoRecord ? '#376af5' : null)}
      </div>
      <div className='toolbar-icon' hidden={isEditingScheduledMsg || editorForReply}
           onClick={() => setAudioRecord(true)}>
        {TextEditorIcon.AudioIcon(audioRecord ? '#376af5' : null)}
      </div>
      <div
        hidden={!isEditingScheduledMsg}
        className='toolbar-icon'
        onClick={updateScheduledMsg}
        style={{ cursor: disableSendBtn ? 'pointer' : 'not-allowed' }}
      >
        <CommonIcon.TickIcon color='#376af5' width='18px' height='15px' />
      </div>
      <div
        hidden={!isEditingScheduledMsg}
        className='toolbar-icon'
        onClick={() => {
          setIsEditingScheduledMsg(false);
          setSelectedScheduledMsg(false);
          setClearTextEditor(true);
        }}
      >
        <CommonIcon.CrossIcon color='red' />
      </div>
      <div
        hidden={isEditingScheduledMsg}
        className='toolbar-icon'
        onClick={onMessageSubmitted}
        style={{ cursor: disableSendBtn ? 'pointer' : 'not-allowed' }}
        disabled={!disableSendBtn}
      >
        <TextEditorIcon.SendIcon color={disableSendBtn ? '#376af5' : null} />
      </div>

      {!editorForReply &&
        !isEditingScheduledMsg && forwhom !== 'COMPOSE' &&
        (!disableSendBtn ? (
          <div
            className='more-icon'
            style={{ cursor: !disableSendBtn ? 'not-allowed' : 'pointer' }}
          >
            <TextEditorIcon.MoreIcon
              color={disableSendBtn ? '#376af5' : null}
            />
          </div>
        ) : (
          <PopoverModal
            visible={openMoreOption}
            onVisibleChange={visibility => {
              setOpenMoreOption(visibility);
            }}
            contentTopMargin='-4px'
            contentWidth='190px'
            trigger='click'
            placement='bottomLeft'
            popoverContent={
              <SchedulePopoverContent
                setOpenMoreOption={setOpenMoreOption}
                setOpenDatePicker={setOpenDatePicker}
                content={content}
                onMessageSubmitted={onMessageSubmitted}
              />
            }
            children={
              <div
                className='more-icon'
                style={{ cursor: !disableSendBtn ? 'not-allowed' : 'pointer' }}
              >
                <TextEditorIcon.MoreIcon
                  color={disableSendBtn ? '#376af5' : null}
                />
              </div>
            }
          />
        ))}
    </StyledRightSideCustomToolbar>
  );
};

RightSideCustomToolbars.propTypes = {
  onMessageSubmitted: PropTypes.func,
  setTextMessage: PropTypes.func,
  tagArray: PropTypes.func,
  setTagArray: PropTypes.func,
  textMessage: PropTypes.string,
  el: PropTypes.any,
  editorForReply: PropTypes.bool,
  disableSendBtn: PropTypes.any,
};

export default RightSideCustomToolbars;
