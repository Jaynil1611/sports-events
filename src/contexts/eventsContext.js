import { createContext, useContext, useReducer } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { initialState } from "./initialState";

export const EventsContext = createContext();

export const useEventsContext = () => {
  return useContext(EventsContext);
};

export const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);

  return (
    <EventsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};
