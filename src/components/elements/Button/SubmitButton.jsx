import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions

import { StyledButton } from './SubmitButtonstyle';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const SubmitButton = ({
                        text,
                        type,
                        loading,
                        onClick,
                        className,
                        disable,
                        brRadius = '2px',
                        width,
                        style,
                      }) => (
  <StyledButton
    className={className}
    type={type}
    onClick={!disable && onClick}
    disabled={disable || loading}
    brRadius={brRadius}
    width={width}
    style={style}
  >
    {text}
    {loading && (
      <Spin indicator={<LoadingOutlined
        style={{ fontSize: 16, color: '#fff',marginLeft:'10px' }}
        spin
      />} />
    )}
  </StyledButton>
);

SubmitButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.any,
  style: PropTypes.any,
  brRadius: PropTypes.string,
};

export default SubmitButton;
