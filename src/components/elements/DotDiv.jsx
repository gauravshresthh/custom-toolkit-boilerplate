import React from 'react';

const DotDiv = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
      }}
    >
    </div>
  );
};

export default DotDiv;
