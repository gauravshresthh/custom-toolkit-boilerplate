import React from 'react';

import Image from './Image/Image';

import { Style } from './style';

const ProfileIconWithName = ({
  width,
  label,
  email,
  height,
  src,
  showStatus,
  borderRadius,
  isActive,
  gap,
  textSize,
  textColor,
  emailSize,
  emailColor,
}) => {
  return (
    <Style
      gap={gap}
      textSize={textSize}
      textColor={textColor}
      emailSize={emailSize}
      emailColor={emailColor}
    >
      <Image
        width={width}
        height={height}
        src={src}
        showStatus={showStatus}
        borderRadius={borderRadius}
        isActive={isActive}
      />
      <div className="d-flex data">
        <div>{label}</div>
        <div className="email-style">{email}</div>
      </div>
    </Style>
  );
};

export default ProfileIconWithName;
