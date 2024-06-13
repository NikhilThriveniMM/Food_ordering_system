import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu.js";

const RestoMenu = () => {
    const resID = useParams();
    // console.log(resID.id);
   
    const resRestoMenu = useResMenu(resID.id);

if(resRestoMenu === null){
    // console.log("true");
    return <Shimmer />
}
const {name,cuisines,costForTwoMessage} = resRestoMenu?.cards[2]?.card?.card?.info;
// console.log(name);
// console.log(cuisines);
// console.log(costForTwoMessage);
// console.log(resRestoMenu)

const {itemCards} = resRestoMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// console.log(resRestoMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
return (
        <div className="outer-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")+" - Rs"+costForTwoMessage}</p>
            <h2>Menu items</h2>
            <ul>
                {
                    itemCards.map((x)=>(
                        <li key={x?.card?.info?.id}>{x?.card?.info?.name}----Rs-{x?.card?.info?.defaultPrice/100 || x?.card?.info?.price/100}</li>
                    ))
                }
            </ul>

            
        </div>
    );
};

export default RestoMenu;