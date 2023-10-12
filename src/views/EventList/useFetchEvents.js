import { useEffect, useState } from "react";
import axios from "axios";
import { useEventsContext } from "../../contexts/EventsContext";
import { actions } from "../../reducers/Actions";
import { MOCK_EVENT_URL } from "./constants";
import { transformResponseData } from "./utils";

export const useFetchEvents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { dispatch } = useEventsContext();

  const fetchAllEvents = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await axios.get(MOCK_EVENT_URL);
      dispatch({
        type: actions.SET_ALL_EVENTS,
        payload: transformResponseData(response.data),
      });
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return { isLoading, isError, refetch: fetchAllEvents };
};