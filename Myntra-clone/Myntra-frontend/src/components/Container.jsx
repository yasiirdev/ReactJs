import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFetching, setItems } from "../store/apiSlice";
import { setfetchImage } from "../store/mainImageSlice";

function Container() {
  const dispatch = useDispatch();

  //  set fetch vale to start
  dispatch(setFetching(false));
  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json();
      })
      .then(({ items }) => {
        // set fetch value to end
        dispatch(setFetching(true));
        dispatch(setItems(items[0]));  // dispatch is a reacive value
        dispatch(setfetchImage(items[1][0]));
      });
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return <></>;
}

export default Container;
