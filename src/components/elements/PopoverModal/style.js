import styled from 'styled-components';

export const StyledPopoverContent = styled.div`
  min-width: ${props => props.contentWidth || '200px'};
  margin-top: ${props => props.contentTopMargin || '0px'};
  margin-bottom: ${props => props.contentBottomMargin || '10px'};
  box-shadow: ${props =>
    props.transparentBackground ? 'none' : '0 0 5px rgb(0 0 0 / 17%)'};
  background: ${props =>
    props.transparentBackground ? 'transparent !important' : '#fff'};
  border-radius: 5px;
  max-height: ${props => props.maxHeight || '255px'};

  .popover-item {
    div {
      padding: 4px 8px;
      cursor: pointer;
      color: #666;

      :hover {
        background: #f0f0f0;
      }
    }
  }

  ${({ addCSS }) => addCSS}
`;
