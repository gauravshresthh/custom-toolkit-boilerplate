import styled from 'styled-components';

export const StyledCancelButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 16px;
  line-height: 18.75px;
  color: #9c9c9c;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 36px;
  border: 1px solid #b4b4b4;
  outline: none;
  border-radius: ${({ brRadius }) => brRadius};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
  }
  .small-btn {
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;
