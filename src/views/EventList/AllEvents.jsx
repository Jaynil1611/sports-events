import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useEventsContext } from "../../contexts/eventsContext";
import { EventCard } from "../components/EventCard/EventCard";
import { actions } from "../../reducers/Actions";
import { Button } from "../components/Button/Button";
import { MAX_SELECTED_EVENTS, eventActionMap } from "./constants";
import {
  getEventCategories,
  getFilteredCategoryEvents,
  getSearchedEvents,
  isEventDisabled,
} from "./utils";
import {
  EventList,
  EventListTitle,
  EventListWrapper,
  SpinnerAlignment,
} from "./styles";
import { Spinner } from "../components/Spinner/Spinner";

export const AllEvents = ({ isEventLoading }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { events, selectedEvents, dispatch } = useEventsContext();

  const eventCategories = getEventCategories(events);

  const searchedEvents = useMemo(
    () => getSearchedEvents(events, searchQuery),
    [events.length, searchQuery]
  );

  const filteredCategoryEvents = useMemo(
    () => getFilteredCategoryEvents(searchedEvents, selectedCategory),
    [searchedEvents.length, selectedCategory]
  );

  const sortedEvents = useMemo(
    () =>
      filteredCategoryEvents.sort((e1, e2) => e1.start_time - e2.start_time),
    [filteredCategoryEvents.length]
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <EventListWrapper isFullHeight>
      <EventListTitle>All Events</EventListTitle>
      <div>
        Search Event
        <input type="text" onChange={handleSearchChange} value={searchQuery} />
      </div>
      <div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          {eventCategories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
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
