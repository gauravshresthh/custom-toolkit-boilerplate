import styled from 'styled-components';

export const StyledSwitch = styled.div`
  display: inline-flex;

  .ant-switch {
    min-width: unset;
    width: 32px;
    height: 16.5px;
  }

  .ant-switch-checked {
    background: #376af5;

    .ant-switch-handle {
      left: calc(100% - 12px - 2px);
    }
  }

  .ant-switch-handle {
    width: 10px;
    height: 10px;
    top: 3.5px;
    left: 4px;
  }
`;
