import { useEffect, useState } from "react";
import {MENU_API} from "./constant";

const useResMenu = (resId) => {
    const [resRestoMenu, setResRestoMenu] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        setResRestoMenu(jsonData.data)
    }
    return resRestoMenu;
}
export default useResMenu;