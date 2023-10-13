import styled from "styled-components";

export const EventListContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 4rem;
    min-height: 100vh;
  }
`;

export const EventList = styled.section`
  display: grid;
  flex: 1;
  width: 100%;
  grid-template-columns: repeat(2, minmax(300px, 350px));
  row-gap: 1rem;
  column-gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, auto);
  }
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

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 0rem;
  }
`;

export const SpinnerAlignment = styled.div`
  margin-top: 3rem;
`;
