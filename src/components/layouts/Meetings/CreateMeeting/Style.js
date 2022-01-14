import styled from 'styled-components';

export const StyledCreateMeetingForm = styled.div`
  height: 100%;

  .input-field {
    background: #ffffff;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 8px 12px;
    display: block;
    width: 100%;
    outline: none;

    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }

  .w-80 {
    width: 80%;
  }

  .mb {
    margin-bottom: 20px;
  }

  .mr {
    margin-right: 20px;
  }
`;

export const MapIcon = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

export const StyledGuestLayout = styled.div`
  .mb {
    margin-bottom: 10px;
  }
`;

export const StyleGuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 180px);

  .guest {
    width: 60%;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  .close-icon {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AutoCompleteSuggestion = styled.div`
  padding: 4px 10px;
  width: 100%;
  cursor: pointer;

  :hover {
    background: #f0f0f0;
  }
`;

export const AllUser = styled.div`
  height: 40px;
  padding: 4px 18px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;

  :hover {
    background: #f0f0f0;
  }
`;

export const NewUser = styled.div`
  height: 40px;
  padding: 4px 18px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  :hover {
    background: #f0f0f0;
  }

  .add-btn {
    color: #376af5;
    margin-left: auto;
    cursor: pointer;
    padding: 0 5px;
    display: flex;
    align-items: center;
  }
`;
