import React from 'react';
import { Avatar } from 'antd';
import emptyProfile from '../../../assets/images/common/empty-profile.svg'

const AvatarGroup = ({ profilePicList }) => {
  return (
    <Avatar.Group
      maxCount={2}
      maxStyle={{
        color: '#376af5',
        backgroundColor: '#cfd9fd',
        fontSize:'12px'
      }}
      size={28}
    >
      {profilePicList && profilePicList.map(singlePic =>
        <Avatar src={singlePic || emptyProfile} />)}
    </Avatar.Group>
  );
};

export default AvatarGroup;
