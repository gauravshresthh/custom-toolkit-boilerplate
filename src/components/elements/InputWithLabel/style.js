import styled from 'styled-components';

export const StyledInputWithLabel = styled.div`
  width: 100%;

  label {
    display: block;
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
    width: 100%;
    outline: none;
    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }
`;

export const StyledInputWithIcon = styled.div`
  width: 100%;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  input {
    background: #ffffff;
    width: 100%;
    outline: none;
    padding: 0 10px;
    border: none;

    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }
`;

export const StyledPasswordInputField = styled.div`
  width: 100%;

  label {
    display: block;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
  }
  .input-wrapper {
    position: relative;
  }

  input {
    background: #ffffff;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 8px 12px;
    display: block;
    width: 100%;
    outline: none;
    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }
  .show-password-icon {
    position: absolute;
    top: 12px;
    right: 10px;
    cursor: pointer;
    display: flex;
  }
`;
