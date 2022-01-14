import React, { useEffect } from 'react';
import Styled from 'styled-components';
import CommonIcons from '../../../../../../assets/images/common/CommonIcons';

const StyledAttachmentTab = Styled.div`
     display: flex;
    align-items: center;
    height:63px;
    padding:0 14px;
    border-bottom: 1px solid #F0EDF1;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    .close-arrow{
      cursor:pointer;
      svg{
        width: 7px;
        height: 12px;
      }
    }
    .tab{
    display:flex;
        height: 100%;
    align-items: flex-end;
    justify-content:center;
    gap: 22px;
    width:100%;
    cursor:pointer;
    div{
    border-bottom: 2px solid #fff;
    }
    }
`;

const AttachmentTab = ({ closeRightbar, tabType, setTabType,fetchMediaFiles,refId }) => {
  useEffect(()=>{fetchMediaFiles(refId,'MEDIA')},[])
  return (
    <StyledAttachmentTab>
      {' '}
      <div className="close-arrow" aria-hidden="true" onClick={closeRightbar}>
        <CommonIcons.ArrowRight />
      </div>
      <div className="tab">
        <div
          aria-hidden="true"
          onClick={() => {
            setTabType('MEDIA');
            fetchMediaFiles(refId,'MEDIA')
          }}
          style={
            tabType === 'MEDIA'
              ? { borderBottom: '2px solid #376af5', color: '#376af5' }
              : null
          }
        >
          Media
        </div>
        <div
          aria-hidden="true"
          onClick={() => {
            setTabType('FILES');
            fetchMediaFiles(refId,'FILES')
          }}
          style={
            tabType === 'FILES'
              ? { borderBottom: '2px solid #376af5', color: '#376af5' }
              : null
          }
        >
          Files
        </div>
        <div
          aria-hidden="true"
          onClick={() => {
            setTabType('LINKS');
            fetchMediaFiles(refId,'LINKS')
          }}
          style={
            tabType === 'LINKS'
              ? { borderBottom: '2px solid #376af5', color: '#376af5' }
              : null
          }
        >
          Links
        </div>
      </div>
    </StyledAttachmentTab>
  );
};

export default AttachmentTab;
