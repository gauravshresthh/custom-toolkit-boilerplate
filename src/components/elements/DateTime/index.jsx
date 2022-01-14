import React from 'react';
import PropTypes from 'prop-types';

import CommonIcons from '../../../assets/images/common/CommonIcons';

import { StyledDateTime } from './style';

const DateTime = ({ dateTime }) => {
  return (
    <StyledDateTime>
      <p>
        <CommonIcons.DateTimeCalander />
      </p>
      <p className="date-time">{dateTime}</p>
    </StyledDateTime>
  );
};

DateTime.propTypes = {
  dateTime: PropTypes.string,
};

export default DateTime;
