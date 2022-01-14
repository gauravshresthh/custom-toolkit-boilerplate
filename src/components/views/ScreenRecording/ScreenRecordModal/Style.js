import styled from 'styled-components';

const ScreenRecordStyle = styled.div`
  .recordTitle {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 5px;
  }

  .screenRecordInput {
    height: 38px;
    width: 100%;
    margin-bottom: 10px;
    border: 0.711111px solid #d2d2d2;
    border-radius: 2px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
  }

  .screen-checkbox-block {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .screen-checkbox {
    margin-right: 10px;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  .screen-record-footer {
    display: flex;    
    margin-top: 15px;
  }

  .left, .right{
    flex: 1;
  }

  .flex-end{
    display: flex;
    justify-content: flex-end;
  }

  .switch{
    display: flex;
    align-items: center;
    padding: 5px 0;
  }

  .switch>span{
    padding: 0 10px;
  }

  #localVideo{
    width: 100%;
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

  .setting-popup-container{

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
`;

export default ScreenRecordStyle;
