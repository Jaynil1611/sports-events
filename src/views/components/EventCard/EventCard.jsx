import React from "react";
import {
  EventCardActions,
  EventCardCategory,
  EventCardContainer,
  EventCardContent,
  EventCardDivider,
  EventCardTitle,
} from "./styles";
import { convertDateToTime } from "../../../utils/dateUtils";

export const EventCard = ({
  id,
  children,
  event_name,
  event_category,
  start_time,
  end_time,
  isDisabled,
}) => {
  const start = convertDateToTime(start_time);
  const end = convertDateToTime(end_time);

  return (
    <EventCardContainer isDisabled={isDisabled}>
      <EventCardCategory>{event_category?.[0]}</EventCardCategory>
      <EventCardDivider />
      <EventCardContent>
        <EventCardTitle>{event_name}</EventCardTitle>
        <div>({event_category})</div>
        <div>
          {start} - {end}
        </div>
        <EventCardActions>{children}</EventCardActions>
      </EventCardContent>
    </EventCardContainer>
  );
};
