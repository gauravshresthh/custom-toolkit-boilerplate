import styled from 'styled-components';

export const StyledTopNavbar = styled.div`
  height: 52px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 28px;
  .top-navbar-menu {
    display: flex;
    align-items: center;
  }
  .anydone-logo {
    width: 100%;
    justify-content: left;
  }
  .search-wrapper {
    width: 100%;
    justify-content: center;
  }
  .profile-wrapper {
    width: 100%;
    justify-content: flex-end;
  }
  .account-wrapper {
    margin-right: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .account-title {
    color: #666;
    margin: 0 6px;
  }

  @media only screen and (max-width: 600px) {
    .account-wrapper {
      margin-right: 10px;
    }
  }
`;

export const TopNavbarPopoverContent = styled.div`
  background: #fff;
  padding: 5px 0;
  .super-admin-list {
    padding: 5px 10px;
    background: #fff;
    cursor: pointer;
    :hover {
      background: #f0f0f0;
    }
    .super-admin-name {
      padding-left: 8px;
    }
  }
`;
