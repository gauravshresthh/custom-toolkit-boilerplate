import React from 'react';
import PropTypes from 'prop-types';
import TextEditorIcon from '../../../../../../assets/images/TextEditorIcon';
import { StyledDocWrapper } from '../Style';
import OutlinedSpinner from '../../../../../elements/Spinner';
import { BytesToSize, renderIconsBasedOnFileUrl } from '../../../../../../utils/helper';
import { MessageIcon } from '../../../../../../assets/images/messages/MessageIcon';
import { FileModel } from '../../../../../../model/FileModel';

const DocWrapper = ({ doc, removeSelectedDoc, refId, resendFile, parentMsgId,selectedMentions,clientIdForAttachment }) => {
  if (!doc) {
    return null;
  }
  return (
    <StyledDocWrapper isFailed={doc.uploadStatus === 'FAILED'} onClick={() => {
      window.open(
        doc.url.includes('https://') ? doc.url : 'https://' + doc.url,
        '_blank',
      );
    }}>
      <div className='doc-wrapper'>
        {doc.uploadStatus === 'UPLOADING' ? (
          <OutlinedSpinner
            color='#666' width='24px'
            spinnerStyle={{
              width: '24px',
            }}
          />
        ) : doc.uploadStatus === 'FAILED' ?
          <div style={{ width: '24px', cursor: 'pointer' }}
               onClick={() => {
                 resendFile(
                   [{ id: doc.id, file: doc.attachment }],
                   refId,
                   parentMsgId,
                   selectedMentions,'',
                   FileModel.GetAttachmentClientId(doc.attachment, doc.id, clientIdForAttachment)
                 );
               }}>
            <MessageIcon.ResendIcon />
          </div> : (
            doc.url && renderIconsBasedOnFileUrl(doc.url)
          )}
        <div>
          <div className='doc-name text-truncate'>{doc.title}</div>
          <div className='doc-size'>
            {doc.size && BytesToSize(doc.size)}
          </div>
        </div>
        <div
          className='delete-img'
          onClick={(e) => {
            e.stopPropagation();
            removeSelectedDoc(doc.id, parentMsgId);
          }}
        >
          <TextEditorIcon.CloseIcon />
        </div>
      </div>
    </StyledDocWrapper>
  );
};

DocWrapper.propTypes = {
  doc: PropTypes.any,
  removeSelectedDoc: PropTypes.func,
};

export default DocWrapper;
