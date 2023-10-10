export const transformResponseData = (response) => {
  return response.map((event) => ({
    ...event,
    start_time: new Date(event.start_time),
    end_time: new Date(event.end_time),
  }));
};

export const isEventDisabled = (selectedEvents, currentEvent) => {
  for (let i = 0; i < selectedEvents.length; i++) {
    const event = selectedEvents[i];
    if (
      event.start_time < currentEvent.end_time &&
      event.end_time > currentEvent.start_time
    ) {
      return true;
    }
  }
};
