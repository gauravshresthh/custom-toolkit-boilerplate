import styled from 'styled-components';

export const MapWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 350px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const DetailWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 350px;


  .search-wrapper {
    padding: 0 25px;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    input {
      border: none;
      width: 100%;
      padding: 0;
      font-size: 16px;
    }

    svg {
      cursor: pointer;
    }
  }

  .action-wrapper {
    padding: 0 25px;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    svg {
      cursor: pointer;
    }
  }
`;

export const MapStyle = styled.div`
  width: 100%;
  height: ${props => props.isFullScreen ? '100vh' : '400px'};
  position: relative;
`;

export const LocationListStyle = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;

  .mr-auto {
    margin-right: auto;
  }

  .title {
    color: #333333;
    font-size: 16px;
    font-weight: 500;
    margin-right: auto;
    padding-right: 10px;
  }

  .use-this-btn {
    color: #376af5;
    cursor: pointer;
    width: fit-content;
    padding-top: 5px;
  }

  .lat-lng {
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    color: #666666;

    .value {
      color: #333333;
      padding-left: 4px;
    }
  }

  .secondary-title {
    color: #666666;
  }
`;

export const PlaceSuggestionStyle = styled.div`
  display: flex;

  .place-detail-wrapper {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .secondary-text {
      color: #666666;
      font-size: 13px;
    }
  }
`;
