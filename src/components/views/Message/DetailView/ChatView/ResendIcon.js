import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { MessageIcon } from '../../../../../assets/images/messages/MessageIcon';

const StyledResendIcon = Styled.div`
  position:absolute;
  cursor:pointer;
      left: -20px;
    display: flex;
    align-items: center;
    height: 100%;
    top: 0;
`;

const ResendIcon = ({ onClick }) => {
  return (
    <StyledResendIcon onClick={onClick}>
      <MessageIcon.ResendIcon />
    </StyledResendIcon>
  );
};

ResendIcon.propTypes = {
  onClick: PropTypes.func,
};

export default ResendIcon;
