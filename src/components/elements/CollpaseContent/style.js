import styled from 'styled-components';

export const StyledCollapseContent = styled.div`
  margin: ${props => props.margin || '0px'};
  width: 100%;
  .ant-collapse {
    .ant-collapse-header {
      display: flex;
      align-items: center;
      padding: 0 0px;
      font-size: 16px;
      color: #666666;
      .ant-collapse-arrow {
        vertical-align: middle;
        svg {
          fill: ${props => props.arrowColor || '#666666'};
        }
      }
    }

    .ant-collapse-content-box {
      padding: 10px 0 0 0 !important;
    }
  }
`;
