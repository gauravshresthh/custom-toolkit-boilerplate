import React from 'react';
import { Switch } from 'antd';

import { StyledSwitch } from './style';

const ToggleSwitch = ({ onChange, checked }) => {
  return (
    <StyledSwitch>
      <Switch
        checked={checked}
        onChange={checked => {
          onChange(checked);
        }}
      />
    </StyledSwitch>
  );
};

export default ToggleSwitch;
