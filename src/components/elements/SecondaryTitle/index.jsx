import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './style';

const SecondaryTitle = ({ title, font, margin }) => {
  return (
    <StyledTitle font={font} margin={margin}>
      {title}
    </StyledTitle>
  );
};

SecondaryTitle.propTypes = {
  title: PropTypes.string,
  font: PropTypes.string,
  margin: PropTypes.string,
};

export default SecondaryTitle;
