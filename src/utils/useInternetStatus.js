import { useState } from "react";

const useInternetStatus = () => {
    const [onlineInfo, setOnlineInfo] = useState(true);

    window.addEventListener("online",()=>{
        setOnlineInfo(true);
    });
    window.addEventListener("offline",()=>{
        setOnlineInfo(false);
    });

    return onlineInfo;
}

export default useInternetStatus;