import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import emptyProfile from '../../../assets/images/common/empty-profile.svg';

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: ${({ border }) => (border === 1 ? '50%' : 'none')};
  border: ${({ border }) => (border === 1 ? '2px solid white' : 'none')};

  img {
    width: 100%;
    border-radius: ${props => props.borderRadius || '50%'};
    object-fit: cover;
    border: 1px solid #f0f0f0;
    background: #f0f0f0;
  }
  .user-status {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid #fff;
    background: ${props => (props.isActive ? 'green' : 'red')};
  }
`;

const Image = ({
  src,
  alt,
  width,
  height,
  isActive,
  showStatus,
  borderRadius,
  border = 0,
}) => (
  <StyledImage
    style={{ width, height, minWidth: width, minHeight: height }}
    isActive={isActive}
    borderRadius={borderRadius}
    border={border}
  >
    <img
      onError={e => (e.target.src = emptyProfile)}
      className="chat-profile-image"
      src={src || emptyProfile}
      alt={alt || 'icon'}
    />
    <div className="user-status" hidden={!showStatus} />
  </StyledImage>
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  isActive: PropTypes.bool,
  showStatus: PropTypes.bool,
  border: PropTypes.number,
};

export default Image;
