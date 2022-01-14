import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
`;

export const Caption = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.541511px;
`;

export const ImgContainer = styled.div`
  margin: 10px 0;
  padding-bottom: 0;
  overflow: hidden;
  display: flex;
  min-height: 100px;
  min-width: 150px;
  border-radius: 6px;
  position: relative;
  /* border: 2px solid green; */
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
`;
