import React from 'react';
import { Switch } from 'antd';

import { StyledSwitch } from './style';

const SwitchComponent = ({ checked, onChange, label, size, color }) => {
  return (
    <StyledSwitch onClick={onChange} color={color}>
      <Switch checked={checked} size={size || 'small'} />
      {label}
    </StyledSwitch>
  );
};

export default SwitchComponent;
