export const addSelectedEvent = ({ events, selectedEvents, selectedId }) => {
  const updatedEvents = events.filter((event) => event.id !== selectedId);
  const event = events.find((event) => event.id === selectedId);
  const updatedSelectedEvents = selectedEvents.concat(event);

  return { events: updatedEvents, selectedEvents: updatedSelectedEvents };
};

export const removeSelectedEvent = ({ events, selectedEvents, selectedId }) => {
  const updatedSelectedEvents = selectedEvents.filter(
    (event) => event.id !== selectedId
  );
  const event = selectedEvents.find((event) => event.id === selectedId);
  const updatedEvents = events.concat(event);

  return { events: updatedEvents, selectedEvents: updatedSelectedEvents };
};
