import styled from 'styled-components';

export const StyledThreadWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const StyledDirectThreadWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1px 0 !important;
  .participant-popover{
    gap:8px;
  }
  .ml-auto {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;
export const StyledGroupThreadWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1px 0 !important;
  .participant-popover{
    gap:10px !important;
  }
  .participant-names{
    color: #666;
    font-size: 12px;
    max-width: 600px;
  }
  .ml-auto {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;
