import React from 'react';
import PropTypes from 'prop-types';

import { StyledText } from './style';

const DescriptionText = ({ text, font, margin, color }) => {
  return (
    <StyledText font={font} margin={margin} color={color}>
      {text}
    </StyledText>
  );
};

DescriptionText.propTypes = {
  text: PropTypes.string,
  font: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
};

export default DescriptionText;
