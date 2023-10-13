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

export const getSearchedEvents = (eventList, query) => {
  if (query) {
    return eventList.filter((event) =>
      event.event_name.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  return eventList;
};

export const getEventCategories = (eventList) => {
  const categoryMap = eventList.reduce((result, { event_category }) => {
    if (!result[event_category]) {
      result[event_category] = 1;
    }
    return result;
  }, {});
  return Object.keys(categoryMap);
};

export const getFilteredCategoryEvents = (eventList, query) => {
  if (query) {
    return eventList.filter((event) =>
      event.event_category.toLowerCase().includes(query.toLowerCase())
    );
  }
  return eventList;
};
