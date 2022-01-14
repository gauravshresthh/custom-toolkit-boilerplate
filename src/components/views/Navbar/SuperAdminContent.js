import React from 'react';
import Image from '../../elements/Image/Image';
import { TopNavbarPopoverContent } from '../../layouts/NavLayout/Style';

export default function SuperAdminContent({ props, setOpenAccountPopover }) {
  return (
    <TopNavbarPopoverContent>
      {props.superAdminList &&
        props.superAdminList.map((single, idx) => (
          <div
            key={idx}
            className="d-flex super-admin-list"
            onClick={() => {
              props.handleChangeInSuperAdmin(single);
              setOpenAccountPopover(false);
            }}
          >
            <Image
              src={single.serviceprovider && single.serviceprovider.profilepic}
              alt="profile"
              width="28px"
              height="28px"
              borderRadius="10%"
            />
            <div className="super-admin-name">
              {single.serviceprovider && single.serviceprovider.fullname}
            </div>
          </div>
        ))}
      <div
        className="d-flex super-admin-list"
        style={{ borderTop: '1px solid #f0f0f0' }}
        onClick={() => setOpenAccountPopover(false)}
      >
        Members
      </div>{' '}
      <div
        className="d-flex super-admin-list"
        onClick={() => setOpenAccountPopover(false)}
      >
        Team
      </div>{' '}
      <div
        className="d-flex super-admin-list"
        onClick={() => setOpenAccountPopover(false)}
      >
        Billing
      </div>
    </TopNavbarPopoverContent>
  );
}
