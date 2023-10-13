import React from "react";
import { useEventsContext } from "../../contexts/eventsContext";

export const SearchEvent = () => {
  const { events, selectedEvents, dispatch } = useEventsContext();

  return <div>SearchEvent</div>;
};
