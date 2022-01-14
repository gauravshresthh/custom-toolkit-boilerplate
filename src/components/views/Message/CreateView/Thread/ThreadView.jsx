import React from 'react';
import { StyledThreadWrapper } from './Style';
import DirectThread from './DirectThread';
import GroupThread from './GroupThread';
import EmployeeThread from './EmployeeThread';

const ThreadView = ({ thread, onThreadClick }) => {
  if (!thread) {
    return null;
  }
  return (
    <StyledThreadWrapper onClick={onThreadClick}>
      {thread.type === 2 ?
        <EmployeeThread thread={thread} /> :
        thread.inbox.inboxType === 1 ?
          <DirectThread thread={thread} /> :
          <GroupThread thread={thread} />}
    </StyledThreadWrapper>
  );
};

export default ThreadView;
