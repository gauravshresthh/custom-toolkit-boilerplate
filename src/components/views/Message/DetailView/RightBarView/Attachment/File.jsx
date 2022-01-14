import React from 'react';
import Styled from 'styled-components';
import { BytesToSize, renderIconsBasedOnFileUrl } from '../../../../../../utils/helper';
import { DayDateFormatting, GetMinuteValue } from '../../../../../../utils/dateHelper';
import LocalDb from '../../../../../../localStorage';

const StyledFile = Styled.div`
 .title {

padding-top:10px;
border-bottom:1px solid #f0f0f0;
 .date {
 padding: 0 15px;
 color:#666;
 }
}
.content {
padding: 15px;
display:flex;
gap:10px;
flex-wrap:wrap;
flex-direction:column;
}

.file-wrapper{
display:flex;
cursor:pointer;
.icon-wrapper{
display:flex;
align-items:center;
}
.file-content{
padding-left:10px;
display:flex;
flex-direction:column;
.name{
color:#376af5;
width:200px;
}
.size,
.detail{
font-size:10px;
color:#666;
}
}

`;

const File = ({ fileList }) => {
  function openNewWindow(link) {
    window.open(link, '_blank');
  }

  const group =
    fileList !== undefined &&
    fileList.reduce((r, a) => {
      r[DayDateFormatting(a.sentAtTimestamp / 1000)] = [
        ...(r[DayDateFormatting(a.sentAtTimestamp / 1000)] || []),
        a,
      ];
      return r;
    }, {});

  const keys = Object.keys(group).sort((a, b) => new Date(b) - new Date(a));

  return (
    <StyledFile>
      {keys &&
      keys.map((singleLastMessage, idx) => {
        const singleData =
          group[singleLastMessage] &&
          group[singleLastMessage].sort(function(a, b) {
            const dateA = a.sentAtTimestamp;
            const dateB = b.sentAtTimestamp;
            return dateA - dateB;
          });
        return (
          <>
            <div className='title'>
              <div className='date'>{singleLastMessage}</div>
            </div>
            <div className='content'>
              {singleData &&
              singleData.map(single => (
                <React.Fragment key={idx}>
                  <div
                    key={idx}
                    aria-hidden='true'
                    className='file-wrapper'
                    onClick={() =>
                      openNewWindow(
                        single.attachment && single.attachment.url,
                      )
                    }
                  >
                    <div className='icon-wrapper'>
                      {renderIconsBasedOnFileUrl(
                        single.attachment && single.attachment.url,
                      )}
                    </div>
                    <div className='file-content'>
                      <div className='name text-truncate'>
                        {single.attachment && single.attachment.title}
                      </div>
                      <div className='size'>
                        {single.attachment &&
                        BytesToSize(single.attachment.size)}
                      </div>
                      <div className='detail'>
                        {single.senderAccountObj &&
                        (single.senderAccountObj.accountId ===
                        LocalDb.getUserAccountId()
                          ? 'You'
                          : single.senderAccountObj.fullName)}{' '}
                        {GetMinuteValue(single.sentAtTimestamp / 1000)}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </>
        );
      })}
    </StyledFile>
  );
};

export default File;
