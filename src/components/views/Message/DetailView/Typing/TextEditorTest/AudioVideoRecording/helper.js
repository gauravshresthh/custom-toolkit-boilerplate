export const stopTracks = stream => {
  stream && stream.getTracks().forEach(track => track.stop());
};

export const getUserMedia = constrants => {
  if (navigator && navigator.mediaDevices)
    return navigator.mediaDevices.getUserMedia(constrants);
  return null;
};
