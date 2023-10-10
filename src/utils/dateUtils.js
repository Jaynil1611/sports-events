export const dateTimeOptions = { hour: "2-digit", minute: "2-digit" };

export const convertDateToTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString([], dateTimeOptions);
};
