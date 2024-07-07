import { useState } from "react";
import MenuItem from "./MenuItem";

const RestoMenuItem = (props) => {
    const {data} = props;
    const {title,itemCards} = data?.card?.card;
    const [showItem, setShowItem] = useState(false);

    const showItemFunction = () => {
        // console.log(showItem);
       return setShowItem(!showItem);
    }

    return (
        <div className="w-7/12 bg-gray-200 m-auto my-4 font-bold rounded-md shadow-lg p-1">
            <div className="flex justify-between">
                <span className="cursor-pointer" onClick={() => {showItemFunction()}}>{title} ({itemCards?.length})</span>
                <span>⬇</span>
            </div>
            <div>
                {showItem && <MenuItem info={data}/>}
            </div>
        </div>
    )
}

export default RestoMenuItem;