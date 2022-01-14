import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  padding: 0 33px 0 21px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  /* border: 2px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightWrapper = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 20px; */
`;

export const IconWrapper = styled.span`
  /* border: 2px solid green; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const OptionWrapper = styled.span`
  /* border: 2px solid green; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterContainer = styled.div`
  width: 150px;
  height: 100%;
  background: #ffffff;
  /* border: 0.4px solid #9c9c9c; */
  /* margin: 0.5px; */
  border-radius: 2px;
`;

export const FilterList = styled.p`
  padding: 10px 12px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#e4ecff' : '')};

  &:hover {
    background: #f9fbfc;
  }

  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      margin-left: 10px;
      font-size: 13px;
      line-height: 15px;
      color: #666666;
    }
  }
`;

export const PopoverCss = css`
  /* border: 2px solid red; */
  /* margin-top: 120px; */
  /* margin-right: 200px; */
  /* left: 345px; */
  .ant-popover {
    border: 2px solid green !important;
    .ant-popover-placement-right {
      border: 2px solid green !important;
      left: 345px !important;
    }
  }
`;
