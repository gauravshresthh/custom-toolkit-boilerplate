import React, { useState } from 'react';
import Styled from 'styled-components';
import SearchBar from '../../../../elements/SearchBar';
import Loader from '../../../../elements/Loader';
import { showDateAccordingly } from '../../../../../utils/dateHelper';
import {
  formattedData,
  funcToMapMentionIdToNameAndReturnStr,
} from '../../../../views/Message/DetailView/Typing/helper';
import Highlighter from 'react-highlight-words';

const StyledSearchContent = Styled.div`
    .search-bar-wrap{
        padding: 8px 15px 0 15px;
    }
    .search-wrapper{
    height:calc(100vh - 180px);
    }
    .search-results{
        margin-top: 10px;
    }

    .highlight-class{
      color:#376af5;
      background:inherit;
      padding:0;
    }
    .result-row{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 14px;
        border-bottom: 1px solid #E7E7E7;
        cursor:pointer;
        :hover{
        background:#f0f0f0;
        }
        .left{
            display: flex;
            .name{
              padding-right:4px;
              width: 115px;
            }
        }
        .text{
            width: 115px;
            color:#666;
        }

        .time {
        font-size:10px;
        color:#666;
        display:flex;
        align-items:center;
        }
    }
`;

const SearchContent = ({
                         searchMessage,
                         searchedMsgList,
                         searchMessageLoader,
                         refId,
                         clearSearchedList,
                         setIsSearching,
                         setSelectedMessageIdToScrollTo
                       }) => {
  const [searchedValue, setSearchedValue] = useState('');
  return (
    <StyledSearchContent>
      <div className='search-bar-wrap'>
        <SearchBar
          value={searchedValue}
          onChange={(e) => {
            setSearchedValue(e.target.value);
            e.target.value ? searchMessage(refId, e.target.value) : clearSearchedList();
          }}
          width='100%' />
      </div>
      <div className='search-wrapper withScrollbar'>
        {searchMessageLoader ? <Loader width='28px' /> : <div className='search-results'>
          {searchedMsgList &&
            searchedMsgList.sort((a, b) => b.sentAtTimestamp - a.sentAtTimestamp).map(single => {
              return (
                <div
                  key={single.clientId}
                  className='result-row'
                  onClick={() => {
                    setIsSearching(single.rtcMessageId);
                    setSelectedMessageIdToScrollTo(single)
                  }}>
                  <div className='left'>
                    <p className='name text-truncate'>{single.senderAccountObj.fullName}: </p>
                    <p className='text text-truncate'>
                      <Highlighter
                        highlightClassName='highlight-class'
                        searchWords={[searchedValue]}
                        autoEscape={true}
                        textToHighlight={funcToMapMentionIdToNameAndReturnStr(
                          formattedData(single),
                          single.text ?
                            single.text.message :
                            single.link ?
                              single.link.message
                              : single.image ?
                                single.image.caption :
                                single.audio ? single.audio.caption :
                                  single.video ? single.video.caption :
                                    single.attachment ? single.attachment.caption : '',
                          single.hasMentions,
                        ).replace(new RegExp('<[^>]*>', 'g'), '').replace(new RegExp('&nbsp;', 'g'), '')}
                      />
                    </p>
                  </div>
                  <p className='time'>{showDateAccordingly(single.sentAtTimestamp)}</p>
                </div>
              );
            })}
        </div>}
      </div>
    </StyledSearchContent>
  );
};

export default SearchContent;
