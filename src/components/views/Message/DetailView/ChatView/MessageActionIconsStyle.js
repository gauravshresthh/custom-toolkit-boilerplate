import styled from 'styled-components';

export const StyledMessageActionIcons = styled.div`
  position: absolute;
  top: 0;
  right: ${props => !props.isMyMsg && '-160px'};
  left: ${props =>
    props.isMyMsg ? (props.msgDeliveryFail ? '-45px' : '-160px') : null};
  background: transparent;
  height: 100%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: flex-start;

  .msg-actions {
    display: flex;
    flex-direction: ${({ isMyMsg }) => (isMyMsg ? 'row-reverse' : 'row')};
    align-items: center;
    background: #ffffff;
    padding: 4px 5px;
    border-radius: 4px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .action-icon {
    padding: 4px 10px;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #f0f0f0;
    }

    position: relative;
  }

  .emojiFakeWrapper {
    position: absolute;
    top: -50px;
    width: 200px;
    height: 50px;
  }

  .emojiContainer {
    width: 200px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: 99;
    background: #ffffff;
    box-shadow: 0px 0px 6px 2px rgba(102, 102, 102, 0.1);
    border-radius: 20px;
    padding: 10px 14px;
    user-select: none;

    button {
      border-radius: 50%;
      background: transparent;
      border: 0;
      outline: 0;
      padding: 0;
      transform: scale(0.9);
      margin-right: 8px;
      cursor: pointer;
    }

    button:hover {
      /* background: #dfdfdf; */
      transform: scale(1.5);
      transition: 0.2s ease-in;
    }

    .emojiCollection {
      padding: 5px;
      z-index: 999;
    }
  }
`;

export const ClickMoreContentWrapper = styled.div`
  /* border: 2px solid green; */
  border-radius: 2px;
  box-shadow: 0px 0px 6px 2px rgba(102, 102, 102, 0.1);
  background: white;
  padding: 0px 0px 0px 0px;
  z-index: 10;
`;

export const OptionItem = styled.p`
  /* border: 2px solid red; */
  cursor: pointer;
  user-select: none;
  padding: 5px 12px 5px 12px;

  span {
    font-size: 13px;
    line-height: 15px;
    color: #666666;
    margin-left: 13px;
  }

  :hover {
    background: #f0f0f0;
  }
`;
