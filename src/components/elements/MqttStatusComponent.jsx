import React from 'react';
import PropTypes from 'prop-types';

const MqttStatusComponent = ({ variant, msg, styles }) => {
  return (
    <div
      className={'mqtt-status'}
      style={{ color: variant === 'success' ? 'green' : null, ...styles }}
    >
      {msg}
    </div>
  );
};

MqttStatusComponent.propTypes = {
  variant: PropTypes.string,
  msg: PropTypes.string,
  styles: PropTypes.any,
};

export default MqttStatusComponent;
