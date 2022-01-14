import styled from 'styled-components';

export const AudioRecordStyle = styled.div`
  .action-button{
    background: none;
    border: none;
    cursor: pointer;    
  }
  .video-modal {
    display: flex;
    justify-content: center;    
    position: relative;
  }
  .start-record-icon{
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    z-index: 100;
  }
  .footer{
    padding: 10px 0px 0px 0px;
    display: flex;    
  }
  .footer-btn{
    background: none;
    border: none;
    margin-left: auto;
    cursor: pointer;
  }
  .popup-element{
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
  }

  .popup-element:focus{
    background: #eee;
  }

  .popup-element>div{
    flex: 1;    
  }

  .popup-element>div:nth-child(2){
    text-align: right;
  }

  .popup-inner-element{
    display: flex;
    justify-content: space-between;
  }
  
  .setting-btn{
    border: none;
    color: #376AF5;
    background: none;
    cursor: pointer;
  }

  .pop-up-child-btn{
    border: none;
    background: none;
    cursor: pointer;
  }

`;