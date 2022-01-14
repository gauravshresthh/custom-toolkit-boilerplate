import styled from 'styled-components';

export const StyledTitle = styled.h3`
  font-size: ${props => props.font || '14px'};
  margin: ${props => props.margin || '0px'};
  line-height: 1.15;
  color: #333333;
  letter-spacing: 0.01em;
`;
