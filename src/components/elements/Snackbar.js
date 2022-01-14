import { notification } from 'antd';
import React from 'react';
import Image from './Image/Image';

const NotificationType = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const showSuccessNotification = (message, description) => {
  notification[NotificationType.SUCCESS]({
    message,
    description,
  });
};

export const showErrorNotification = (message, description) => {
  notification[NotificationType.ERROR]({
    message,
    description: description || 'Please try again',
  });
};

export const showInfoNotification = (message, description, imageUrl) => {
  notification[NotificationType.INFO]({
    message,
    description,
    maxCount: 4,
    icon: <Image src={imageUrl} width="36px" height="36px" />,
  });
};
