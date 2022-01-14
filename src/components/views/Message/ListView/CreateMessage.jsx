import React from 'react';
import Styled from 'styled-components';
import { Tooltip } from 'antd';
import CreateIcon from '../../../../assets/images/messages/create-msg-icon.svg';
import history from '../../../../utils/history';

const StyledCreateMessage = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #F0EDF1;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  .message-title{
    font-size: 16px;
    color: #333333;
    line-height: 18.75px;
    font-weight: 500;
  }
  .create-icon{
    cursor:pointer;
  }
`;

const MessageHamburgerMenuWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function CreateMessage() {
  return (
    <StyledCreateMessage>
      <p className="message-title">Messages</p>
      <MessageHamburgerMenuWrapper>
        <Tooltip title="Compose">
          <div
            className="create-icon"
            onClick={() => history.push('/messages/1/compose')}
          >
            <img src={CreateIcon} alt="" />
          </div>
        </Tooltip>
        {/* <AlignRightOutlined /> */}
      </MessageHamburgerMenuWrapper>
    </StyledCreateMessage>
  );
}

export default CreateMessage;
