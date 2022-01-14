import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid yellow; */
  height: 100%;
  padding: 28px;
  /* display: flex; */
  /* flex-direction: column; */
`;

export const HeaderWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  /* display: flex; */
  /* flex-direction: row; */
  /* flex: 1; */
`;

export const HeaderText = styled.span`
  /* border: 2px solid red; */
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;

export const IconWrapper = styled.p`
  width: 50px;
  height: 50px;
  background: #e4ecff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  /* border: 2px solid green; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
  margin-top: 14px;
`;

export const Message = styled.p`
  /* border: 2px solid green; */
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #666666;
  margin-top: 34px;
`;

export const DetailsList = styled.div`
  /* border: 2px solid green; */
  margin-top: 30px;
`;

export const Li = styled.li`
  list-style: none;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  margin: 8px 0;
`;

export const EventButton = styled.button`
  padding: 8px 22px;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  outline: 0;
  border: 0;
  background: #376af5;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 23px;
`;
