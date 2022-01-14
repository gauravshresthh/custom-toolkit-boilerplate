import React from 'react';
import { StyledDocView } from './Style';
import { renderIconsBasedOnFileUrl } from '../../../../utils/helper';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import Loader from '../../../elements/Loader';

export default function DocView({ attachment, removeAttachment, showRemoveIcon }) {
  return (
    <StyledDocView onClick={() => window.open(attachment.url, '_blank')}>
      {showRemoveIcon && <div className='close-icon' onClick={() => removeAttachment(attachment.id)}>
        <CommonIcons.CloseIconWithBackground />
      </div>}
      {attachment.uploadStatus === 'UPLOADING' && <Loader width='20px' color='#666' />}
      {renderIconsBasedOnFileUrl(attachment.url)}
      <div className='doc-name'>{attachment.title}</div>
    </StyledDocView>
  );
}
