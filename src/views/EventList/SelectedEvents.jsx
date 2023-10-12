import React from "react";
import { EventList, EventListTitle, EventListWrapper } from "./styles";
import { useEventsContext } from "../../contexts/EventsContext";
import { eventActionMap } from "./constants";
import { actions } from "../../reducers/Actions";
import { EventCard } from "../components/EventCard/EventCard";
import { Button } from "../components/Button/Button";

export const SelectedEvents = () => {
  const { selectedEvents, dispatch } = useEventsContext();

  const handleSelectedEventClick = (e) => {
    const { eventId, action } = e.target.dataset;

    if (action === eventActionMap.REMOVE) {
      dispatch({ type: actions.DESELECT_EVENT, payload: Number(eventId) });
    }
  };

  return (
    <EventListWrapper>
      <EventListTitle>Selected Events</EventListTitle>
      <EventList onClick={handleSelectedEventClick}>
        {selectedEvents.map((event) => {
          return (
            <EventCard key={event.id} {...event}>
              <Button
                data-event-id={event.id}
                data-action={eventActionMap.REMOVE}
              >
                Remove
              </Button>
            </EventCard>
          );
        })}
      </EventList>
    </EventListWrapper>
  );
};
