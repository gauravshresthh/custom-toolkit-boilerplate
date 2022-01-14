import React from 'react';
import PropTypes from 'prop-types';

import { StyledInputWithLabel } from './style';

const InputWithLabel = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  onKeyUp,
}) => {
  return (
    <StyledInputWithLabel>
      <label>{label}</label>
      <input
        onKeyUp={onKeyUp}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={e => {
          onChange(e);
        }}
      />
    </StyledInputWithLabel>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default InputWithLabel;
