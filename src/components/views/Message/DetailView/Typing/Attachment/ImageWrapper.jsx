import React from 'react';
import PropTypes from 'prop-types';
import TextEditorIcon from '../../../../../../assets/images/TextEditorIcon';
import { StyledImageWrapper } from '../Style';
import Image from '../../../../../elements/Image/Image';
import OutlinedSpinner from '../../../../../elements/Spinner';
import { MessageIcon } from '../../../../../../assets/images/messages/MessageIcon';
import CommonIcons from '../../../../../../assets/images/common/CommonIcons';

const ImageWrapper = ({
                        image,
                        removeSelectedImage,
                        refId,
                        resendFile,
                        parentMsgId,
                        selectedMentions,
                      }) => {
  if (!image) {
    return null;
  }
  return (
    <StyledImageWrapper isFailed={image.uploadStatus === 'FAILED'}>
      {image.uploadStatus === 'UPLOADING' && (
        <OutlinedSpinner width='25px'
          spinnerStyle={{
            position: 'absolute',
            zIndex: 1,
            width: '25px',
          }}
        />
      )}
      {image.uploadStatus === 'FAILED' && (
        <div
          className='failed_icon'
          onClick={() => {
            resendFile(
              [{ id: image.id, file: image.attachment }],
              refId,
              parentMsgId,
              selectedMentions, '',
              image.id,
            );
          }}>
          <MessageIcon.ResendIcon />
        </div>
      )}
      {image.url ? <Image
        src={image.url}
        width='50px'
        height='50px'
        borderRadius='4px'
      /> : <CommonIcons.DefaultImage />}
      <div
        className='delete-img'
        onClick={(e) => {
          e.stopPropagation();
          removeSelectedImage(image.id, parentMsgId);
        }}
      >
        <TextEditorIcon.CloseIcon />
      </div>
    </StyledImageWrapper>
  );
};

ImageWrapper.propTypes = {
  image: PropTypes.any,
  removeSelectedImage: PropTypes.func,
};

export default ImageWrapper;
