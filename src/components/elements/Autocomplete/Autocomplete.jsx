import React from 'react';
import PropTypes from 'prop-types';
import { StyledAutocomplete } from './Style';
import CustomPopover from '../CustomPopover/CustomPopover';

function Autocomplete({
  title,
  openPopover,
  setOpenPopover,
  inputValue,
  onInputChange,
  placeholder,
  suggestionContent,
  inputBtnLabel,
  onInputBtnClick,
}) {
  return (
    <StyledAutocomplete>
      <div className="title">{title}</div>
      <CustomPopover
        popoverContent={suggestionContent}
        setShowPopover={setOpenPopover}
        showPopover={openPopover}
        children={
          <div className="input-wrapper">
            <input
              placeholder={placeholder}
              value={inputValue}
              onChange={onInputChange}
            />
            <div className="input-btn-label" onClick={onInputBtnClick}>
              {inputBtnLabel}
            </div>
          </div>
        }
      />
    </StyledAutocomplete>
  );
}

Autocomplete.propTypes = {
  title: PropTypes.string,
  openPopover: PropTypes.any,
  setOpenPopover: PropTypes.any,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.any,
  placeholder: PropTypes.string,
  suggestionContent: PropTypes.any,
};

export default Autocomplete;
