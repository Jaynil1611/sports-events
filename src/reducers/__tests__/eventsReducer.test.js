import { mockEvents } from "../../mocks/mockData";
import { actions } from "../Actions";
import { eventsReducer } from "../eventsReducer";

const { SET_ALL_EVENTS, SELECT_EVENT, DESELECT_EVENT } = actions;

describe("Events Reducer Test", () => {
  test("should set all events when SET_ALL_EVENTS action is dispatched", () => {
    const eventsState = { events: [], selectedEvents: [] };

    const action = {
      type: SET_ALL_EVENTS,
      payload: mockEvents,
    };

    const { events } = eventsReducer(eventsState, action);

    expect(events).toEqual(mockEvents);
  });

  test("should update state when SELECT_EVENT action is dispatched", () => {
    const eventsState = { events: mockEvents, selectedEvents: [] };

    const action = {
      type: SELECT_EVENT,
      payload: mockEvents[0].id,
    };

    const { events, selectedEvents } = eventsReducer(eventsState, action);

    expect(events).toEqual([]);

    expect(selectedEvents).toEqual(mockEvents);
  });

  test("should update state when DESELECT_EVENT action is dispatched", () => {
    const eventsState = { events: [], selectedEvents: mockEvents };

    const action = {
      type: DESELECT_EVENT,
      payload: mockEvents[0].id,
    };

    const { events, selectedEvents } = eventsReducer(eventsState, action);

    expect(events).toEqual(mockEvents);

    expect(selectedEvents).toEqual([]);
  });
});
