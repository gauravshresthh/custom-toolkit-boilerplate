import React from 'react';
import Linkify from '../../../../elements/LinkifyComponent';
import Image from '../../../../elements/Image/Image';
import { formattedData, funcToMapMentionIdToName } from '../../../../views/Message/DetailView/Typing/helper';

const LinkContent = (
  {
    msg,
  },
) => {
  return (
    <>
      <div className='icon-wrapper'>
        <Image
          width='25px'
          height='25px'
          src={msg.link && msg.link.image}
          borderRadius='4px'
        />
      </div>
      <Linkify children={
        msg.link && msg.link.message &&
        funcToMapMentionIdToName(
        formattedData(msg),
          msg.link && msg.link.message,
          msg.hasMentions
        )
      }/>
    </>
  );
};

export default LinkContent;
