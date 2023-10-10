import styled from "styled-components";

export const EventListContainer = styled.section`
  display: flex;
  padding: 4rem;
  gap: 2rem;
  min-height: 100vh;
`;

export const EventList = styled.section`
  display: grid;
  flex: 1;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
`;

export const EventListTitle = styled.h2`
  text-align: center;
  margin: 0rem;
  padding: 0rem;
  margin-bottom: 1rem;
`;

export const EventListWrapper = styled.div`
  border: 1px solid lightgray;
  padding: 1.5rem;
  width: 100%;
`;
