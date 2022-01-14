import React from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';

import { StyledSearchBar } from './style';

const SearchBar = ({
  width,
  addCss,
  placeholder = 'Search',
  onChange,
  value,
}) => {
  return (
    <StyledSearchBar addCss={addCss} style={{ width: width || '500px' }}>
      <SearchOutlined style={{ color: '#9D9D9D', marginRight: '6px' }} />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
      />
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
  addCss: PropTypes.string,
};

export default SearchBar;
