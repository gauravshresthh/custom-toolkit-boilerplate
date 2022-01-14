import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const Main = styled.div`
  padding: 15px 0 30px 0;
`;

export const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const UserContainer = styled.div`
  padding: 0 25px;
  margin: 5px 0 20px 0;
  display: block;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  height: 250px;
`;

export const List = styled.li`
  padding: 7.5px 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  label {
    width: 100%;
    cursor: pointer;
  }
`;

export const Hr = styled.div`
  border-top: 0.94px solid rgba(231, 231, 231, 1);
  width: 100%;
`;

export const ParticipantNameCSS = css`
  margin-bottom: 0;

  .name {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12.0249px;
    line-height: 14px;
    color: #333333;
    margin-left: 8px;
    .mute-icon {
      margin-left: 0px;
    }
  }

  .participant-wrap {
    margin-bottom: 0px;
  }
`;

export const SearchBarCSS = css`
  background-color: white;
  padding: 15px;
`;

export const ButtonContainer = styled.div`
  max-width: 110px;
  margin: 0 auto;
`;

export const ForwardContainer = styled.div`
  /* border: 2px solid red; */
  height: 250px;
  overflow-y: auto;
`;

export const ForwardList = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.5px 0;
  cursor: pointer;
`;

export const ListInner = styled.div`
  /* border: 2px solid green; */
  width: fit-content;
  display: flex;
  align-items: center;

  .image {
    /* border: 2px solid green; */
    position: relative;
  }

  .count {
    /* border: 2px solid green; */
    position: absolute;
    bottom: 0;
    right: -5px;
    padding: 0 4px;
    border-radius: 50%;
    background: white;
    color: rgb(55, 106, 245);
    font-size: 9px;
    font-weight: 400;
  }

  p {
    margin-left: 20px;
  }

  .inboxParticipant {
    white-space: nowrap;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
