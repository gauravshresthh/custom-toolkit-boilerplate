import styled from 'styled-components';

export const Container = styled.div`
  .participant-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .edit-icon {
    margin-right: 15px;
  }

  ${({ extraCss }) => extraCss}
`;

export const InnerWrap = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: row;
  align-items: center;

  .name {
    font-size: ${props => props.nameSize || '12px'};
    line-height: 1.17;
    color: #666666;
    font-weight: 400;
    margin-left: 6px;

    .mute-icon {
      margin-left: 0px;
    }
  }

  .role {
    background: #efefef;
    font-size: 8px;
    color: #666666;

    padding: 6px 10px;
    border-radius: 10px;
    margin-left: 12px;
    line-height: 1.1;
    text-transform: uppercase;
    font-weight: 400;
  }
`;

export const StyledParticipantActions = styled.div`
  .action {
    padding: 6px 12px;
    font-size: 13px;
    color: #666666;
    cursor: pointer;

    &:hover {
      background: #f8f8f8;
    }
  }
`;
