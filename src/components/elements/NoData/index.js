import React from 'react';

import { Container, ErrorText } from './style';

import NoDataIcon from '../../../assets/images/common/noDataIcon.svg';

function Index({ errorMsg = 'No Data' }) {
  return (
    <Container>
      <img src={NoDataIcon} alt="no data icon" />
      <ErrorText>{errorMsg}</ErrorText>
    </Container>
  );
}

export default Index;
