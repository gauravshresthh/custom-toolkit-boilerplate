export const checkIfParticipantExists = (participants, id) => {
  if (participants) {
    return (
      participants &&
      participants.some(function(el) {
        if (el.accountid === id){
          return true;
        }
      })
    );
  }
};
