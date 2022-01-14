import React, { memo } from 'react';
import PropTypes from 'prop-types';

import SubmitButton from './Button/SubmitButton';
import PopupModal from './PopupModal';
import CancelButton from './Button/CancelButton';

import { StyledConfirmationModal } from './style';

const ConfirmationModal = ({
  title,
  visibility,
  content,
  closeModal,
  cancelLabel,
  actionLabel,
  onClick,
  width,
  loading,
}) => {
  return (
    <PopupModal
      modalTitle={title}
      modalVisible={visibility}
      onCancel={closeModal}
      width={width}
      showCloseIcon={false}
      children={
        <StyledConfirmationModal>
          <div className="modal-content"> {content} </div>
          <div className="confirmation-action">
            <CancelButton onClick={closeModal} text={cancelLabel} />
            <SubmitButton
              onClick={onClick}
              text={actionLabel}
              loading={loading}
            />
          </div>
        </StyledConfirmationModal>
      }
    />
  );
};

ConfirmationModal.propTypes = {
  title: PropTypes.any,
  visibility: PropTypes.bool,
  loading: PropTypes.bool,
  content: PropTypes.any,
  closeModal: PropTypes.func,
  width: PropTypes.string,
  cancelLabel: PropTypes.string,
  actionLabel: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(ConfirmationModal);
