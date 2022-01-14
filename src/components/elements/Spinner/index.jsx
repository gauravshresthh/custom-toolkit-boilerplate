import React from 'react';
import loader_gif from '../../../assets/images/common/loader.gif';

const OutlinedSpinner = ({ spinnerStyle, width }) => {
  return <div  style={spinnerStyle}>
    <img src={loader_gif} width={width || '30px'} height={width || '30px'} alt='loader' />
  </div>;
};

export default OutlinedSpinner;
