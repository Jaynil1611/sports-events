import { createContext, useContext, useMemo, useReducer } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { initialState } from "./initialState";

export const EventsContext = createContext();

export const useEventsContext = () => {
  return useContext(EventsContext);
};

export const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);

  const { state: memoizedState } = useMemo(() => ({ state }), [state]);

  return (
    <EventsContext.Provider value={{ ...memoizedState, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};
