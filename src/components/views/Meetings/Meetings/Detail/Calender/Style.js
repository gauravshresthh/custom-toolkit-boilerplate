import styled from 'styled-components';

export const StyleEvents = styled.div`
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  .event-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //height: 28px;
    flex-wrap: wrap;
    overflow: auto;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .event-wrapper::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .event-wrapper {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .event-content {
    display: flex;
    align-items: center;
    gap: 4px;
    max-width:250px;
    min-width:250px;
    min-height: 26px;
  }

  .join-now-btn {
    color: #376af5;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    min-width: 100px;
  }

  .event-time {
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 6px;

    .event-color {
      background: ${props => props.eventColor || '#376af5'};
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
`;

export const StylePopoverEventDetail = styled.div`
  width: 300px;
  background: #fff;
  border-top: 10px solid #376af5;

  .action-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;

    div {
      padding: 8px;
      cursor: pointer;
    }
  }

  .event-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    border-bottom: 1px solid #f0f0f0;
    justify-content: flex-start;
    align-items: flex-start;
    height: 330px;
  }

  .event-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .event-date {
    font-size: 12px;
    margin-bottom: 10px;
    color: #666;
  }

  .event-description {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }

  .data-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #666666;
    margin-bottom: 4px;

    .meeting-link {
      color: #376af5;
      cursor: pointer;
    }
  }

  .join-btn-wrapper {
    width: 100%;
    padding-top: 10px;
  }

  .event-bottom-wrapper {
    display: flex;
    align-items: center;
    color: #666666;
    padding: 20px;

    .button-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;

      div {
        padding-left: 12px;
        cursor: pointer;
      }
    }
  }
`;

export const StyleModalEventDetail = styled.div`
  width: 100%;
  background: #fff;
  border-top: 10px solid #376af5;

  .action-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;

    div {
      padding: 8px;
      cursor: pointer;
    }
  }

  .event-wrapper {
    display: flex;
    margin-top: 20px;
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-between;

    .event-div {
      width: 50%;
    }
  }

  .event-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-size: 16px;
    margin: 10px 15px;
  }

  .data-wrapper {
    display: flex;
    gap: 12px;
    color: #666666;
    margin-bottom: 10px;

    .meeting-link {
      color: #376af5;
      cursor: pointer;
    }
  }

  .join-btn-wrapper {
    color: #376af5;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 0;
  }

  .event-bottom-wrapper {
    display: flex;
    align-items: center;
    color: #666666;
    padding: 20px;
    border-top: 1px solid #f0f0f0;

    .button-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;

      div {
        padding-left: 12px;
        cursor: pointer;
      }
    }
  }

  .detail-wrapper {
    padding: 0 20px;
  }

  .guest-wrapper {
    border-left: 1px solid #f0f0f0;
    padding: 0 20px;

    .guest-title {
      display: flex;
      align-items: center;
      color: #666666;
      margin-bottom: 6px;

      .data-wrapper {
        margin-left: auto;
      }
    }

    .guest-list{
      height: 300px;
      overflow: auto;
    }
    .pt {
      padding-top: 10px;
    }
  }
`;

export const StyledCalender = styled.div`
  height: calc(100vh - 70px);
  padding: 0 20px;

  button {
    cursor: pointer;
  }

  .rbc-time-view .rbc-row, .rbc-month-header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rbc-month-row {
    overflow: inherit;
    z-index: 0;
  }

  .rbc-row-content {
    z-index: 0;
  }

  .rbc-time-header.rbc-overflowing {
    margin-right: 9px !important;
  }

  .rbc-header {
    display: flex;
    align-items: center;
    background: #fff;
    font-weight: 400;
    color: #666;
    height: 100%;

    span {
      padding-left: 5px;
      font-size: 16px;
    }
  }

  .rbc-today {
    color: #376af5;
    font-weight: 500;
  }

  //hide header part
  .rbc-allday-cell {
    display: none !important;
  }

  .rbc-events-container {
    display: flex !important;
    justify-content: space-between !important;
  }

  .rbc-day-slot .rbc-event {
    overflow: inherit;
  }

  .rbc-day-slot .rbc-events-container {
    margin-right: 0;
  }

  .rbc-event-label {
    display: none;
  }

  .rbc-label {
    color: #666;
  }

  .rbc-time-content {
    border-top: none;
  }

  .rbc-time-content::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */

  .rbc-time-content::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */

  .rbc-time-content::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */

  .rbc-time-content::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  .rbc-timeslot-group {
    background: #fff;
    min-height: 60px;
  }

  //line to indicate current time
  .rbc-current-time-indicator {
    background-color: #376af5;
    height: 2px;
  }

  //show more popup
  //div.rbc-overlay{
  //  transform: translate(640px, 330px) !important;
  //}
`;
