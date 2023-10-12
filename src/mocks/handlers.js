import { rest } from "msw";
import { MOCK_EVENT_URL } from "../views/EventList/constants";
import { mockEvents } from "./mockData";

export const apiHandlers = [
  rest.get(MOCK_EVENT_URL, (_, res, ctx) => {
    return res(
      ctx.json({
        status_code: 200,
        data: mockEvents,
      })
    );
  }),
];
