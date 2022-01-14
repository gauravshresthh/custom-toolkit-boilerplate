import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import SubmitButton from '../../../../elements/Button/SubmitButton';
import PopupModal from '../../../../elements/PopupModal';
import {
  Get24HoursTimesFormat,
  GetDateForRangePicker,
  GetTimeForRangePicker,
  TimeConverterFunc,
} from '../../../../../utils/dateHelper';

const dateFormat = 'YYYY/MM/DD';
const timeFormat = 'h:mm a';

const StyledScheduleModal = styled.div`
  .btn-wrapper {
    display: flex;
    width: 150px;
    margin-left: auto;
    margin-top: 15px;
  }
`;

const ScheduleModal = ({
  content,
  scheduledMsg,
  modalVisible,
  onCancel,
  onMessageSubmitted,
  updateRtcMsg,
  setClearTextEditor
}) => {
  const [dateValue, setDateValue] = useState(undefined);
  const [timeValue, setTimeValue] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeValue(undefined);
    setDateValue(undefined);
    setLoading(false);
  }, [modalVisible]);
  useEffect(() => {
    if (scheduledMsg && scheduledMsg.scheduledAt) {
      setDateValue(scheduledMsg.scheduledAt / 1000);
      setTimeValue(scheduledMsg.scheduledAt / 1000);
    }
  }, [scheduledMsg]);

  return (
    <PopupModal
      showCloseIcon={true}
      width="400px"
      onCancel={onCancel}
      modalVisible={modalVisible}
      modalTitle="Pick date & time"
      children={
        <StyledScheduleModal>
          <div>Date</div>
          <DatePicker
            allowClear={false}
            getPopupContainer={trigger => trigger.parentNode}
            format={dateFormat}
            style={{ width: '100%', height: '36px', marginBottom: '12px' }}
            popupStyle={{ width: '340px' }}
            value={
              dateValue
                ? moment(GetDateForRangePicker(dateValue * 1000), dateFormat)
                : null
            }
            onChange={e => {
              setDateValue(e.unix());
            }}
          />

          <div>Time</div>
          <TimePicker
            use12Hours
            allowClear={false}
            format={timeFormat}
            getPopupContainer={trigger => trigger.parentNode}
            type="time"
            value={
              timeValue
                ? moment(GetTimeForRangePicker(timeValue), timeFormat)
                : null
            }
            onChange={value => {
              setTimeValue(value.unix());
            }}
            popupStyle={{ width: '340px' }}
            style={{ width: '100%', height: '36px' }}
          />

          <div className="btn-wrapper">
            <SubmitButton
              text="Schedule"
              loading={loading}
              disable={!dateValue || !timeValue}
              onClick={() => {
                //must be in this format to parse Date: '02/13/2009 23:31:30'
                let timestampValue = `${TimeConverterFunc(dateValue)[0]}/${
                  TimeConverterFunc(dateValue)[1]
                }/${TimeConverterFunc(dateValue)[2]} ${Get24HoursTimesFormat(
                  timeValue,
                )}`;
                setLoading(true);
                if (scheduledMsg && scheduledMsg.scheduledAt) {
                  console.log({scheduledMsg},{content})
                  updateRtcMsg(
                    scheduledMsg ||  content ,
                    scheduledMsg.messageType,
                    scheduledMsg.refId,
                    scheduledMsg.clientId,
                    scheduledMsg.parentMsgId,
                    scheduledMsg.rtcMessageId,
                    scheduledMsg.mentionList,
                    Date.parse(timestampValue),
                  );
                } else {
                  onMessageSubmitted(content, Date.parse(timestampValue));
                }
                setClearTextEditor(true);
                onCancel();
              }}
            />
          </div>
        </StyledScheduleModal>
      }
    />
  );
};

ScheduleModal.propTypes = {
  onCancel: PropTypes.func,
  modalVisible: PropTypes.bool,
};

export default ScheduleModal;
