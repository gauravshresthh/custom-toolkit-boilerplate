import React from 'react';
import { StyledProjectSwitch } from './Style';
import SwitchComponent from '../../../../elements/Switch';
import DotDiv from '../../../../elements/DotDiv';

export default function ProjectsSwitch({ name, isEnable, color }) {
  return (
    <StyledProjectSwitch>
      {name}
      <DotDiv size='10px' color={color || '#376af5'} />
      <div className='ml-auto'>
        <SwitchComponent checked={isEnable} />
      </div>
    </StyledProjectSwitch>
  );
}
