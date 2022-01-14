import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { Thumb } from './EmblaThumbnails';
import { PrevButton, NextButton } from './prevAndNextButtons';
import '../../../../assets/styles/css/embla/embla.css';

const EmblaCarousel = ({
  imgArray,
  setSelectedMsg,
  setImgToDownloadURL,
  setSelectedAttachmentToDelete,
  messageObj,
  setRtcMessageIdToDelete,
  setAttachmentIdToDelete,
  whereIsTheDeleteFrom,
  setSelectedImgIndex,
}) => {
  console.log('what is rtcMessageIdToDelete', messageObj);
  console.log({ imgArray });
  const media = imgArray;
  const mediaByIndex1 = index =>
    media[index % media.length].url || media[index % media.length];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    selectedClass: '',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onThumbClick = useCallback(
    index => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
      setSelectedImgIndex(index);
    },

    [embla, emblaThumbs],
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    embla.selectedScrollSnap();
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  const onInit = useCallback(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, onSelect, setSelectedIndex]);

  useEffect(() => {
    setSelectedImgIndex && setSelectedImgIndex(0);
    setSelectedMsg && setSelectedMsg(mediaByIndex1(0));
    setImgToDownloadURL && setImgToDownloadURL(mediaByIndex1(selectedIndex));
    if (whereIsTheDeleteFrom == 'chat') {
      console.log('does it go here');
      setRtcMessageIdToDelete &&
        setRtcMessageIdToDelete(messageObj && messageObj.rtcMessageId);
      setAttachmentIdToDelete &&
        setAttachmentIdToDelete(imgArray && imgArray[0].attachmentid);
    } else if (whereIsTheDeleteFrom == 'overall') {
      setRtcMessageIdToDelete &&
        setRtcMessageIdToDelete(messageObj && messageObj[0].rtcMessageId);
      setAttachmentIdToDelete &&
        setAttachmentIdToDelete(messageObj && messageObj[0].attachmentid);
    }
    // right side media bata ho bhane
    else {
      setRtcMessageIdToDelete &&
        setRtcMessageIdToDelete(imgArray && imgArray[0].rtcMessageId);
      setRtcMessageIdToDelete &&
        setAttachmentIdToDelete &&
        setAttachmentIdToDelete(imgArray && imgArray[0].attachmentid);
    }

    if (!embla) return;
    onInit();
    onSelect();
    embla
      .on('resize', embla.reInit)
      .on('select', onSelect)
      .on('reInit', onInit);
  }, [embla, onSelect, onInit]);

  return (
    <>
      <div className="container">
        <div className="embla">
          <div className="embla__viewport" ref={mainViewportRef}>
            <div className="embla__container">
              {imgArray &&
                imgArray.map((img, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__inner">
                      <img
                        className="embla__slide__img"
                        src={mediaByIndex1(index)}
                        alt="anydone image"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>

      <div className="emblaContainer">
        <div className="embla--thumb">
          {/* <div className="embla embla--thumb"> */}
          <div className="embla__viewportThumb" ref={thumbViewportRef}>
            <div className="embla__container embla__container--thumb">
              {imgArray &&
                imgArray.map((img, index) => (
                  <Thumb
                    key={index}
                    onClick={() => {
                      setSelectedImgIndex(index);
                      onThumbClick(index);
                      setImgToDownloadURL &&
                        setImgToDownloadURL(mediaByIndex1(index));
                      setSelectedMsg && setSelectedMsg(mediaByIndex1(index));
                      if (whereIsTheDeleteFrom == 'chat') {
                        setRtcMessageIdToDelete &&
                          setRtcMessageIdToDelete(
                            messageObj && messageObj[index].rtcMessageId,
                          );
                        setAttachmentIdToDelete &&
                          setAttachmentIdToDelete(
                            messageObj && messageObj[index].attachmentid,
                          );
                      } else if (whereIsTheDeleteFrom == 'overall') {
                        setRtcMessageIdToDelete &&
                          setRtcMessageIdToDelete(
                            messageObj && messageObj[index].rtcMessageId,
                          );
                        setAttachmentIdToDelete &&
                          setAttachmentIdToDelete(
                            messageObj && messageObj[index].attachmentid,
                          );
                      }
                      // right side media bata ho bhane
                      else {
                        setRtcMessageIdToDelete &&
                          setRtcMessageIdToDelete(
                            imgArray && imgArray[index].rtcMessageId,
                          );
                        setAttachmentIdToDelete &&
                          setAttachmentIdToDelete(
                            imgArray && imgArray[index].attachmentid,
                          );
                      }
                    }}
                    selected={index === selectedIndex}
                    imgSrc={mediaByIndex1(index)}
                    setImgToDownloadURL={setImgToDownloadURL}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
