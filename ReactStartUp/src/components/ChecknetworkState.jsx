import { useEffect, useState } from "react"

function NetworkState() {
   const [isonline , setisonline] = useState(true);
 console.log("NetworksCom");
 
    useEffect(() => {  // setUp function
        const Handleonline = () => {
            setisonline(true);
        }

        const Handleoffline = () => {
            setisonline(false);
        }

        window.addEventListener("online", Handleonline);
        window.addEventListener("offline", Handleoffline);
    
        return () => { // cleanUp function
            window.removeEventListener("online", Handleonline);
            window.removeEventListener("offline", Handleoffline);
        }
    }, []); // dependencis is empty array so useEffect render onces 

    return <h1>{isonline?"online" : "Disconnect"}</h1>
}


export default NetworkState;


