import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid green; */
  flex: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: #f9fbfc;
`;

export const ListWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  /* border: 2px solid green; */
  flex: 1;
  max-height: calc(100vh - 130px);
  display: flex;
  overflow-y: auto;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`;

export const NoData = styled.div`
  text-align: center;
  padding: 20px 0;
`;
