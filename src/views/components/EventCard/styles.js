import styled, { css } from "styled-components";

export const EventCardContainer = styled.div(
  ({ isDisabled }) => css`
    border: 1px solid cyan;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    gap: 1.5rem;

    background-color: ${isDisabled ? "lightgray" : ""};
  `
);

export const EventCardCategory = styled.div`
  display: flex;
  align-self: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const EventCardDivider = styled.div`
  width: 2px;
  background-color: black;
`;

export const EventCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const EventCardTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const EventCardActions = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 0.5rem;
`;
