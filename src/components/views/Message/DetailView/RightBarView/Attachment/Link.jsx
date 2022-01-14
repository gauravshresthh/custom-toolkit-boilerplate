import React from 'react';
import Styled from 'styled-components';
import Image from '../../../../../elements/Image/Image';
import { DayDateFormatting, GetMinuteValue } from '../../../../../../utils/dateHelper';
import LocalDb from '../../../../../../localStorage';

const StyledLink = Styled.div`
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

.link-wrapper{
display:flex;
cursor:pointer;

.icon-wrapper{
display:flex;
align-items:center;

}
.link-content{
padding-left:10px;
display:flex;
flex-direction:column;
.name{
color:#376af5;
width:200px;
}
.detail{
font-size:10px;
color:#666;
}
}`;

const Link = ({ linkList }) => {
  function openNewWindow(link) {
    window.open(
      link.includes('http') ? link : 'https://'+link ,
      '_blank',
    );
  }

  const group =
    linkList !== undefined &&
    linkList.reduce((r, a) => {
      r[DayDateFormatting(a.sentAtTimestamp / 1000)] = [
        ...(r[DayDateFormatting(a.sentAtTimestamp / 1000)] || []),
        a,
      ];
      return r;
    }, {});

  const keys = Object.keys(group).sort((a, b) => new Date(b) - new Date(a));

  return (
    <StyledLink>
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
          <div className="title">
            <div className="date">{singleLastMessage}</div>
          </div>
          <div className="content">
            {singleData && singleData.map(single =>
          <React.Fragment key={idx}>
                  <div
                    key={idx}
                    aria-hidden="true"
                    className="link-wrapper"
                    onClick={() => single.link && openNewWindow(single.link.url)}
                  >
                    <div className="icon-wrapper">
                      <Image
                        width="28px"
                        height="28px"
                        src={single.link && single.link.image}
                        borderRadius="4px"
                      />
                    </div>
                    <div className="link-content">
                      <div className="name text-truncate">
                        {single.link && single.link.title}
                      </div>
                      <div className='detail'>
                        {single.senderAccountObj && (single.senderAccountObj.accountId === LocalDb.getUserAccountId() ? 'You' : single.senderAccountObj.fullName)} {GetMinuteValue(single.sentAtTimestamp / 1000)}
                      </div>
                    </div>
                  </div>
          </React.Fragment>)}
          </div>
          </>
        )})}
    </StyledLink>
  );
};

export default Link;
