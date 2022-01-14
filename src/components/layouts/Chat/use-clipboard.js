import { useState } from 'react';
import {
  formattedData,
  funcToMapMentionIdToName,
  funcToMapMentionIdToNameAndReturnStr,
} from '../../views/Message/DetailView/Typing/helper';

export function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = value => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = valueToCopy => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch(err => setError(err));
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}

export function sendMessageObject(message) {
  switch (message.messageType) {
    case 'TEXT':
      if(message &&
        message.text){
        console.log("copied",funcToMapMentionIdToNameAndReturnStr(
          formattedData(message),
          message.text.message,
          message.hasMentions,
        ));
        return funcToMapMentionIdToNameAndReturnStr(
          formattedData(message),
          message.text.message,
          message.hasMentions,
        );
      }
      break;
    case 'LINK':
      if(message &&
        message.link){
        return funcToMapMentionIdToNameAndReturnStr(
          formattedData(message),
          message.link.message,
          message.hasMentions,
        );
      }
      break;
    case 'FILE':
      return message.attachment.url;
    default:
      return '';
  }
}