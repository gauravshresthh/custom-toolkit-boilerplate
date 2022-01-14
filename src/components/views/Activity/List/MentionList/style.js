import styled from 'styled-components';

export const CallBackButton = styled.button`
  padding: 0;
  margin-left: 60px;
  min-width: 74px;
  font-weight: 500;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  /* border: 1px solid #376af5; */

  span {
    color: #376af5;
    font-size: 13px;
    margin-left: 5px;
  }
`;

export const Container = styled.div`
  border: 1px solid #f0edf1;
  margin: 0 21px 0 20px;
  display: grid;
  grid-template-columns: ${({ unSeen }) =>
    unSeen == 1 ? '10px 31px 1fr' : '31px 1fr'};
  background-color: ${({ selected }) =>
    selected == 1 ? '#EFF3FF' : 'transparent'};
  padding: 18px 20px 13px ${({ unSeen }) => (unSeen == 1 ? '8px' : '20px')};
  grid-gap: 8px;
  cursor: pointer;
  /* width: 100%; */
  background: white;
  margin-bottom: 10px;
  border-radius: 2px;
  /* border: 1px solid green; */

  :hover {
    background: #f4f4f4;
    ${CallBackButton} {
      background: #f4f4f4;
    }
  }
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
  width: 38px;
  height: 38px;
  background: #e4ecff;
  overflow: hidden;
  background: #e4ecff;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Details = styled.div`
  /* border: 2px solid red; */
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: column;
  margin-left: 7px;
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
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  font-weight: ${({ unSeen }) => (unSeen ? '500' : '')};
`;

export const TextAndDateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  /* border: 2px solid green; */

  span {
    font-weight: 300;
    color: #666666;
  }
`;

export const SubText = styled.span`
  /* border: 2px solid green; */
  /* padding-left: 5px; */
  font-size: 13px;
  line-height: 14px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  /* border: 2px solid green; */
  font-size: 10px;
  line-height: 12px;
`;
