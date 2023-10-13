import React, { useMemo } from "react";
import { toast } from "react-toastify";
import { useEventsContext } from "../../contexts/eventsContext";
import { EventCard } from "../components/EventCard/EventCard";
import { actions } from "../../reducers/Actions";
import { Button } from "../components/Button/Button";
import { MAX_SELECTED_EVENTS, eventActionMap } from "./constants";
import { isEventDisabled } from "./utils";
import { EventList, EventListTitle, EventListWrapper, SpinnerAlignment } from "./styles";
import { Spinner } from "../components/Spinner/Spinner";

export const AllEvents = ({ isEventLoading }) => {
  const { events, selectedEvents, dispatch } = useEventsContext();

  const sortedEvents = useMemo(
    () => events.sort((e1, e2) => e1.start_time - e2.start_time),
    [events.length]
  );

  const handleEventClick = (e) => {
    const { eventId, action } = e.target.dataset;

    if (action === eventActionMap.SELECT) {
      if (selectedEvents.length >= MAX_SELECTED_EVENTS) {
        return toast.error("Only 3 events can be selected");
      }
      dispatch({ type: actions.SELECT_EVENT, payload: Number(eventId) });
    }
  };

  return (
    <EventListWrapper isFullHeight>
      <EventListTitle>All Events</EventListTitle>
      {isEventLoading ? (
        <SpinnerAlignment>
          <Spinner />
        </SpinnerAlignment>
      ) : (
        <EventList onClick={handleEventClick}>
          {sortedEvents.map((event) => {
            const isDisabled = isEventDisabled(selectedEvents, event);
            return (
              <EventCard key={event.id} {...event} isDisabled={isDisabled}>
                <Button
                  data-event-id={event.id}
                  data-action={eventActionMap.SELECT}
                  disabled={isDisabled}
                >
                  Select
                </Button>
              </EventCard>
            );
          })}
        </EventList>
      )}
    </EventListWrapper>
  );
};
