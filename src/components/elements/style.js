import styled from 'styled-components';

export const StyledConfirmationModal = styled.div`
  .modal-content {
    color: #666;
  }

  .confirmation-action {
    margin: 20px 0 4px auto;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 70%;
  }
`;

export const StyledDiv = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text {
    color: #666;
    margin: 4px 0;
    font-size: 16px;
  }

  .try-again {
    color: #376af5;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Style = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || '6px'};
  font-size: ${props => props.textSize || '12px'};
  font-size: ${props => props.textColor || '#666'};

  .data {
    justify-content: center;
    flex-direction: column;

    .email-style {
      font-size: ${props => props.emailSize || '12px'};
      font-size: ${props => props.emailColor || '#666'};
    }
  }
`;

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.color || '#666'};
  cursor: pointer;
  width: fit-content;
`;
