import { IMG_URL } from "../utils/constant";

const RestoCard = (props) => {

    const {result} = props;
    console.log(result.info.isOpen);
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,id} = result?.info;
    const {deliveryTime} = result?.info?.sla;
    
    return (
        <div className="outer">
        <div className="card">
            <div><img id="imgdiv" src={IMG_URL+cloudinaryImageId} alt="image1"></img>
            <div className="items">
                <h3>{name}</h3>
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

const promoterLabel = (RestoCard) => {
    return (props) => {
        return(
            <div>
                <label>Open/close</label>
                <RestoCard />
            </div>
        )
    }
}

export default RestoCard;