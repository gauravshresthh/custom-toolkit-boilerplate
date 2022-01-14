import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox } from './style';

const Checkbox = ({ id, onChange, defaultChecked }) => {
  return (
    <StyledCheckbox>
      <input
        id={id}
        type="checkbox"
        onChange={e => {
          onChange(e.target.checked);
        }}
        checked={defaultChecked}
      />
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  id: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.any,
};

export default Checkbox;
