import styled from 'styled-components';

export const StyledImageView = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 6px;
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;

  .close-icon {
    position: absolute;
    right: -7px;
    top: -11px;
    cursor: pointer;
  }
`;
