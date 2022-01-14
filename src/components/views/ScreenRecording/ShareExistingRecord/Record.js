import React, { useState } from 'react';
import { Row, Col } from 'antd';
import menu from '../../../../assets/images/common/menu.svg';
import clocks from '../../../../assets/images/common/clock.svg';
import dot from '../../../../assets/images/common/dot-black.svg';
import user from '../../../../assets/images/common/user.svg';
import sendVideo from '../../../../assets/images/common/send-video.svg';
import noData from '../../../../assets/images/common/noDataIcon.svg';
import PopoverModal from '../../../elements/PopoverModal';
import LocalDb from '../../../../localStorage';

import { CreateUUID, DayDateFormatting } from '../../../../utils/helper';

const Record = ({
  record,
  onVideoSubmitted,
  employeeList,
  closeShareRecordModal,
  deleteScreenRecordVideo,
  renameScreenRecordVideo,
}) => {
  const [renameTitleEnabled, setRenameTitleEnabled] = useState(false);
  const [openPopoverModal, setOpenPopoverModal] = useState(false);
  const [title, setTitle] = useState(false);
  return (
    <Col span={12} className="mb-4">
      <div className="video-modal">
        <video width="300" height="168" controls>
          <source src={record.fileUrl} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-details">
        <div className="video-title-block">
          {renameTitleEnabled ? (
            <span>
              <input
                placeholder="Rename title"
                style={{ padding: '0 10px', border: '1px solid #ddd' }}
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
              <button
                style={{
                  padding: '0 5px',
                  border: '1px solid #ddd',
                  marginLeft: '5px',
                }}
                onClick={() => {
                  setRenameTitleEnabled(false);
                  setOpenPopoverModal(false);
                  renameScreenRecordVideo(record.id, title);
                  record.title = title;
                }}
              >
                Save
              </button>
            </span>
          ) : (
            <span className="video-title">{record.title}</span>
          )}
          <PopoverModal
            contentTopMargin="-4px"
            contentWidth="190px"
            trigger="click"
            visible={openPopoverModal}
            onVisibleChange={visibility => {
              setOpenPopoverModal(visibility);
            }}
            popoverContent={
              <div className="records-popover">
                <div
                  className="record-options"
                  role="presentation"
                  onClick={() => {
                    deleteScreenRecordVideo(record.id);
                    setOpenPopoverModal(false);
                  }}
                >
                  Delete
                </div>
                <div
                  className="record-options"
                  role="presentation"
                  onClick={() => {
                    setRenameTitleEnabled(true);
                    setOpenPopoverModal(false);
                    setTitle(record.title);
                  }}
                >
                  Rename
                </div>
              </div>
            }
          >
            {record.recordedBy === LocalDb.getUserAccountId() ? (
              <button
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <img src={menu} alt="" className="menu-icon" />
              </button>
            ) : (
              <></>
            )}
          </PopoverModal>
        </div>
        <div className="mt-2 record-user">
          <img src={clocks} alt="" className="mr-2 clock-icon" />
          <span className="mr-2 date-time">
            {DayDateFormatting(record.createdAt / 1000)}
          </span>
        </div>
        <div className="send-video-message">
          <div className="record-user mt-1">
            <img src={user} alt="" className="mr-2 user-icon" />
            <span>
              Recorded by{' '}
              {employeeList &&
                employeeList.map(employee =>
                  employee.accountId === record.recordedBy
                    ? employee.fullName
                    : null,
                )}
            </span>
          </div>
          <img
            src={sendVideo}
            alt=""
            className="send-video-icon"
            onClick={() => {
              const exist = true;
              onVideoSubmitted(
                record.fileUrl,
                record.id,
                record.fileUrl,
                record.title,
                exist,
              );
              closeShareRecordModal();
            }}
          />
        </div>
      </div>
    </Col>
  );
};

export default Record;
