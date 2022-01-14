import styled from 'styled-components';

const ScreenRecordStyle = styled.div`
  .record-screen-wrapper {
    position: fixed;
    z-index: 1000;
    bottom: 60px;
    left: 0;
    right: 0;
    margin: auto;
    background: gray;
    width: 50%;
    display: flex;
    box-shadow: 2px 2px 4px #888;
    background: #fff;
    z-index: 1000;
  }

  .left-screen {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .right-screen {
    flex: 1;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .rec {
    display: flex;
    align-items: center;
    border: 1px solid red;
    padding: 0 5px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
    display: inline-block;
    margin: 5px;
  }

  .time-elapsed {
    padding: 0 10px;
  }

  .cancel-btn {
    padding: 2px 10px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .stop-rec-btn {
    background: blue;
    color: #fff;
    padding: 2px 10px;
    border: none;
    outline: none;
    cursor: pointer;
    min-width: 130px;
  }
`;

export default ScreenRecordStyle;
