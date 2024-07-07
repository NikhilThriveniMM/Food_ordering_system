import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu.js";
import RestoMenuItem from "./RestoMenuItem.js";
import RestoMenuNested from "./RestoMenuNested.js";

const RestoMenu = () => {

    const resID = useParams();
    const resRestoMenu = useResMenu(resID.id);

if(resRestoMenu === null){
    return <Shimmer />
}

const {name,cuisines,costForTwoMessage} = resRestoMenu?.cards[2]?.card?.card?.info;
const type = resRestoMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
});
return (
        <div className="outer-menu text-center">
            <h1 className="font-bold mt-4 text-2xl font-sans">{name}</h1>
            <p className="font-bold text-md font-sans">{cuisines.join(", ")+" - Rs"+costForTwoMessage}</p>
                {
                  type?.map((x) => {
                    // console.log(x);
                    return (x?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ?
                    <RestoMenuItem key={x.card.card.title} data={x}/> : <RestoMenuNested key={x.card.card.title} data={x}/>
                  }) 
                }
   
        </div>
    );
};

export default RestoMenu;