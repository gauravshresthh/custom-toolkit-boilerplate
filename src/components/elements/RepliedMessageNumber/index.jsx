import React from 'react';
import PropTypes from 'prop-types';

import CommonIcons from '../../../assets/images/common/CommonIcons';

import { StyledRepliedMessageNumber } from './style';

const RepliedMessageNumber = ({ repliedNumber, setRightSideDetailType }) => {
  return (
    <StyledRepliedMessageNumber onClick={setRightSideDetailType}>
      <CommonIcons.RepliedIcon />
      <span>
        {repliedNumber} {repliedNumber > 1 ? 'Replies' : 'Reply'}
      </span>
    </StyledRepliedMessageNumber>
  );
};

RepliedMessageNumber.propTypes = {
  repliedNumber: PropTypes.number,
  setRightSideDetailType: PropTypes.func,
};

export default RepliedMessageNumber;
