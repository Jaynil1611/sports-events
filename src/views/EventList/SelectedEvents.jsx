import React, { useMemo } from "react";
import { EventList, EventListTitle, EventListWrapper } from "./styles";
import { useEventsContext } from "../../contexts/eventsContext";
import { eventActionMap } from "./constants";
import { actions } from "../../reducers/Actions";
import { EventCard } from "../components/EventCard/EventCard";
import { Button } from "../components/Button/Button";

export const SelectedEvents = () => {
  const { selectedEvents, dispatch } = useEventsContext();

  const sortedEvents = useMemo(
    () => selectedEvents.sort((e1, e2) => e1.start_time - e2.start_time),
    [selectedEvents.length]
  );

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
        {sortedEvents.map((event) => {
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
