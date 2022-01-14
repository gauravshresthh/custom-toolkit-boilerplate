import styled from 'styled-components';

const ShareRecordsStyle = styled.div`
  .video-modal {
    display: flex;
    justify-content: center;
  }
  .search-records-wrapper {
    background: #f6f6f6;
    border-radius: 5px;
    display: flex;
    width: 100%;
    margin: 0 12px;
  }
  .search-records {
    border: none;
    background: inherit;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 0 10px;
  }
  input:focus {
    outline: none;
  }
  .video-title {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #666666;
  }
  .video-details {
    margin: 15px 13px;
  }

  .video-title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .date-time {
    color: #666666;
  }
  .record-user {
    display: flex;
    align-items: center;
  }

  .user-icon {
    width: 13px;
    height: 14px;
  }

  .search-records-wrapper {
    background: #f6f6f6;
    border-radius: 5px;
    display: flex;
    width: 100%;
  }
  .search-records {
    border: none;
    background: inherit;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 0 10px;
  }
  input:focus {
    outline: none;
  }
  .video-modal {
    display: flex;
    justify-content: center;
  }
  
  .screen-records-list {
    min-height: 400px;
    max-height: 570px;
    overflow-y: auto;
    position: relative;
    margin-top: 1.5rem;
  }
  
  .screen-records-list::-webkit-scrollbar {
    display: none;
  }
  
  .menu-icon {
    position: relative;
  }
  
  .menu-icon:focus,
  .menu-icon:hover {
    background-color: #f0f0f0;
  }
  
  .records-popover {
    background: #fff;
    box-shadow: 0px 0px 15px rgb(189 189 189 / 30%);
    min-width: 100px;
    padding: 2px 0;
    margin-top: -10px;
    border: 1px solid #e6e6e6;
    position: absolute;
    right: 5px;
    top: 20px;
  }
  
  .record-options {
    padding: 6px 12px;
    cursor: pointer;
    color: #666;
  }
  
  .record-options:hover {
    background-color: #f5f5f5;
  }
  
  .no-video {
    margin: 0 auto;
    font-size: 16px;
  }
  
  .send-video-message {
    display: flex;
    justify-content: space-between;
  }
  
  .send-video-icon {
    cursor: pointer;
  }
  
  .video-details {
    background-color: #fafafa;
    margin: 0 13px 15px 13px !important;
    padding: 15px 10px;
  }
  
  .no-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .no-data-icon {
    width: 120px;
  }
  
  .no-data-txt {
    color: #9c9c9c;
    font-size: 14px;
  }
  
  .mt-2{
    margin-top: .5rem!important;
  }

  .mr-2{
    margin-right: .5rem!important;
  }
`;

export default ShareRecordsStyle;
