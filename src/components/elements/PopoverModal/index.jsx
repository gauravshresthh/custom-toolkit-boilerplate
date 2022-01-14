import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';

import { StyledPopoverContent } from './style';

const PopoverModal = ({
  children,
  popoverContent,
  trigger,
  placement,
  contentWidth,
  contentTopMargin,
  contentBottomMargin,
  visible,
  onVisibleChange,
  contentHeight,
  maxHeight,
  addCSS,
  transparentBackground,
  ...props
}) => {
  return (
    <Popover
      getPopupContainer={trigger => trigger.parentNode}
      trigger={trigger}
      placement={placement}
      visible={visible}
      onVisibleChange={onVisibleChange}
      content={
        <StyledPopoverContent
          className="withScrollbar"
          contentWidth={contentWidth}
          contentTopMargin={contentTopMargin}
          contentHeight={contentHeight}
          maxHeight={maxHeight}
          addCSS={addCSS}
          transparentBackground={transparentBackground}
        >
          {popoverContent}
        </StyledPopoverContent>
      }
      {...props}
    >
      <div style={{ cursor: 'pointer' }}>{children}</div>
    </Popover>
  );
};

PopoverModal.propTypes = {
  children: PropTypes.any,
  popoverContent: PropTypes.any,
  trigger: PropTypes.string,
  contentWidth: PropTypes.string,
  contentTopMargin: PropTypes.any,
  contentBottomMargin: PropTypes.any,
  placement: PropTypes.string,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
};

export default PopoverModal;
