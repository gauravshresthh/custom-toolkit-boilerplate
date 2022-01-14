import styled from 'styled-components';

export const PinContainer = styled.div`
  border-bottom: 1px solid #376af5;
  height: 37px;
  color: #376af5;
  display: flex;
  flex-direction: row;
  align-items: center;

  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 18px;
    width: 100%;
    cursor: pointer;

    span {
      margin-right: 10px;
    }
  }
`;

export const StyledInboxIndividualTopBar = styled.div`
  position: relative;
  .topbar {
    display: grid;
    grid-template-columns: 1fr minmax(100px, auto);
    grid-auto-columns: auto;
    grid-gap: 50px;
    padding: 20px;
    border-bottom: 1px solid #f0edf1;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    .name {
      font-size: 18px;
      line-height: 1.17;
      color: #376af5;
      font-weight: 500;
      .name-field{
        cursor: pointer;
        width:fit-content;
        :hover{
          background: #f0f0f0;
        }
      }
      .edit-name{
        border: none;
        color:#666;
        background: #f0f0f0;
        width:fit-content;
      }
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: end;
    }
    .action-icons {
      cursor: pointer;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .mqtt-status{
    background: #efefef;
    font-size: 14px;
    text-align: center;
    padding: 4px;
    font-style: normal;
    line-height: 15px;
    color: #de4132;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`;
