import { actions } from "./Actions";
import { addSelectedEvent, removeSelectedEvent } from "./utils";

export const eventsReducer = (prevState, { type, payload }) => {
  switch (type) {
    case actions.SET_ALL_EVENTS: {
      return {
        ...prevState,
        events: payload,
      };
    }
    case actions.SELECT_EVENT: {
      const { selectedEvents, events } = addSelectedEvent({
        events: prevState.events,
        selectedEvents: prevState.selectedEvents,
        selectedId: payload,
      });
      return {
        ...prevState,
        events,
        selectedEvents,
      };
    }
    case actions.DESELECT_EVENT: {
      const { selectedEvents, events } = removeSelectedEvent({
        events: prevState.events,
        selectedEvents: prevState.selectedEvents,
        selectedId: payload,
      });
      return {
        ...prevState,
        events,
        selectedEvents,
      };
    }
    default:
      return prevState;
  }
};
