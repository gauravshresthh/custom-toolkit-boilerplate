import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
