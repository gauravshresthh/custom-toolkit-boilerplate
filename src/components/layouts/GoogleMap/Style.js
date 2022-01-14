import styled from 'styled-components';

export const MapMarker = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -30px;
    left: -10px;
  }
`;

export const FullScreenBtn = styled.div`
  position: absolute;
  left: 20px;
  bottom:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 40px;
  height: 40px;
  z-index: 1;
  cursor: pointer;
  border-radius: 50%;
`;
