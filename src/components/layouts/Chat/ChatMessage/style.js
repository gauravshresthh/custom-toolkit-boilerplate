import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 7px;
  background: #376af5;
  max-width: 290px;
  padding: 8px 12px;
  display: flex;
  cursor: pointer;
`;

export const Link = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-align: left;

  * {
    color: inherit !important;
  }

  a {
    text-decoration: underline;
  }
`;

export const ImgContainer = styled.div`
  border-radius: 7px;
  margin: 5px 0;
  overflow: hidden;
  width: 100%;
  max-height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    backface-visibility: hidden;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 14px;
  white-space: normal;
  font-weight: 500;
`;

export const Description = styled.div`
  display: block;
  font-size: 13px;
  white-space: normal;
  margin: 4px 0;
`;

// doc
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Caption = styled.div`
  margin-bottom: 4px;
`;

export const Details = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 8px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  /* border: 2px solid red; */
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DocTitle = styled.span`
  /* border: 2px solid yellow; */
  display: block;
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.541511px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Size = styled.span`
  /* border: 2px solid yellow; */
  display: block;
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.541511px;
`;

export const CallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px 0;
  width: fit-content;
`;

export const CallDetails = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: inherit;
  margin: 0 30px 0 11px;
  display: flex;
  align-items: center;
  width: 210px;
`;

export const CallBackButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 2px;
  color: #376af5;
  font-weight: 500;
  font-size: 12px;
  padding: 7px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DetailBottom = styled.div`
  border-top: 1px solid #dedede;
  width: 100%;
  padding-top: 10px;
  margin-top: 10px;
  display: flex;
`;
export const JoinedDiv = styled.div`
  margin-left: auto;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
export const JoinButton = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #376af5;
  color: #ffffff;
  width: 100px;
  border-radius: 2px;
  cursor: pointer;
`;

export const AudioWrapper = styled.div`
  svg {
    background: inherit;
  }

  .controls {
    padding: 10px 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .player__button {
    width: fit-content;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .icon-wrapper {
    width: 30px;
    position: relative;
    margin-right: 10px;
    margin-top: 10px;
  }
`;
export const BarStyle = styled.div`
  user-select: none;
  width: ${props => props.audioPlayerWidth || '250px'};
  display: flex;
  align-items: center;
  position: relative;

  .bar__time {
    color: ${props => props.barColor || '#fff'};
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: 6px;
  }

  .bar__progress {
    flex: 1;
    border-radius: 5px;
    margin: 0 5px;
    height: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: ${props => props.barColor || '#fff'};

    .bar__progress__knob {
      position: relative;
      height: 12px;
      width: 12px;
      border: ${props => '1px solid' + props.barColor || '1px solid #fff'};
      border-radius: 50%;
      background-color: ${props => props.barColor || '#fff'};
    }
  }
`;
export const Time = styled.div`
  margin-top: 10px;
`;
