import { useEffect, useState } from "react";

export const  useOnline =() => {
  const [isonline, setisonline] = useState(true);

  useEffect(() => {
    // setUp function
    const Handleonline = () => {
      setisonline(true);
    };

    const Handleoffline = () => {
      setisonline(false);
    };

    window.addEventListener("online", Handleonline);
    window.addEventListener("offline", Handleoffline);

    return () => {
      // cleanUp function
      window.removeEventListener("online", Handleonline);
      window.removeEventListener("offline", Handleoffline);
    };
  }, []); // dependencis is empty array so useEffect render onces

  return isonline;
}
