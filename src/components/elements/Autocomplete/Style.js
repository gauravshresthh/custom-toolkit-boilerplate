import styled from 'styled-components';

export const StyledAutocomplete = styled.div`
  width: 100%;

  input {
    background: #ffffff;
    border: none;
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

  .input-wrapper {
    display: flex;
    border: 1px solid #d2d2d2;
  }

  .input-btn-label {
    cursor: pointer;
    color: #376af5;
    width: 40px;
    display: flex;
    align-items: center;
  }
`;
