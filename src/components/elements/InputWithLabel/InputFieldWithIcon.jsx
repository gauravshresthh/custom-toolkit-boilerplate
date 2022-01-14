import React from 'react';
import PropTypes from 'prop-types';

import { StyledInputWithIcon } from './style';

const InputWithIcon = ({
  icon,
  placeholder,
  type,
  value,
  onChange,
  onKeyUp,
  onFocus,
}) => {
  return (
    <StyledInputWithIcon>
      {icon}
      <input
        onKeyUp={onKeyUp}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={e => {
          onChange(e);
        }}
        onFocus={onFocus}
      />
    </StyledInputWithIcon>
  );
};

InputWithIcon.propTypes = {
  icon: PropTypes.any,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
};

export default InputWithIcon;
