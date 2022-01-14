import React, { useState } from 'react';

const SearchRecords = ({ getExistingRecords }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="search-records-wrapper">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
              fill="#9D9D9D"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="search-records"
          onChange={e => getExistingRecords(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchRecords;
