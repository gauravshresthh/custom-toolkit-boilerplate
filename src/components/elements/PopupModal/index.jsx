import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const PopupModal = ({
  width,
  modalVisible,
  modalTitle,
  children,
  onCancel,
  showCloseIcon,
  contentStyle,
  mask
}) => {
  return (
    <Modal mask={!mask}
      closable={showCloseIcon}
      visible={modalVisible}
      title={modalTitle}
      footer={null}
      onCancel={onCancel}
      width={width || '400px'}
      maskClosable={false}
      centered
    >
      <div style={contentStyle || { padding: '20px 30px' }}>{children}</div>
    </Modal>
  );
};

PopupModal.propTypes = {
  modalVisible: PropTypes.bool,
  contentStyle: PropTypes.any,
  showCloseIcon: PropTypes.bool,
  width: PropTypes.string,
  modalTitle: PropTypes.string,
  children: PropTypes.any,
  onCancel: PropTypes.func,
};

export default PopupModal;
