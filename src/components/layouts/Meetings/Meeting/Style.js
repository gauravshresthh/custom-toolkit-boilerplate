import styled from 'styled-components';

export const StyledMeetingsLayout = styled.div`
  min-width: 300px;
  max-width: 300px;
  background: #F9FBFC;
  height: calc(100vh - 56px);

  .meeting-wrapper {
    .ant-collapse-header {
      padding: 0 20px;
    }
  }

  .title {
    padding: 20px;
    color: #333333;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .sub-title{
    margin-right: auto;
  }

  .w-100 {
    width: 100%;
  }

  .action {
    cursor: pointer;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
  }
`;

export const StyledCalenderLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
