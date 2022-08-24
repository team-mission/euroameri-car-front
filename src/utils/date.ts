export const formatDate = (date: string | undefined) => {
  if (date) {
    const dateData = new Date(date);

    const setTwoDigit = (time: string | number) => `0${time}`.slice(-2);
    const year = setTwoDigit(dateData.getFullYear());
    const month = setTwoDigit(dateData.getMonth() + 1);
    const day = setTwoDigit(dateData.getDate());
    const hour = setTwoDigit(dateData.getHours());
    const min = setTwoDigit(dateData.getMinutes());
    return `${year}/${month}/${day} ${hour}:${min}`;
  }

  return undefined;
};
