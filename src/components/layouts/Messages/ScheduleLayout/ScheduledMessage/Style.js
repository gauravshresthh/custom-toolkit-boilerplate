import styled from 'styled-components';

export const StyledScheduledMessageContent = styled.div`
  font-size: 15px;
  color: #333;
  margin-bottom: 4px;
  display: flex;

  .icon-wrapper {
    margin-right: 4px;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 4px;

  .img-wrapper {
    position: relative;
    cursor: pointer;
    width: 85px;
    height: 60px;

    .ant-image .ant-image-img {
      height: 100% !important;
    }
  }

  .img-count {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    background: #333333;
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

export const StyledFile = styled.div`
  cursor: pointer;
  .icon-wrapper {
    margin: 4px 8px 4px 0;
  }

  .doc-name {
    color: #376af5;
    align-items: center;
    width: 260px;
  }
`;
