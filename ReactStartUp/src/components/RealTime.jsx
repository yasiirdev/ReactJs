import { useEffect, useState} from "react";

export const Time = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const intarvalId = setInterval(() => {
      setTime(new Date()); // new Date is not an reactive value so 
    }, 1000);

    return () =>{
      clearInterval(intarvalId);  
    }
  },[])
    return (
      <>
        <div>{`date ${time.toLocaleDateString("en-US")} time ${time.toLocaleTimeString("en-US")} `}</div>
      </>
    );
}