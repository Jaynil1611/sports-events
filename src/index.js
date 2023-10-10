import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EventsProvider } from "./contexts/eventsContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  // </React.StrictMode>
);
