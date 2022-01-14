import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import SubmitButton from '../../../../elements/Button/SubmitButton';
import InboxProto from '../../../../../protos/inbox_pb';

const StyledMoveMessageContent = Styled.div`
    background: #FFFFFF;
    border-radius: 2px;

    .category-list{
    max-height:150px;
    overflow:auto;
    }
    .category{
        color: #666666;
        padding: 6px 12px;
        font-size: 13px;
        font-weight: 400;
        cursor:pointer;
        &:hover{
           background: #EFF3FF;
        }
    }
    .new-section-form{
        margin-top:2px;
        border-top:1px solid #f0f0f0;
        padding: 4px 12px 12px 12px;
        max-width: 160px;
        label{
            display:block;
            color: #666666;
            font-size: 13px;
            font-weight: 400;
            margin-top: 3px;
        }

        input{
            width: 100%;
            border: 0.6px solid #C4C4C4;
            box-sizing: border-box;
            border-radius: 2px;
            padding: 2px 5px;
            color: #666666;
            font-size: 12px;
            margin-top: 5px;
            margin-bottom: 8px;
            &:focus{
                outline:none;
            }
        }
        button{
            font-size: 12px;
            height: 22px;
        }
    }
`;

const MoveMessagePopoverContent = ({
                                     inboxDetail,
                                     movePopoverVisibility,
                                     setMovePopoverVisibility,
                                     setActionPopoverVisibility,
                                     moveMessage,
                                     sectionsList,
                                     inboxId,
                                     createSection,
                                     btnLoading,
                                     sectionId,
                                   }) => {
  const [newSectionName, setNewSectionName] = useState('');
  const [sectionFieldVisible, setSectionFieldVisible] = useState(false);

  function createSectionAndMove() {
    setMovePopoverVisibility(false);
    setActionPopoverVisibility(false);
    const createProto = new InboxProto.InboxSection();
    createProto.setTitle(newSectionName);
    createSection(createProto, inboxId);
  }

  useEffect(() => {
    setNewSectionName('');
  }, [movePopoverVisibility]);

  const filterSectionList = () => {
    let filteredList=[];
    sectionsList && sectionsList.map(single => {
      if(single.sectionId !== sectionId){
        if(inboxDetail && inboxDetail.inboxType === 1){
         single.sectionId !== '2' && filteredList.push(single)
        }else if(inboxDetail && (inboxDetail.inboxType === 2 || inboxDetail.inboxType === 3)){
          single.sectionId !== '1' && filteredList.push(single)
        }else {
          filteredList.push(single)
        }
      }
    })
    return filteredList;
  };
  return (
    <StyledMoveMessageContent>
      <div className='category-list withScrollbar'>
        {sectionsList &&
        filterSectionList().map(
          section => {
            return (
              <p
                className='category'
                onClick={() => {
                  moveMessage(section.sectionId, inboxId);
                  setMovePopoverVisibility(false);
                  setActionPopoverVisibility(false);
                }}
              >
                {section.sectionName}
              </p>
            );
          },
        )}
      </div>
      <div className='new-section-form'>
        <label onClick={() => setSectionFieldVisible(true)}
               style={{
                 color: sectionFieldVisible ? '#376af5' : '#666',
                 cursor: sectionFieldVisible ? 'auto' : 'pointer',
               }}>+ New Section</label>
        {sectionFieldVisible && <>
          <input
            id='new-section'
            type='text'
            placeholder='Name'
            value={newSectionName}
            onChange={e => {
              setNewSectionName(e.target.value);
            }}
          />
          <SubmitButton
            disable={newSectionName.length ? false : true}
            text='create'
            loading={btnLoading}
            onClick={createSectionAndMove}
          /></>}
      </div>
    </StyledMoveMessageContent>
  );
};

export default MoveMessagePopoverContent;
