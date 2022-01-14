import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { StyledCancelButton } from './buttonStyle';

const CancelButton = ({ text, onClick, disable, brRadius = '2px' }) => (
  <StyledCancelButton onClick={!disable && onClick} brRadius={brRadius}>
    {text}
  </StyledCancelButton>
);

CancelButton.propTypes = {
  text: PropTypes.string,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  brRadius: PropTypes.string,
};

export default CancelButton;
