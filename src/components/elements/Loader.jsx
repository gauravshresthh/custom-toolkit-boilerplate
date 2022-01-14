import React from 'react';
import OutlinedSpinner from './Spinner';
import CommonIcons from '../../assets/images/common/CommonIcons';

const Loader = ({ color, withLogo, wrapperHeight, width }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: `${wrapperHeight || 'calc(100% - 52px)'}`,
        position: 'absolute',
        left: '0',
        flexDirection: 'column',
      }}
    >
      {withLogo && (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <CommonIcons.AnydoneLogo width="55" height="57" />
          <div style={{ color: '#666', marginTop: '4px', fontSize: '16px' }}>
            Please wait, this might take a while.
          </div>
        </div>
      )}
      <OutlinedSpinner color={color} width={width} />
    </div>
  );
};

export default Loader;
