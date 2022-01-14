import styled from 'styled-components';

export const StyledDateComponent = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;

  .prev-icon,
  .next-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 25px;
  }

  .date-label {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #666666;
    margin-top: 4px;
  }

  .date-dropdown {
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666666;
    cursor: pointer;
    height: 100%;
  }

  .today-btn {
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid #376af5;
    color: #376af5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 80px;
  }

  .ml-auto {
    margin-left: auto;
  }
`;

export const CalenderWrapper = styled.div`{
  width: 300px;
}`;
