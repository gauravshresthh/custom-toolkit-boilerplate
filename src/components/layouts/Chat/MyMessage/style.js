import styled from 'styled-components';

export const StyledMyMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 4px;

  .message-content {
    position: relative;
    background: #376af5;
    border-radius: 6px;
    padding: 8px 12px;
    color: #ffffff;

    .time {
      font-size: 10px;
      line-height: 1.8;
      margin-top: 2px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .message-content > html body {
    background: inherit !important;
    color: inherit !important;
  }
  .not-delivered {
    display: flex;
    gap: 4px;
    color: #de4132;
    font-size: 11px;
  }
  .sent-status {
    color: #666;
    font-size: 12px;
  }
`;

export const MessageWrapper = styled.div`
  max-width: 60%;
  .resend-icon {
    display: flex;
    align-items: center;
    margin-right: 4px;
    width: 20px;
    svg {
      cursor: pointer;
    }
  }
`;

export const ReactionContainer = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 6px;
  display: ${({ visible }) => (visible.length > 0 ? 'flex' : 'none')};
`;

export const EmojiWrapper = styled.div`
  border: ${({ isMyReaction }) => (isMyReaction ? '0.4px solid #376AF5' : '')};
  background: #ffffff;
  box-shadow: 0px 0px 6px 2px rgba(102, 102, 102, 0.1);
  border-radius: 20px;
  cursor: ${({ isMyReaction }) => (isMyReaction ? 'pointer' : 'default')};
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
