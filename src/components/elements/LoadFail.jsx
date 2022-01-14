import React from 'react';

import CommonIcons from '../../assets/images/common/CommonIcons';

import { StyledDiv } from './style';

const LoadFail = ({ onCLick }) => {
  return (
    <StyledDiv>
      <CommonIcons.AnydoneLogo width="55" height="57" />
      <div className="text">Couldn't load the page.</div>
      <div className="try-again" onClick={onCLick}>
        {' '}
        Try Again
      </div>
    </StyledDiv>
  );
};

export default LoadFail;
