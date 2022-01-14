import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: ${props => props.font || '16px'};
  margin: ${props => props.margin || '0'};
  line-height: 1.18;
  color: ${props => props.color || '#999999'};
  font-weight: 400;
  letter-spacing: 0.01em;
`;
