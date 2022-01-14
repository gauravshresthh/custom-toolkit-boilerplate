import React from 'react';
import PropTypes from 'prop-types';

import CommonIcons from '../../../assets/images/common/CommonIcons';

import { StyledAddParticipants } from './style';

const AddParticipants = ({ onClick }) => {
  return (
    <StyledAddParticipants onClick={onClick}>
      <div>
        <CommonIcons.CircledPlusIcon />
        <p className="text-center">Add Participants</p>
      </div>
    </StyledAddParticipants>
  );
};

AddParticipants.propTypes = {
  onClick: PropTypes.func,
};

export default AddParticipants;
