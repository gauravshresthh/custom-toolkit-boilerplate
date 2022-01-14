import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 7px 10px;
  width: 80%;
  border: 0.4px solid #9c9c9c;
  box-sizing: border-box;
  border-radius: 2px;
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

  .pinned-bar__progress {
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
