import styled from 'styled-components';

export const StyledTextEditor = styled.div`
  position: relative;

  .form-section {
    border: 1px solid #dedede;
    border-radius: 5px;
    background: white;
    border-bottom: none;
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: ${props =>
    props.isFailed ? '1px solid #DE4132' : '1px solid #9c9c9c'};
  padding: 4px;
  border-radius: 4px;
  width: 55px;
  height: 55px;

  .play_icon {
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(67 66 66 / 25%);
    height: 100%;
    align-items: center;
  }

  .delete-img {
    cursor: pointer;
    position: absolute;
    right: -6px;
    top: -6px;
    display: flex;
    background: #fff;
    border-radius: 50%;
    z-index: 2;
  }
  .failed_icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
  }
`;

export const StyledDocWrapper = styled.div`
  display: flex;
  gap: 6px;
  padding: 6px 10px;
  flex-wrap: wrap;
  height: auto;
  overflow: auto;
  z-index: 50;
  cursor: pointer;

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

  .doc-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #9c9c9c;
    padding: 8px;
    gap: 6px;
    border-radius: 4px;
    color: #666;

    .doc-name {
      max-width: 100px;
    }

    .doc-size {
      font-size: 12px;
    }

    .delete-img {
      cursor: pointer;
      position: absolute;
      right: -6px;
      top: -6px;
      display: flex;
      background: #fff;
      border-radius: 50%;
    }
  }
`;

export const StyledRightSideCustomToolbar = styled.div`
  /* position: absolute; */
  height: 34px;
  right: 10px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .toolbar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 30px;
    cursor: pointer;
    margin-right: ${props => (props.editorForReply ? 0 : '6px')};

    :hover {
      box-shadow: 1px 1px 0px #bfbdbd;
    }
  }

  .more-icon {
    cursor: pointer;
    margin-left: 6px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    background: transparent;
    border: none;
    border-left: 1px solid #9c9c9c;
  }
`;

export const StyledCustomToolbar = styled.div`
  display: flex;
  align-items: center;

  .typing-popover {
    background: #fff;
    box-shadow: 0 0 15px rgba(189, 189, 189, 0.3);
    border-radius: 5px;
    min-width: 150px;
    margin-top: -10px;
    border: 1px solid #e6e6e6;
  }

  .options {
    padding: 20px 12px;
    cursor: pointer;
    color: #666;
  }

  .options:hover {
    background: #f1f1f1;
  }

  .custom-toolbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    cursor: pointer;
    padding: ${({ forwhom }) => (forwhom === 'reply' ? '0 11px' : '0 16px')};

    :hover {
      background-color: #efefef;
    }

    label {
      cursor: pointer;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
  }
`;

export const TypeStyle = styled.span`
  .typing-popover {
    background: #fff;
    box-shadow: 0 0 15px rgba(189, 189, 189, 0.3);
    border-radius: 5px;
    min-width: 150px;
    margin-top: -10px;
    border: 1px solid #e6e6e6;
  }

  .options {
    padding: 6px 12px;
    cursor: pointer;
    color: #666;
  }

  .options:hover {
    background: #f1f1f1;
  }

  #share {
    padding-top: 12px;
  }
`;
