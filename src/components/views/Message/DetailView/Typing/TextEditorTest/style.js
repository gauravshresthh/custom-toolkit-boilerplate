import styled from 'styled-components';

export const ToolbarInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
`;

export const EditorContainer = styled.div`
  box-sizing: border-box;
  cursor: text;
  border-radius: 5px;
  background: white;
  height: 100%;
  border: 1px solid #c9c9c9;

  .public-DraftEditor-content {
    width: 100%;
    height: 74px;
    max-height: 124px;
    overflow: auto;
    padding-left: 12px;
    cursor: text;
  }

  .public-DraftEditorPlaceholder-root {
    color: #777 !important;
    position: absolute;
    left: 12px;
    top: 12px;
  }

  .video-record-preview-wrapper {
    padding: 20px;
  }
`;

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  flex-wrap: wrap;
  height: auto;
  overflow: auto;
  z-index: 50;
`;

export const EmojiSelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  align-items: center;
  padding: ${({ forwhom }) => (forwhom == 'reply' ? '0 4px' : '0 14px')};

  .e17si09n {
    position: absolute;
    right: 0;
    top: 0.3em;
    bottom: 0.3em;
    width: 0.25em;
    background-color: #f6f6f6;
    border-radius: 0.125em;
    opacity: 0.1;
    -webkit-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .e19xmvdb {
    margin: 1em 0;
    padding-left: 0.5em;
    font-weight: normal;
    font-size: 1em;
    color: #9e9e9e;
  }

  .e1g1wugw {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    max-width: 1.95ch;
    max-height: 1em;
    line-height: inherit;
    margin: -0.2ex 0em 0.2ex;
    color: transparent;
    min-width: 1em;
  }

  .esyutjr {
    border: 1px solid #eee;
    margin-top: 1.75em;
    position: absolute;
    min-width: 220px;
    max-width: 440px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 4px 30px 0px rgba(220, 220, 220, 1);
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 8px;
    z-index: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    box-sizing: border-box;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .e1eijkox {
    padding: 5px 10px 1px 10px;
    -webkit-transition: background-color 0.4s
      cubic-bezier(0.27, 1.27, 0.48, 0.56);
    transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
  }

  .e1eijkox:active {
    background-color: #cce7ff;
  }

  .e1adbvmt {
    padding: 5px 10px 1px 10px;
    -webkit-transition: background-color 0.4s
      cubic-bezier(0.27, 1.27, 0.48, 0.56);
    transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
    background-color: #e6f3ff;
  }

  .e1adbvmt:active {
    background-color: #cce7ff;
  }

  .e13wg9oj {
    display: inline-block;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 368px;
    font-size: 0.9em;
  }

  .e1w5jrn9 {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
    margin-right: 0.25em;
    display: inline-block;
  }

  .e183m4hm {
    display: inline-block;
    background-color: #f6f6f6;
  }

  .e8k2yoa {
    margin: auto 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    color: #888;
    background: #f6f6f6;
    border-radius: 1.5em;
    cursor: pointer;
  }

  .e8k2yoa:focus {
    outline: 0;
  }

  .e8k2yoa:hover {
    background: #f3f3f3;
  }

  .e8k2yoa:active {
    background: #e6e6e6;
  }

  .e13wqaj6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #888;
    border-radius: 1.5em;
    cursor: pointer;
    border: 0;
    background: #f6f6f6;
  }

  .e13wqaj6:focus {
    outline: 0;
  }

  .e13wqaj6:hover {
    background: #f3f3f3;
  }

  .e13wqaj6:active {
    background: #e6e6e6;
  }

  .ec6zxdw > div {
    overscroll-behavior: contain;
  }

  .ejr02pv {
    margin-top: 10px;
    padding: 0 0.3em;
    position: absolute;
    bottom: 50px;
    /* right: ${({ isReplyThread }) => (isReplyThread ? '100px' : '0')}; */
    right: -100px;
    width: 230px;
    z-index: 11000;
    box-sizing: content-box;
    background: #fff;
    border: 1px solid #e0e0e0;
    background-color: #f6f6f6;
    box-shadow: 0 4px 30px 0 gainsboro;
  }

  .e6amujp {
    display: none;
  }

  .e16zneum {
    margin: 0 0 0.3em;
    padding-left: 1em;
    height: 2.5em;
    line-height: 2.5em;
    font-weight: normal;
    font-size: 1em;
    color: #9e9e9e;
  }

  .e1kg9q3n {
    margin: 0 0 0.3em;
    position: relative;
    z-index: 0;
    width: 100%;
    height: 20em;
  }

  .e1kg9q3n:hover .e17si09n {
    opacity: 0.3;
  }

  .e1kg9q3n .e17si09n:hover,
  .e1kg9q3n .e17si09n:active {
    opacity: 0.6;
  }

  .e1m341vm {
    padding: 0 0.5em;
  }

  .e1m341vm:first-child .e19xmvdb {
    display: none;
  }

  .e13arc1 {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .e6nwac2 {
    width: 2.5em;
    height: 2.5em;
  }

  .e3h4qvg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }

  .e1129lxj {
    margin: 0.3em;
    padding: 0.3em;
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    border: 1px solid #e0e0e0;
    border-radius: 0.5em;
    background: #fff;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.1);
  }

  .eug7aee {
    width: 2.5em;
    height: 2.5em;
  }

  .eug7aee:first-child {
    border-right: 1px solid #e0e0e0;
  }

  .eyoq5wq {
    padding: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    -webkit-transition: background-color 0.4s
      cubic-bezier(0.27, 1.27, 0.48, 0.56);
    transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
  }

  .e1eigyu0 {
    padding: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    -webkit-transition: background-color 0.4s
      cubic-bezier(0.27, 1.27, 0.48, 0.56);
    transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
    background-color: #efefef;
  }

  .e11mkpma {
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
  }

  .e1cibj9i {
    margin: 0;
    padding: 0 0.5em;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    list-style: none;
  }

  .e2bpndj {
    width: 2.5em;
    height: 2.5em;
  }

  .e1qma4nk {
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 1.2em;
    color: #bdbdbd;
    background: none;
    border: none;
    outline: none;
  }

  .e1q5rpho {
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 1.2em;
    color: #bdbdbd;
    background: none;
    border: none;
    outline: none;
    color: #42a5f5;
  }

  .e1duapnp {
    background-color: #000;
    border-radius: 0.125em;
    cursor: pointer;
  }
`;

export const CustomInlineStylesButton = styled.button`
  width: 100%;
  height: 26px;
  padding: ${({ forwhom }) => (forwhom == 'reply' ? '0 11px' : '0 16px')};
  background: ${({ selectedStyleButton }) =>
    selectedStyleButton ? '#d8d8d8' : 'transparent'};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 2px;
  box-shadow: ${({ selectedStyleButton }) =>
    selectedStyleButton ? '1px 1px 2px rgba(0, 0, 0, 0.05)' : 'none'};
  // border: 2px solid green;

  :hover {
    background-color: #efefef;
  }
`;
