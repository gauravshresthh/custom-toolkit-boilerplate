import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 340px;
`;

export const Caption = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.541511px;
`;

export const Collection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding-bottom: 0;
  display: flex;
  width: ${props => props.isReplyContent ? '80px' : '160px'};
  height: ${props => props.isReplyContent ? '80px' : '113px'};
  overflow: hidden;
  border-radius: 6px;
  margin: 2px;
  cursor: pointer;

  :last-child:nth-child(odd) {
    flex-grow: 1;
    max-width: 100%;
  }

  img {
    /* border: 2px solid red; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.56);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.span`
  color: white;
  font-weight: 500;
  font-size: 24px;
`;
export const ImageWrapper = styled.span`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;
