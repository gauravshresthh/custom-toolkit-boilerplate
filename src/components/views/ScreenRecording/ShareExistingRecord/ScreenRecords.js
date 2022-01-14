import React, { useState } from 'react';
import { Row, Col } from 'antd';
import menu from '../../../../assets/images/common/menu.svg';
import clocks from '../../../../assets/images/common/clock.svg';
import dot from '../../../../assets/images/common/dot-black.svg';
import user from '../../../../assets/images/common/user.svg';
import sendVideo from '../../../../assets/images/common/send-video.svg';
import noData from '../../../../assets/images/common/noDataIcon.svg';
import PopoverModal from '../../../elements/PopoverModal';
import { CreateUUID, DayDateFormatting } from '../../../../utils/helper';
import Record from './Record';

const ScreenRecords = ({
  screenRecordings,
  onVideoSubmitted,
  employeeList,
  closeShareRecordModal,
  deleteScreenRecordVideo,
  renameScreenRecordVideo,
  loader,
}) => {
  let screenRecordsParse = screenRecordings ? (
    screenRecordings.map(record => (
      <Record key={record.id}
        record = { record }
        onVideoSubmitted={onVideoSubmitted}
        employeeList={employeeList}
        closeShareRecordModal={closeShareRecordModal}
        deleteScreenRecordVideo={deleteScreenRecordVideo}
        renameScreenRecordVideo={renameScreenRecordVideo}
      />
    ))
  ) : (
    <div className="no-data" hidden={loader}>
      <img src={noData} alt="" className="no-data-icon" />
      <p className="no-data-txt">No Data</p>
    </div>
  );

  return (
    <div className="mt-4 screen-records-list">
      <Row>{screenRecordsParse}</Row>
    </div>
  );
};

export default ScreenRecords;
