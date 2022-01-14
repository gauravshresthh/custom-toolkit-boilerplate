import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledCustomPopover } from './style';

const CustomPopover = ({
  children,
  popoverContent,
  showPopover,
  setShowPopover,
  popoverMaxHeight,
}) => {
  const popoverMenu = useRef();
  const handleClickOutside = e => {
    if (popoverMenu.current && popoverMenu.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowPopover(false);
  };
  useEffect(() => {
    if (showPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopover]);

  return (
    <StyledCustomPopover popoverMaxHeight={popoverMaxHeight}>
      <div role="button" onClick={() => setShowPopover(true)}>
        {children}
      </div>
      <div
        ref={popoverMenu}
        className="popover-content-wrapper withScrollbar"
        hidden={!showPopover}
      >
        {popoverContent}
      </div>
    </StyledCustomPopover>
  );
};

CustomPopover.propTypes = {
  children: PropTypes.any,
  popoverContent: PropTypes.any,
  showPopover: PropTypes.any,
  setShowPopover: PropTypes.any,
  popoverMaxHeight: PropTypes.any,
};

export default CustomPopover;
