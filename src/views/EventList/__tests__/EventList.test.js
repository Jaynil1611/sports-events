import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { mockEvents } from "../../../mocks/mockData";
import { apiHandlers } from "../../../mocks/handlers";
import { EventsContext } from "../../../contexts/eventsContext";
import { EventList } from "../EventList";

const server = setupServer(...apiHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const state = { events: mockEvents, selectedEvents: [] };
const dispatch = jest.fn();

const renderApp = () => {
  render(
    <EventsContext.Provider value={{ ...state, dispatch }}>
      <EventList />
    </EventsContext.Provider>
  );
};

describe("Event List", () => {
  test("should render initial events", async () => {
    renderApp();

    expect(
      screen.getByRole("heading", { name: /all events/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /selected events/i })
    ).toBeInTheDocument();

    expect(await screen.findByText(/butterfly/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /select/i })).toBeInTheDocument();
  });

  test("should allow user to select any event from available events", async () => {
    renderApp();

    userEvent.click(await screen.findByRole("button", { name: /select/i }));

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: 1,
      type: "SELECT_EVENT",
    });
  });
});
