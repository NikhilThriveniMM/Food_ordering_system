import { useState } from "react";
import MenuNested from "./MenuNested";

const RestoMenuNested = (props) => {
    // console.log(item);
    const {data} = props;
    // console.log(data);
    const {title,categories} = data?.card?.card;
    const [showItem, setShowItem] = useState(false);
    const [nestedMenu, setNestedMenu] = useState(false);

    const showItemFunction = () => {
         return  setShowItem(!showItem);
    }
    const mainTitle = () => {
            setNestedMenu(!nestedMenu);
    }
    return (
    <div className="w-7/12 bg-gray-200 m-auto rounded-sm my-4 shadow-lg font-bold p-1">
        <div className="flex justify-between">
            <span onClick={() => showItemFunction()}>{title} ({categories.length})</span>
            <span>⬇</span>
        </div>
        <div>
            {showItem &&
                categories?.map((x) => {
                    return(
                        <div key={x?.title}>
                            <div className="flex justify-between">
                                <span className="block" onClick={() => mainTitle()}>{x?.title} ({x?.itemCards?.length})</span> 
                                <span>⬇</span> 
                            </div>
                            <div>
                                   {nestedMenu && <MenuNested list={x}/>}
                            </div>
                        </div>
                    )
                })
            } 
        </div>
    </div>
    )
}

export default RestoMenuNested;