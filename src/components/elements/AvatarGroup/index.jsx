/* eslint-disable */

import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

function Index({
  icon,
  // The style of excess avatar style
  maxStyle,
  maxCount = 2,
  size = 'default',
  // array of users
  avatars,
  ...props
}) {
  if (!avatars) {
    return null;
  }

  return (
    <Avatar.Group
      maxStyle={maxStyle}
      maxCount={maxCount}
      size={size}
      {...props}
    >
      {avatars.map(data => (
        <Avatar
          icon={icon}
          shape="circle"
          key={data.id}
          src={icon ? null : data.img}
          alt={data.img}
          onError={() => icon}
        />
      ))}
    </Avatar.Group>
  );
}

export default Index;

Index.propTypes = {
  maxCount: PropTypes.number,
  size: PropTypes.string,
  maxStyle: PropTypes.string,
  icon: PropTypes.string,
  avatars: PropTypes.array,
};
