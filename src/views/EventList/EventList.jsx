import React from "react";
import useFetchEvents from "./useFetchEvents";
import { AllEvents } from "./AllEvents";
import { SelectedEvents } from "./SelectedEvents";
import { EventListContainer } from "./styles";

export const EventList = () => {
  useFetchEvents();

  return (
    <EventListContainer>
      <AllEvents />
      <SelectedEvents />
    </EventListContainer>
  );
};
