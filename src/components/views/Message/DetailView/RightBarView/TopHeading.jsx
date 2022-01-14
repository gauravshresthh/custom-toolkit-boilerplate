import React from 'react';
import Styled from 'styled-components';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';

const StyledTopHeading = Styled.div`
    display: flex;
    align-items: center;
    height:63px;
    padding:0 14px;
    border-bottom: 1px solid #F0EDF1;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    .close-arrow{
      cursor:pointer;
      svg{
        width: 7px;
        height: 12px;
      }
    }
    .heading-text{
        font-size: 16px;
        color: #333333;
        margin-top: 4px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .cross-icon{
      cursor:pointer;
    }
`;

const TopHeading = ({ headingText, closeRightbar, hasCloseArrow }) => {
  return (
    <StyledTopHeading>
      {!hasCloseArrow ? (
        <p className="close-arrow" onClick={closeRightbar}>
          <CommonIcons.ArrowRight />
        </p>
      ) : null}

      <h4 className="heading-text">{headingText}</h4>
      {hasCloseArrow ? (
        <p className="cross-icon" onClick={closeRightbar}>
          <CommonIcons.CrossIcon />
        </p>
      ) : null}
    </StyledTopHeading>
  );
};

export default TopHeading;
