import { useState } from "react";
import image from "../../images/images.jpeg"
import {Link} from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus";



const Header = () =>{
    let [signBtn, SetSignBtn] = useState("Sign In");
    const internetStatus = useInternetStatus();
    console.log(internetStatus);
    return (
        <div className="header flex justify-between">

            <div className="left">
                 <a><img id = "logo" className="w-20" src={image} alt="My Image" /></a> 
            </div>

            <div className="right">
                <ul className="flex"> 
                    <li>Online Status:{internetStatus ? "✅" : "❌"}</li>
                    <li><Link to="/" className="link">Swiggy Corporate</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Offers <sup id="new"> NEW</sup></li>
                    <li>Swiggy Corporate</li>
                    <li><Link to="/help" className="link">Help</Link></li>
                    <li>Cart</li>
                    <button className="sign-btn" onClick={()=>{
                        if(signBtn === "Sign In"){
                            SetSignBtn("Sign Out");
                        }else{
                            SetSignBtn("Sign In");
                        }
                    }}>{signBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;