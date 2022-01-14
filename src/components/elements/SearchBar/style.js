import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  background: #f4f4f4;
  border-radius: 4px;
  padding: 4px 10px;
  display: flex;
  align-items: center;

  input {
    width: calc(100%);
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: #9d9d9d;
      font-weight: 500;
      font-size: 14px;
    }
  }

  ${({ addCss }) => addCss}
`;
