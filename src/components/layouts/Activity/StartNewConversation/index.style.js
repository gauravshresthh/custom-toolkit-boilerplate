import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid green; */
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #999999;
  margin-top: 12px;
`;

export const StartNowButton = styled.button`
  margin-top: 20px;
  background: #376af5;
  border-radius: 2px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  border: 0;
  outline: 0;
  color: #ffffff;
  cursor: pointer;
  letter-spacing: 1.1px;
  padding: 8px 20px;
`;
