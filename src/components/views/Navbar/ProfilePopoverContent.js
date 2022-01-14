import React from 'react';
import styled from 'styled-components';
import Image from '../../elements/Image/Image';
import CommonIcons from '../../../assets/images/common/CommonIcons';
import { onLogout } from '../../../containers/Layout/helper';
import LocalDb from '../../../localStorage';

const StyledProfilePopoverContent = styled.div`
  .top-content {
    padding: 14px 14px 7px 14px;
    border-bottom: 1px solid #f0f0f0;
  }
  .profile-name {
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }
  .set-away-btn {
    padding-top: 16px;
    cursor: pointer;
  }
  .bottom-content {
    padding: 4px 0;
    flex-direction: column;
    div {
      padding: 4px 14px;
      cursor: pointer;
      &:hover {
        background: #f0f0f0;
      }
    }
  }
`;

export default function ProfilePopoverContent({
  props,
  setOpenProfilePopover,
}) {
  return (
    <StyledProfilePopoverContent>
      <div className="top-content">
        <div className="d-flex">
          <Image
            src={
              LocalDb.getAccountDetail() &&
              LocalDb.getAccountDetail().profilepic
            }
            alt="profile"
            width="34px"
            height="34px"
          />
          <div style={{ paddingLeft: '10px' }}>
            <div className="profile-name">
              {LocalDb.getAccountDetail() &&
                LocalDb.getAccountDetail().fullname}
            </div>
            <div>
              <CommonIcons.ActiveStatus /> Active
            </div>
          </div>
        </div>
        <div className="set-away-btn">Set yourself as away</div>
      </div>
      <div className="d-flex bottom-content">
        <div onClick={() => setOpenProfilePopover(false)}>Profile</div>
        <div
          onClick={() => {
            setOpenProfilePopover(false);
            onLogout();
            props.onLogout();
          }}
        >
          Logout
        </div>
      </div>
    </StyledProfilePopoverContent>
  );
}
