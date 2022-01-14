import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.disabled ? 'rgb(132, 148, 247)' : '#376af5')};
  font-size: 16px;
  line-height: 18.75px;
  color: #ffffff;
  padding: 0 10px;
  box-sizing: border-box;
  height: 36px;
  border: ${props =>
    props.disabled ? '1px solid rgb(132, 148, 247)' : '1px solid #376af5'};
  outline: none;
  border-radius: ${({ brRadius }) => brRadius};
  width: ${props => props.width || '100%'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: 0.5s;

  &:hover {
    background: ${props =>
      props.disabled ? 'rgb(132, 148, 247)' : ' #1927d1'};
    color: #ffffff;
    transition: 0.5s;
  }
`;
