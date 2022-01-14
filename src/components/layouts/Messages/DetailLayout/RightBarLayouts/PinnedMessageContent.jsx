import React from 'react';
import { Waypoint } from 'react-waypoint';

import ImageComponent from './Image';

import Audio from './Audio/Audio';
import Video from './Video';
import Link from './Link';

import OutlinedSpinner from '../../../../elements/Spinner';

import { renderIconsBasedOnFileUrl } from '../../../../../utils/helper';

import CommonIcons from '../../../../../assets/images/common/CommonIcons';

import { DayDateFormatting } from '../../../../../utils/dateHelper';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../views/Message/DetailView/Typing/helper';

import {
  PinnedContainer,
  LowerContainer,
  UnpinButton,
  DocContainer,
  TextContainer,
} from './style';

function renderDocUI(messageObj, caption) {
  return (
    <>
      <p>
        {funcToMapMentionIdToName(
          formattedData(messageObj),
          caption,
          messageObj.hasMentions,
        )}
      </p>
      <DocContainer
        onClick={() => {
          window.open(
            messageObj.attachment.url.includes('https://')
              ? messageObj.attachment.url
              : 'https://' + messageObj.attachment.url,
            '_blank',
          );
        }}
      >
        <div className="iconContainer">
          {renderIconsBasedOnFileUrl(messageObj.attachment.url)}
        </div>
        <span className="text">{messageObj.attachment.title}</span>
      </DocContainer>
    </>
  );
}

function renderText(messageObj, caption) {
  return (
    <TextContainer>
      {funcToMapMentionIdToName(
        formattedData(messageObj),
        caption,
        messageObj.hasMentions,
      )}
    </TextContainer>
  );
}

function PinnedMessageContent({
  pinnedMessages,
  pinMessage,
  refId,
  getPinMessage,
  nextPinPagination,
}) {
  console.log('pinnedMessages', pinnedMessages);
  return (
    <>
      {pinnedMessages ? (
        <>
          {pinnedMessages &&
            pinnedMessages
              .filter(obj => obj.refId == refId)
              .sort((a, b) => b.pinnedAt - a.pinnedAt)
              .map(single => (
                <PinnedContainer>
                  {single.messageType === 'IMAGE' && (
                    <ImageComponent
                      messageObj={single}
                      imgArray={single.image}
                    />
                  )}
                  {single.messageType === 'TEXT' &&
                    renderText(single, single.text.message)}
                  {single.messageType === 'FILE' &&
                    renderDocUI(single, single.attachment.caption)}
                  {single.messageType === 'AUDIO' && (
                    <Audio
                      messageObj={single}
                      audio={single.audio}
                      isMyMsg={false}
                    />
                  )}
                  {single.messageType === 'VIDEO' && (
                    <Video messageObj={single} />
                  )}

                  {single.messageType === 'LINK' && (
                    <Link messageObj={single} />
                  )}

                  <LowerContainer>
                    <div className="iconContainer">
                      <CommonIcons.PinIcon />
                    </div>

                    <span>
                      Pinned at {DayDateFormatting(single.pinnedAt / 1000)}
                    </span>
                    <UnpinButton
                      onClick={() => pinMessage(single.rtcMessageId, false)}
                    >
                      Unpin
                    </UnpinButton>
                  </LowerContainer>
                </PinnedContainer>
              ))}
        </>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <OutlinedSpinner
            width="24px"
            spinnerStyle={{
              display: 'flex',
              justifyContent: 'center',
              padding: '20px 0',
            }}
            color="#376af5"
          />
        </div>
      )}
      {}
      {nextPinPagination && (
        <Waypoint
          topOffset="0"
          onEnter={() => {
            getPinMessage(refId, nextPinPagination);
          }}
        >
          <div>
            <OutlinedSpinner
              width="24px"
              spinnerStyle={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px 0',
              }}
              color="#376af5"
            />
          </div>
        </Waypoint>
      )}
    </>
  );
}

export default PinnedMessageContent;
