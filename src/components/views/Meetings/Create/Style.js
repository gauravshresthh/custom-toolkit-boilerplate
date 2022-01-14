import styled from 'styled-components';

export const StyledAttachment = styled.div`
  .title {
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
  }

  .btn {
    color: #376af5;
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .attachment-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const StyledDate = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;

  .w-100 {
    width: 100%;
  }

  .w-70 {
    width: 70%;
  }

  .title {
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
  }

  .to-div {
    max-width: 20px;
    min-width: 20px;
  }

  .mb {
    margin-bottom: 10px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .ant-picker-suffix {
    display: flex !important;
  }
`;

export const DateSwitch = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const StyledCustomRepeatation = styled.div`
  input {
    background: #ffffff;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 8px 12px;
    display: block;
    width: 80px;
    margin-right: 15px;
    outline: none;

    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }

  .repeat {
    margin: 10px 0 15px 0;
  }

  .week-radio-btn-wrapper {
    display: flex;
    gap: 10px;
    margin: 10px 0;
  }

  .radio-btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 10px;
  }

  .radio-btn {
    display: flex;
    align-items: center;
    height: 32px;

    input {
      height: 28px;
    }
  }

  .radio-btn-field {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  .btn-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .month-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 0 10px;
    cursor: pointer;
    margin: 10px 0;
  }
`;

export const WeekRadioBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #376af5;
  color: ${props => props.isActive ? '#fff' : '#376af5'};
  background: ${props => !props.isActive ? '#fff' : '#376af5'};
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
`;

export const StyledRepeatation = styled.div`
  .title {
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
  }

  .repeation-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 0 10px;
    cursor: pointer;
  }
`;

export const StyledNotifyMe = styled.div`
  .title {
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
  }

  input {
    background: #ffffff;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 8px 12px;
    display: block;
    width: 80px;
    margin-right: 20px;
    outline: none;

    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;

  .ml {
    margin-left: 20px;
  }
`;
