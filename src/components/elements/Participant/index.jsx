import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import CommonIcons from '../../../assets/images/common/CommonIcons';
import PopoverModal from '../PopoverModal';
import InboxProto from '../../../protos/inbox_pb';
import UserProto from '../../../protos/user_pb';

import { Container, InnerWrap, StyledParticipantActions } from './style';

const Participant = ({
  image,
  name,
  isMuted,
  role,
  hasActions,
  extraCss,
  nameSize,
  imgSize = '24px',
  border,
  participantDetails,
  inboxId,
  inboxDetail,
  muteParticipant,
  removeParticipant,
  sectionId,
  localStorage,
  amIAdmin,
  left,
}) => {
  const [
    particpantPopoverVisibility,
    setParticipantPopoverVisibility,
  ] = useState(false);

  // mute participant
  function muteParticipantClick() {
    setParticipantPopoverVisibility(false);
    const muteProto = new InboxProto.UpdateInboxNotificationRequest();
    muteProto.setInboxid(inboxDetail && inboxDetail.inboxId);
    const participant = muteProto.getParticipantMap();
    participant.set(participantDetails.participantId, isMuted ? 0 : 3);
    muteParticipant(muteProto);
  }

  return (
    <Container extraCss={extraCss} nameSize={nameSize}>
      <div className="participant-wrap">
        <InnerWrap>
          <Image
            src={image}
            width={imgSize}
            height={imgSize}
            alt="participant"
            border={border}
          />
          <p className="name">
            {name}
            <span className="mute-icon">
              {isMuted ? <CommonIcons.MuteIcon /> : null}
            </span>
          </p>
          {role === 'ADMIN' && inboxDetail && inboxDetail.inboxType !== 1 && <p className="role">ADMIN</p>}
        </InnerWrap>
        {hasActions && !left ? (
          <PopoverModal
            visible={particpantPopoverVisibility}
            onVisibleChange={visibility =>
              setParticipantPopoverVisibility(visibility)
            }
            trigger="click"
            placement="left"
            contentWidth="100px"
            contentTopMargin="-5px"
            popoverContent={
              <StyledParticipantActions>
                <p className="action" onClick={muteParticipantClick}>
                  {!isMuted ? 'Mute' : 'Unmute'}
                </p>

                {sectionId == 2 && amIAdmin ? (
                  <p
                    className="action"
                    onClick={() => {
                      removeParticipant(
                        inboxDetail,
                        participantDetails,
                        inboxId,
                      );
                    }}
                  >
                    Remove
                  </p>
                ) : null}
              </StyledParticipantActions>
            }
            children={
              <div className="edit-icon">
                <CommonIcons.MoreIcon width="16px" />
              </div>
            }
          />
        ) : null}
      </div>
    </Container>
  );
};

Participant.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  isMuted: PropTypes.bool,
  hasActions: PropTypes.bool,
};

export default Participant;
