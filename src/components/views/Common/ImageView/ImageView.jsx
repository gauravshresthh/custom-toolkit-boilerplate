import React from 'react';
import { StyledImageView } from './Style';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import Loader from '../../../elements/Loader';
import Image from '../../../elements/Image/Image';

export default function ImageView({ attachment, removeAttachment, showRemoveIcon }) {
  return (
    <StyledImageView>
      {showRemoveIcon && <div className='close-icon' onClick={() => removeAttachment(attachment.id)}>
        <CommonIcons.CloseIconWithBackground />
      </div>}
      {attachment.uploadStatus === 'UPLOADING' && <Loader width='20px' color='#666' />}
      <Image src={attachment.url} borderRadius='2px' />
    </StyledImageView>
  );
}
