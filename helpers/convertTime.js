export const convertTime = (milliseconds) => {
  if (milliseconds) {
    const seconds = Math.round((milliseconds / 1000) % 60);
    const minutes = Math.floor(seconds / 60);

    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }
};
