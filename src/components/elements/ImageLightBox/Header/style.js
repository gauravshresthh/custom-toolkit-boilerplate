import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.49);
  padding: 20px 40px;
  cursor: default;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ showHeader }) =>
    showHeader ? 'flex-end' : 'space-between'};
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const ParticipantWrapper = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
  }

  span {
    margin-left: 20px;
    color: white;
    text-transform: capitalize;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  /* border: 2px solid green; */
`;

export const InnerOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 30px;
  margin-right: 45px;
  /* border: 2px solid red; */
`;

export const IconButton = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

export const ParticipantCss = css`
  margin-bottom: 0;

  .name {
    color: white;
    font-size: 16px;
    line-height: 19px;
    margin-left: 11px;
  }
`;

export const OptionsWrapper = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 0px 6px 2px rgba(102, 102, 102, 0.1);
  padding: 6px 10px;
`;

export const Options = styled.div`
  /* border: 2px solid red; */
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    margin-left: 12px;
    width: 100%;
    color: #666666;
    /* border: 2px solid green; */
  }
`;

export const IconWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
