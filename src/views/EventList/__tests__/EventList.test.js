import { render, screen } from "@testing-library/react";
import { mockEvents } from "../../../mocks/mockData";
import { EventsContext } from "../../../contexts/eventsContext";
import { EventList } from "../EventList";
import userEvent from "@testing-library/user-event";

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

    expect(screen.getByText(/butterfly/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /select/i })).toBeInTheDocument();
  });

  test("should allow user to select any event from available events", async () => {
    renderApp();

    userEvent.click(screen.getByRole("button", { name: /select/i }));

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: 1,
      type: "SELECT_EVENT",
    });
  });
});
