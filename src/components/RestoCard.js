import { IMG_URL } from "../utils/constant";
import vegImage from "../../images/Veg_symbol.svg.webp";
    
const RestoCard = (props) => {
    const {result} = props;
    // console.log(result?.info);
    // console.log(result?.info?.veg);
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,id} = result?.info;
    const {deliveryTime} = result?.info?.sla;
    
    return (
        <div className="outer">
        <div className="card">
            <div><img id="imgdiv" className="rounded-none" src={IMG_URL+cloudinaryImageId} alt="image1"></img>
            <div className="items">
                <h3 className="font-bold">{name}</h3>
                <p>{costForTwo}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating} starts</p>
                <p>{deliveryTime} min</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export const VegLabel = () => {
    return (props) =>{
        return (
            <div>
                <img className="absolute ml-10 mt-1 bg-white-50 w-6 hover:z-3" src={vegImage} alt="veg"></img>
                <RestoCard {...props}/>
            </div>
        )
    }
}

export default RestoCard;