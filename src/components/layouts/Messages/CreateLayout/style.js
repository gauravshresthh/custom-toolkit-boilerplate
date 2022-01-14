import styled, { css } from 'styled-components';

export const StyledParticipantWrapper = css`
  .participant-wrap {
    margin-bottom: 0;
  }
`;
export const StyledCreateMessageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .title {
    color: #333;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
    height: 62px;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .label {
    color: #666;
    font-weight: 500;
  }

  input {
    min-width: 310px;
    border: none;

    :focus {
      outline: none;
    }
  }

  .create-msg-input {
    padding: 0 30px;
    border-bottom: 1px solid #f0f0f0;
    height: 52px;
    width: 100%;
  }

  .participants-wrapper {
    border-bottom: 1px solid #f0f0f0;
    padding: 16px 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;

    .participant-tags {
      font-size: 12px;
      border-radius: 2px;
      background: #f0f0f0;
      height: 32px;
      padding: 2px 6px;
      display: flex;
      align-items: center;
      gap: 4px;

      .close-icon {
        cursor: pointer;
      }
    }
  }
  .image {
    position: relative;
    .count {
      position: absolute;
      right: -2px;
      bottom: 0;
      background: #ffffff;
      font-size: 8px;
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #376af5;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 30px;
  }
  .switch-wrapper {
    margin-left: auto;
  }
`;
