import { ToastContainer } from "react-toastify";
import { EventList } from "./views/EventList/EventList";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        role="alert"
        closeOnClick
      />
      <EventList />
    </>
  );
}

export default App;
