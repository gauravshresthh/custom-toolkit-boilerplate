import React from 'react';

import LocalDb from '../../../../localStorage';

import PopoverModal from '../../../elements/PopoverModal';
import ConfirmationModal from '../../../elements/ConfirmationModal';

import {
  Container,
  ParticipantWrapper,
  Main,
  OptionContainer,
  InnerOptionWrapper,
  IconButton,
  ParticipantCss,
  OptionsWrapper,
  Options,
  IconWrapper,
} from './style';

import HeaderIcons from '../../../../assets/images/imageCarasouel/HeaderIcons';

import emptyProfile from '../../../../assets/images/common/empty-profile.svg';

function extractName(name) {
  var rx = /([^\/]+$)/g;
  var arr = rx.exec(name);
  return arr[1];
}

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement('a');
  link.href = imageURL;

  link.download = await extractName(imageSrc);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Header({
  showHeader,
  senderAccountObj,
  onClose,
  imgToDownloadURL,
  toggleForwardMessageModal,
  forwardMessage,
  selectedMsg,
  selectedParticipants,
  from,
  setFrom,
  deleteAttachment,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  rtcMessageIdToDelete,
  attchmentIdToDelete,
  whereIsTheDeleteFrom,
  imgArray,
  selectedImgIndex,
}) {
  function renderDeleteButton(
    whereIsTheDeleteFrom,
    senderAccountObj,
    imgArray,
  ) {
    switch (whereIsTheDeleteFrom) {
      case 'chat':
        return (
          senderAccountObj &&
          senderAccountObj.accountId === LocalDb.getUserAccountId()
        );

      case 'rightside':
        return (
          imgArray[selectedImgIndex].senderAccountObj.accountId ===
          LocalDb.getUserAccountId()
        );

      case 'overall':
        return (
          imgArray[selectedImgIndex].senderAccountObj.accountId ===
          LocalDb.getUserAccountId()
        );
    }
  }

  function renderImage(whereIsTheDeleteFrom, senderAccountObj, imgArray) {
    switch (whereIsTheDeleteFrom) {
      case 'chat':
        return (
          (senderAccountObj && senderAccountObj.profilePic) || emptyProfile
        );

      case 'rightside':
        return (
          (imgArray[selectedImgIndex].senderAccountObj.profilePic &&
            imgArray[selectedImgIndex].senderAccountObj.profilePic) ||
          emptyProfile
        );

      default:
        return emptyProfile;
    }
  }
  return (
    <>
      <Container>
        <Main showHeader={showHeader}>
          {showHeader !== 'dontShow' && (
            <ParticipantWrapper>
              <img
                src={renderImage(
                  whereIsTheDeleteFrom,
                  senderAccountObj,
                  imgArray,
                )}
                alt={
                  (senderAccountObj && senderAccountObj.fullName) ||
                  (whereIsTheDeleteFrom &&
                    imgArray[selectedImgIndex].senderAccountObj.fullName)
                }
              />

              <span>
                {(senderAccountObj && senderAccountObj.fullName) ||
                  (whereIsTheDeleteFrom &&
                    imgArray[selectedImgIndex].senderAccountObj.fullName)}
              </span>
            </ParticipantWrapper>
          )}

          {showHeader !== 'dontShow' && (
            <OptionContainer>
              <InnerOptionWrapper>
                <PopoverModal
                  trigger="click"
                  placement="bottomRight"
                  contentWidth="146px"
                  contentTopMargin="0px"
                  maxHeight="auto"
                  // addCSS={PopoverCss}
                  popoverContent={
                    <OptionsWrapper>
                      <Options
                        onClick={() => {
                          toggleForwardMessageModal(true);
                          setFrom(1);
                        }}
                      >
                        <IconWrapper>
                          <HeaderIcons.forwardIcon />
                        </IconWrapper>
                        <span>Forward</span>
                      </Options>
                      <Options
                        onClick={() => {
                          downloadImage(imgToDownloadURL);
                          // onClose();
                        }}
                      >
                        <IconWrapper>
                          <HeaderIcons.downloadIcon />
                        </IconWrapper>
                        <span>Download</span>
                      </Options>

                      {/* {renderDeleteButton(
                        whereIsTheDeleteFrom,
                        senderAccountObj,
                        imgArray,
                      ) && (
                        <Options
                          onClick={() => setOpenDeleteAttachmentModal(true)}
                        >
                          <IconWrapper>
                            <HeaderIcons.deleteIcons />
                          </IconWrapper>
                          <span>Delete</span>
                        </Options>
                      )} */}
                    </OptionsWrapper>
                  }
                >
                  <IconWrapper>
                    <HeaderIcons.HorizontalThreeDots />
                  </IconWrapper>
                </PopoverModal>
              </InnerOptionWrapper>
            </OptionContainer>
          )}

          <IconButton
            type="button"
            // onClick={onClose}
            onClick={() => {
              onClose();
              setFrom(0);
            }}
          >
            <HeaderIcons.closeIcon />
          </IconButton>
        </Main>
      </Container>

      {/* modal for delete attachment */}
      <ConfirmationModal
        visibility={openDeleteAttachmentModal}
        onClick={() => {
          console.log(
            'what is here',
            rtcMessageIdToDelete,
            attchmentIdToDelete,
          );
          rtcMessageIdToDelete &&
            attchmentIdToDelete &&
            deleteAttachment(rtcMessageIdToDelete, attchmentIdToDelete);

          setOpenDeleteAttachmentModal(false);
        }}
        closeModal={() => setOpenDeleteAttachmentModal(false)}
        actionLabel="Delete"
        cancelLabel="Cancel"
        width="400px"
        title="Confirmation"
        content="Are you sure you want to delete this attachment?"
      />
    </>
  );
}

export default Header;
