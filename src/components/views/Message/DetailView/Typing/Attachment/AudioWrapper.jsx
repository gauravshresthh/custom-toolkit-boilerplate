import React from 'react';
import PropTypes from 'prop-types';
import TextEditorIcon from '../../../../../../assets/images/TextEditorIcon';
import { StyledDocWrapper } from '../Style';
import OutlinedSpinner from '../../../../../elements/Spinner';
import AttachmentIcon from '../../../../../../assets/images/messages/AttachmentIcon';
import { MessageIcon } from '../../../../../../assets/images/messages/MessageIcon';
import Bar from '../../../../../layouts/Chat/ChatMessage/Audio/Bar';
import useAudioPlayer from '../../../../../layouts/Chat/ChatMessage/Audio/useAudioPlayer';
import { FileModel } from '../../../../../../model/FileModel';

const AudioWrapper = ({
  audio,
  removeSelectedFile,
  refId,
  resendFile,
  parentMsgId,
  selectedMentions,
  clientIdForAttachment,
  hideRemoveIcon,
}) => {
  if (!audio) {
    return null;
  }

  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(audio.attachmentid || audio.id);

  return (
    <StyledDocWrapper>
      <div className="doc-wrapper">
        {audio.uploadStatus === 'UPLOADING' ? (
          <OutlinedSpinner
            color="#666"
            spinnerStyle={{
              width: '25px',
            }}
          />
        ) : audio.uploadStatus === 'FAILED' ? (
          <div
            style={{ width: '24px', cursor: 'pointer' }}
            onClick={() => {
              resendFile(
                [{ id: audio.id, file: audio.attachment }],
                refId,
                parentMsgId,
                selectedMentions,
                '',
                FileModel.GetAttachmentClientId(
                  audio.attachment,
                  audio.id,
                  clientIdForAttachment,
                ),
              );
            }}
          >
            <MessageIcon.ResendIcon />
          </div>
        ) : playing ? (
          <div className="player__button" onClick={() => setPlaying(false)}>
            <AttachmentIcon.PauseAudio color="#666" />
          </div>
        ) : (
          <div className="player__button" onClick={() => setPlaying(true)}>
            <AttachmentIcon.PlayAudio color="#666" />
          </div>
        )}
        <audio
          id={'audio-player' + (audio.attachmentid || audio.id)}
          controls
          hidden
        >
          <source src={audio.url} />
        </audio>
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={time => setClickedTime(time)}
          audioPlayerWidth="100px"
          barColor="#666"
          hideTime
          audioId={audio.id}
        />
        <div
          hidden={hideRemoveIcon}
          className="delete-img"
          onClick={() => removeSelectedFile(audio.id, parentMsgId)}
        >
          <TextEditorIcon.CloseIcon />
        </div>
      </div>
    </StyledDocWrapper>
  );
};

AudioWrapper.propTypes = {
  audio: PropTypes.any,
  removeSelectedFile: PropTypes.func,
};

export default AudioWrapper;
