import  vegImage  from "../../images/Veg_symbol.svg.webp";
import nonVegImage from "../../images/245-2459071_non-veg-icon-non-veg-symbol-png.png";
import {MENU_IMAGE} from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const MenuNested = (props) =>{
    const {list} = props;
    const info = list?.itemCards;
    const dispatch = useDispatch();
    const handelItem = (data) => {
        dispatch(addItem(data))
    }
    return(
        <div className="m-4">
            
            {
                info?.map((x) => {
                    // console.log(x.card)
                           return( 
                    <div className="flex justify-between">
                        <div className="border-gray-300 shadow-md text-left my-3 flex justify-between" key={x?.card?.info?.id}>
                            <div className="w-9/12">
                            <p className="w-30 my-1">
                            {
                            (x?.card?.info?.itemAttribute?.vegClassifier === 'VEG') ? <img src={ vegImage } alt="veg-im" className="w-5 m-1"></img> : <img src={ nonVegImage } alt="non-img" className="w-4 m-1"></img>
                            }</p>
                                <p className="font-semibold text-xs">{x?.card?.info?.name}</p>
                                <p className="text-xs">₹ {x?.card?.info?.defaultPrice/100 || x?.card?.info?.price/100}</p>
                                <p className="text-xs font-extralight my-2">{x?.card?.info?.description}</p>
                            </div>
                            <div className="p-4 w-3/12">
                                <div className="absolute">
                                 <button className="p-2 mx-5 my-16 shadow-sm bg-white text-green-500 w-3/4  rounded-lg h-auto" onClick={() => handelItem(x)}
                                 >ADD
                                 </button>
                                 </div>
                                 <img src={MENU_IMAGE + x?.card?.info?.imageId} alt="MENU_IMAGE" className="w-28 h-24 rounded-md"/>
                            </div>
                        </div>
                    </div>
                            )
                })
            }
        </div>
    )
}

export default MenuNested;