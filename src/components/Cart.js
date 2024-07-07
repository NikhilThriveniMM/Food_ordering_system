import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import cartSlice from "../utils/cartSlice";
const Cart = () => {
    const data = useSelector((store) => store?.cart?.items);

    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearItem())
    }
    
    return(
        <div>
            <div className="text-center">
                <h1 className="font-bold">Cart</h1>
                <button className="bg-blue-600 text-white rounded-xl w-28 h-8 m-3 cursor-pointer" onClick={handelClearCart}>Clear Cart</button>
                {(data.length === 0) && (<h1 className="font-bold">Cart is empty, Add items to your cart!..</h1>)}  
            </div>

            <div>
                <CartDetails info={data}/>
            </div>
        </div>
    )
}

export default Cart;