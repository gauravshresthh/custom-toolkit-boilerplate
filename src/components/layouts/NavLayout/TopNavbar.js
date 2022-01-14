import React, { useEffect, useState } from 'react';
import SearchBar from '../../elements/SearchBar';
import CommonIcons from '../../../assets/images/common/CommonIcons';
import Image from '../../elements/Image/Image';
import PopoverModal from '../../elements/PopoverModal';
import ProfilePopoverContent from '../../views/Navbar/ProfilePopoverContent';
import { StyledTopNavbar } from './Style';
import SuperAdminContent from '../../views/Navbar/SuperAdminContent';
import LocalDb from '../../../localStorage';

export default function TopNavbar({ props }) {
  const [showTextLogo, setShowTextLogo] = useState(window.innerWidth >= 992);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const [openProfilePopover, setOpenProfilePopover] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 992 && showTextLogo) {
        setShowTextLogo(false);
      } else if (window.innerWidth >= 992 && !showTextLogo) {
        setShowTextLogo(true);
      }
    });
  });

  return (
    <StyledTopNavbar>
      <div className="top-navbar-menu anydone-logo">
        {showTextLogo ? (
          <CommonIcons.AnydoneTextLogo />
        ) : (
          <CommonIcons.AnydoneLogo />
        )}
      </div>
      <div className="top-navbar-menu search-wrapper">
        <SearchBar width="80%" />
      </div>

      <div className="top-navbar-menu profile-wrapper">
        {props.selectedSuperAdmin && (
          <PopoverModal
            visible={openAccountPopover}
            onVisibleChange={visibility => {
              setOpenAccountPopover(visibility);
            }}
            contentTopMargin="-4px"
            contentWidth="190px"
            trigger="click"
            placement="bottomLeft"
            popoverContent={
              <SuperAdminContent
                props={props}
                setOpenAccountPopover={setOpenAccountPopover}
              />
            }
            children={
              <div className="account-wrapper" style={{ wordBreak: 'normal' }}>
                <Image
                  src={
                    props.selectedSuperAdmin &&
                    props.selectedSuperAdmin.serviceprovider.profilepic
                  }
                  alt="profile"
                  width="28px"
                  height="28px"
                  borderRadius="10%"
                />
                <div className="account-title">
                  {props.selectedSuperAdmin &&
                    props.selectedSuperAdmin.serviceprovider.fullname}
                </div>
                <CommonIcons.BottomArrow />
              </div>
            }
          />
        )}
        <PopoverModal
          visible={openProfilePopover}
          onVisibleChange={visibility => {
            setOpenProfilePopover(visibility);
          }}
          contentTopMargin="-5px"
          contentWidth="190px"
          trigger="click"
          placement="bottomRight"
          popoverContent={
            <ProfilePopoverContent
              props={props}
              setOpenProfilePopover={setOpenProfilePopover}
            />
          }
          children={
            <Image
              src={
                LocalDb.getAccountDetail() &&
                LocalDb.getAccountDetail().profilepic
              }
              alt="profile"
              width="32px"
              height="32px"
              isActive
              showStatus
            />
          }
        />
      </div>
    </StyledTopNavbar>
  );
}
