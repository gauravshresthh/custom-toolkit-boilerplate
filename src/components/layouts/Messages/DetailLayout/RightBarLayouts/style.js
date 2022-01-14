import styled from 'styled-components';

export const PinnedContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #f0edf1;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 16px;
    color: #333333;
  }
`;

export const ImageWrapper = styled.span`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const DocContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .iconContainer {
    margin-right: 10px;
  }

  .text {
    color: #376af5;
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  .overlayContainer {
    position: relative;
    display: flex;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    border-radius: 4px;
    border: 0.4px solid #9c9c9c;
    width: 60px;
    height: 42px;
    object-fit: cover;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const UnpinButton = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  border: 0;
  outline: 0;
  color: #376af5;
  cursor: pointer;
`;

export const LowerContainer = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 7px;

  .iconContainer {
    width: 14px;
    height: 14px;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #666666;
    /* border: 2px solid green; */
    min-width: 180px;
    margin: 0 8px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.56);
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.span`
  color: white;
  font-weight: 500;
  font-size: 10px;
`;

export const TextContainer = styled.div`
  padding: 0 5px;
`;
