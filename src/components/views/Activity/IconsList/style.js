import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid green; */
  display: grid;
  grid-template-columns: 36px 1fr;
  background-color: ${({ selected }) =>
    selected == 1 ? '#EFF3FF' : 'transparent'};
  padding: 18px 20px 13px 20px;
  grid-gap: 8px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100%;
  height: 36px;
  background: #e4ecff;
`;

export const Details = styled.div`
  /* border: 2px solid green; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const TopDetails = styled.div`
  /* border: 2px solid green; */
  width: 100%;
`;

// switch this between span or p to see wierd changes
export const Text = styled.span`
  /* border: 2px solid green; */
  width: 100%;
  max-width: 170px;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
`;

export const TimeAndDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;

  span {
    font-weight: 300;
    color: #666666;
  }
`;

export const Time = styled.span`
  /* border: 2px solid green; */
  font-size: 12px;
  line-height: 14px;
`;

export const Date = styled.span`
  /* border: 2px solid green; */
  font-size: 10px;
  line-height: 12px;
`;
