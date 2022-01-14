import React from 'react';
import TextEditor from '../../../elements/TextEditor/TextEditor';

export default function Description({
                                      meetingObj,
                                      setMeetingObj,
                                    }) {
  return (
    <>
      <div className='title'>Description</div>
      <TextEditor
        setMeetingObj={setMeetingObj}
        meetingObj={meetingObj}
        inlineButtons={['B', 'I', 'U', 'Numbering', 'Bulleting', 'FormatText']}
      />
    </>
  );
}
