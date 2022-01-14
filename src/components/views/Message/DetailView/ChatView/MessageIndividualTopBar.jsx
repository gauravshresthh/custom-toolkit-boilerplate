import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import { RIGHT_SIDE_CONTENT } from '../../../../../containers/Messages/Details/constants';
import { getUserDataToSaveInCookie } from '../../../../../containers/App/helper';
import { CALL_BASE_API, subDomain } from '../../../../../globalConstants';
import LocalDb from '../../../../../localStorage';

import { PinContainer, StyledInboxIndividualTopBar } from './style';
import { mapObjToEdit } from '../../../../../containers/Messages/Details/DTO';
import MqttStatusComponent from '../../../../elements/MqttStatusComponent';

const InboxIndividualTopBar = ({
  pinnedMsgList,
  inboxDetail,
  isSelf,
  selectedSuperAdmin,
  name,
  isMuted,
  rightSideDetailType,
  setRightSideDetailType,
  refId,
  pinnedMsgCount,
  setIsSearching,
  editSubject,
  mqttStatus,
  getPinMessage,
}) => {
  const [isEditingSubject, setIsEditingSubject] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState('');

  function filterPinnedMsgList(pinMsg) {
    if (pinMsg) {
      return pinMsg.filter(single => single.refId == refId);
    }
  }

  useEffect(() => {
    setIsEditingSubject(false);
  }, [refId]);

  useEffect(() => {
    inboxDetail && setSubjectToEdit(inboxDetail.subject);
  }, [inboxDetail]);
  return (
    <StyledInboxIndividualTopBar>
      <div id="top-bar-id">
        <div className="topbar">
          <div className="name d-flex text-truncate">
            {isEditingSubject ? (
              <input
                className="edit-name"
                value={subjectToEdit}
                onChange={e => setSubjectToEdit(e.target.value)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    editSubject(
                      mapObjToEdit(subjectToEdit, inboxDetail),
                      inboxDetail.inboxId,
                    );
                    setIsEditingSubject(false);
                  }
                }}
              />
            ) : (
              <div
                className="name-field"
                onClick={() => setIsEditingSubject(true)}
              >
                {name}
              </div>
            )}
            {isMuted && (
              <span style={{ display: 'inline-block', marginLeft: '10px' }}>
                <CommonIcons.MuteIcon />
              </span>
            )}
          </div>
          <div className="actions">
            <div
              className="action-icons"
              onClick={() => setRightSideDetailType(RIGHT_SIDE_CONTENT['3'])}
            >
              <CommonIcons.SearchIcon />
            </div>
            {!isSelf && (
              <div
                className="action-icons"
                onClick={() => {
                  document.cookie = `anyDoneSession=${getUserDataToSaveInCookie(
                    selectedSuperAdmin,
                  )}; Domain=${subDomain}; path=/`;
                  setTimeout(() => {
                    window.open(
                      `${CALL_BASE_API}/CALL_MODE_INITIATE/${refId}/initiate/${LocalDb.getUserAccountId()}`,
                      '_blank',
                    );
                  }, 0);
                }}
              >
                <CommonIcons.CallImage />
              </div>
            )}
            {/*<div className="action-icons">*/}
            {/*  <CommonIcons.VideoCallImage />*/}
            {/*</div>*/}
            {rightSideDetailType !== RIGHT_SIDE_CONTENT['1'] && (
              <div
                className="action-icons"
                onClick={() => setRightSideDetailType(RIGHT_SIDE_CONTENT['1'])}
              >
                <CommonIcons.DetailsIcon />
              </div>
            )}
          </div>
        </div>
        {mqttStatus.open && (
          <MqttStatusComponent
            msg={mqttStatus.msg}
            variant={mqttStatus.variant}
          />
        )}

        {/* { ani count lai filterPinnedMsgList(inboxDetail).length} */}
        {inboxDetail && inboxDetail.pinnedmessagecount > 0 && (
          <PinContainer id="pinned-message">
            <div
              className="inner"
              onClick={async () => {
                getPinMessage(inboxDetail && inboxDetail.inboxId, '');
                setIsSearching(false);
                await setRightSideDetailType(RIGHT_SIDE_CONTENT['6']);
              }}
            >
              <span>
                <CommonIcons.PinIcon />
              </span>
              <span>
                Pinned messages ({inboxDetail && inboxDetail.pinnedmessagecount}
                )
              </span>
            </div>
          </PinContainer>
        )}
      </div>
    </StyledInboxIndividualTopBar>
  );
};

InboxIndividualTopBar.propTypes = {
  name: PropTypes.string,
  isMuted: PropTypes.bool,
  rightSideDetailType: PropTypes.any,
  setRightSideDetailType: PropTypes.func,
};

export default InboxIndividualTopBar;
