import React from 'react';
import Styled from 'styled-components';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import emptyProfile from '../../../../../assets/images/common/empty-profile.svg';

const StyledProfileCard = Styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 25px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 100%;
    
    .image{
        margin-bottom: 8px;
        border-radius:50%;
        overflow:hidden;
    }
    .name{
        color: #333333;
        font-size: 16px;
        line-height: 18.75px;
        font-weight: 500;
        margin-bottom: 4px;
    }
    .email,.phone{
        font-size: 14px;
        line-height: 16.41px;
        font-weight: 400;
        color:#666666;
        margin-bottom: 5px;
    }
    .phone{
        margin-bottom: 16px;
    }
    .actions{
        display: flex;
        .action-icon{
            cursor:pointer;
        }
        .chat{
            margin-right: 20px;
        }
    }

`;

const ProfileCard = ({
  isReplyContent,
  image,
  name,
  email,
  phone,
  onChatClick,
  onCallClick,
}) => {
  return (
    <StyledProfileCard isReplyContent={isReplyContent}>
      <div className="image">
        <img
          src={image || emptyProfile}
          alt={image || 'icon'}
          onError={e => (e.target.src = emptyProfile)}
          width="80px"
          height="80px"
        />
      </div>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
      <div className="actions">
        <div className="action-icon chat" onClick={onChatClick}>
          <CommonIcons.ChatIcon />
        </div>
        <div className="action-icon  call" onClick={onCallClick}>
          <CommonIcons.CallIcon />
        </div>
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;
