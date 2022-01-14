import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import { sidebarMenu } from '../../../containers/Layout/helper';
import history from '../../../utils/history';

const StyledSideNavbar = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 52px);
  background: #fff;
  width: 90px;
  border-right: 1px solid #f0f0f0;
  align-items: center;
  padding-top: 20px;

  .sidebar-icon-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    cursor: pointer;
    /* border: 2px solid green; */
  }
`;

export const IconWrapper = styled.div`
  /* border: 2px solid red; */
  position: relative;
`;

export const CountWrapper = styled.div`
  color: white;
  font-size: 10px;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #376af5;
  top: -7.5px;
  right: -10px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SideNavbar({ props }) {
  useEffect(() => {
    props.getActivityLogCount();
  }, [props.selectedSuperAdmin]);

  return (
    <StyledSideNavbar>
      {sidebarMenu(props).map(singleMenu => (
        <Tooltip key={singleMenu.id} title={singleMenu.name} placement='right'>
          <div
            className='sidebar-icon-wrapper'
            key={singleMenu.id}
            onClick={() => {
              props.setIsSearching(false);
              history.push(singleMenu.url);
            }}
          >
            <IconWrapper>
              {singleMenu.svg}
              {singleMenu && singleMenu.count > 0 && (
                <CountWrapper>
                  {singleMenu.count > 9 ? `9+` : singleMenu.count}
                </CountWrapper>
              )}
            </IconWrapper>
          </div>
        </Tooltip>
      ))}
    </StyledSideNavbar>
  );
}
