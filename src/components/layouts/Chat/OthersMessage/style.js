import styled from 'styled-components';

export const StyledOtherMessage = styled.div`
  width: ${props => (props.isReplyContent ? '100%' : '60%')};
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;

  .message-content {
    width: fit-content;
    min-width: ${({ isReplyContent }) =>
      isReplyContent ? '220px' : 'fit-content'};
    position: relative;
    background: #f0f0f0;
    border-radius: 6px;
    padding: 8px 12px;
    color: #525252;

    .name {
      color: #376af5;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .time {
      font-size: 10px;
      line-height: 1.8;
      margin-top: 2px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .resend-icon {
    display: flex;
    align-items: center;
    padding-left: 6px;
    cursor: pointer;
  }

  .message-content > html body {
    background: inherit !important;
    color: inherit !important;
  }

  .sent-status {
    color: #666;
    font-size: 12px;
    display: none;
  }

  .not-delivered {
    display: flex;
    gap: 4px;
    color: #de4132;
    font-size: 11px;
    margin-top: 4px;
  }
`;

export const MarginLeft = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const ReactionContainer = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 6px;
  display: ${({ visible }) => (visible.length > 0 ? 'flex' : 'none')};
`;

export const EmojiWrapper = styled.div`
  border: ${({ isMyReaction }) => (isMyReaction ? '0.4px solid #376AF5' : '')};
  background: #ffffff;
  box-shadow: 0px 0px 6px 2px rgba(102, 102, 102, 0.1);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 23px;
  margin: 4px;

  .icon {
    /* margin-right: 3px; */
    transform: scale(0.9);
  }

  .count {
    font-size: 10px;
    line-height: 12px;
    color: #666666;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  .onlyYou {
    font-size: 11px;
    line-height: 13px;
    color: #376af5;
    margin-right: 20px;
  }
`;
