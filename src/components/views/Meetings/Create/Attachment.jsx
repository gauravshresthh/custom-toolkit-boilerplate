import React from 'react';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import { StyledAttachment } from './Style';
import DocView from '../../Common/DocView/DocView';
import { CreateUUIDWithoutDash } from '../../../../utils/helper';
import ImageView from '../../Common/ImageView/ImageView';

export default function Attachment({ attachmentList, uploadAttachment, removeAttachment }) {
  return (
    <StyledAttachment>
      <div className='title'>Attachments</div>
      <div className='attachment-wrapper'>
        {attachmentList && attachmentList.map(single =>
          single.type === 'image' ?
            <ImageView
              attachment={single}
              showRemoveIcon={true}
              removeAttachment={removeAttachment}
            /> :
            <DocView
              attachment={single}
              showRemoveIcon={true}
              removeAttachment={removeAttachment}
            />
        )}
        <input
          multiple
          value=''
          type='file'
          name='meeting-attachment'
          id='meeting-attachment'
          style={{ display: 'none' }}
          onChange={e => {
            e.preventDefault();
            uploadAttachment(CreateUUIDWithoutDash(), e);
          }}
        />
        <label htmlFor='meeting-attachment'>
          <div className='btn'>
            <CommonIcons.CircledPlusIcon /> Add
          </div>
        </label>
      </div>
    </StyledAttachment>
  );
}
