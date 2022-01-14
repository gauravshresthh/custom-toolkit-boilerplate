import styled from 'styled-components';

export const StyledDocView = styled.div`
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

  .close-icon {
    position: absolute;
    right: -7px;
    top: -11px;
    cursor: pointer;
  }

  .doc-name {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: #666666;
    height: 14px;
    overflow: hidden;
    font-size: 10px;
  }
`;
