import React, { useEffect } from 'react';

export const Thumb = ({ selected, onClick, imgSrc, setImgToDownloadURL }) => {
  useEffect(() => {
    setImgToDownloadURL && setImgToDownloadURL(imgSrc);
  }, [selected]);

  return (
    <div
      className={`embla__slideThumb embla__slide--thumb ${
        selected ? 'is-selected' : ''
      }`}
    >
      <button
        onClick={onClick}
        className={`embla__slide__inner embla__slide__inner--thumb ${
          selected ? 'is-image-selected ' : ''
        }`}
        type="button"
      >
        <img
          className="embla__slide__thumbnail"
          src={imgSrc}
          alt="A cool cat."
        />
      </button>
    </div>
  );
};
