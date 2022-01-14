import styled from 'styled-components';

export const StyledCustomPopover = styled.div`
  width: 100%;
  position: relative;
  .popover-content-wrapper {
    position: absolute;
    max-height: ${props => props.popoverMaxHeight || '200px'};
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 17%);
    border-radius: 5px;
    width: 100%;
    z-index: 2;

    .popover-content {
      padding: 4px 10px;
      cursor: pointer;
      align-items:center;
      width: 100%;
      gap:6px;
      :hover {
        background: #f0f0f0;
      }
    }
  }
`;
