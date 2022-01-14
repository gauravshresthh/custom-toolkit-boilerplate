import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  cursor: pointer !important;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.06);
  z-index: 9999;

  &:hover {
    background-color: #d8d8d8;
  }

  .mention {
    color: #376af5;
    background-color: #f0fbff;
    padding: 2px;
    text-decoration: none;
    z-index: 9999;
  }

  .mentionSuggestions {
    border: 1px solid #f1f1f1;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    transform-origin: 50% 0%;
    transform: scaleY(0);
    width: 100%;
    max-width: 270px;
    max-height: 150px;
    background: white;
    z-index: 100;
    border-radius: 4px;
    min-width: 220px !important;
    box-shadow: 0 4px 4px rgb(151 151 151 / 25%);
    margin: 0 0 15px 0;
    z-index: 999;
  }

  .mentionSuggestions::-webkit-scrollbar {
    width: 10px;
    z-index: 9999;
  }

  /* Track */
  .mentionSuggestions::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
    z-index: 9999;
  }

  /* Handle */
  .mentionSuggestions::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
    z-index: 9999;
  }

  /* Handle on hover */
  .mentionSuggestions::-webkit-scrollbar-thumb:hover {
    background: #999;
    z-index: 9999;
  }

  .mentionSuggestionsEntryContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 8px 10px;
    z-index: 9999;
  }

  .mentionSuggestionsEntryContainerLeft,
  .mentionSuggestionsEntryContainerRight {
    display: table-cell;
    vertical-align: middle;
  }

  .mentionSuggestionsEntryContainerRight {
    width: 100%;
    padding-left: 8px;
  }

  .mentionSuggestionsEntry {
    padding: 7px 10px 3px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
  }

  .mentionSuggestionsEntry:active {
    background-color: #cce7ff;
  }

  .mentionSuggestionsEntryFocused {
    composes: mentionSuggestionsEntry;
    background-color: #f1f1f1;
  }

  .mentionSuggestionsEntryText,
  .mentionSuggestionsEntryTitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mentionSuggestionsEntryText {
    z-index: 9999;

    font-size: 15px;
  }

  .mentionSuggestionsEntryTitle {
    font-size: 80%;
    color: #a7a7a7;
  }

  .mentionSuggestionsEntryAvatar {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
