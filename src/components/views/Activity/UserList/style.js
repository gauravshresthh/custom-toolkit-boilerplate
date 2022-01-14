import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid green; */
  display: grid;
  grid-template-columns: ${({ unread }) =>
    unread == 1 ? '10px 36px 1fr' : '36px 1fr'};
  background-color: ${({ selected }) =>
    selected == 1 ? '#EFF3FF' : 'transparent'};
  padding: 18px 20px 13px ${({ unread }) => (unread == 1 ? '8px' : '20px')};
  grid-gap: 8px;
  cursor: pointer;
`;

export const UnreadIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  /* border: 2px solid green; */

  span {
    width: 8px;
    height: 8px;
    background: #376af5;
    border-radius: 50%;
  }
  /* border: 2px solid green; */
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
  display: flex;
  flex-direction: row;
`;

export const SubIconWrapper = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: center;
  align-items: stretch;
  /* width: 30px; */
  /* height: 24px; */
`;

// switch this between span or p to see wierd changes
export const Text = styled.p`
  /* border: 2px solid green; */
  width: 100%;
  /* max-width: 170px; */
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  font-weight: ${({ unSeen }) => (unSeen ? '500' : '')};
`;

export const TextAndDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;

  span {
    font-weight: 300;
    color: #666666;
  }
`;

export const SubText = styled.span`
  /* border: 2px solid green; */
  padding-left: 5px;
  font-size: 13px;
  line-height: 14px;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  /* border: 2px solid green; */
  font-size: 10px;
  line-height: 12px;
`;
