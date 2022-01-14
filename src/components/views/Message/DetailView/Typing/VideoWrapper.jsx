import React from 'react';

const VideoWrapper = ({ selectedVideoList, removeSelectedVideo }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '35px',
        left: '10px',
        zIndex: '100',
      }}
    >
      {selectedVideoList &&
        selectedVideoList.map(video => (
          <span>
            <button
              onClick={() => {
                removeSelectedVideo(video.videoId);
              }}
              style={{
                position: 'absolute',
                bottom: '45px',
                right: '-15px',
                cursor: 'pointer',
                border: 'none',
                background: '#666',
                color: '#fff',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                fontWeight: 'bold'
              }}
            >
              x
            </button>
            <video height="60" controls style={{ marginLeft: '5px' }}>
              <source src={video.url} />
            </video>
          </span>
        ))}
    </div>
  );
};

export default VideoWrapper;
