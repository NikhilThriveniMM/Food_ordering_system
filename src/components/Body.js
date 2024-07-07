import RestoCard ,{ VegLabel } from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus.js";
import {RESTORENT_DETAILS} from "../utils/constant.js";

const Body = () =>{
    const [fullRestoList,setFullRestoList] = useState([]);

    const [listOfResto,setListOfResto] = useState([]);

    const [searchText,setsearchText] = useState("");

    const VegDisplayed = VegLabel(fullRestoList);


    useEffect(()=>{
        fetchData();
    },[]);


const fetchData = async() => {

        const date = await fetch(RESTORENT_DETAILS);

        const jsonData = await date.json();

        setFullRestoList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfResto(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       
        // console.log(jsonData?.data?.cards);
    };

    const internetInfo = useInternetStatus();

    if(internetInfo === false) {
        return(
                <h1>Your off line</h1>
        )
            
    }

    return (listOfResto?.length===0) ? <Shimmer/>:(
        <div className="upper">
            <div className="flex-btn">
            <div className="filter-btn">
                    <button type="button" className="btn" onClick={()=>{
                        const filterData = fullRestoList.filter((x)=>{
                            return x?.info?.avgRating > 4.5;
                        });
                        setListOfResto(filterData);
                    }}>Top Rated Restorents</button>
            </div>

            <div className="reset">
                    <button className="btn" type="button" onClick={()=>{
                        return setListOfResto(fullRestoList);
                    }}>Restore All Restorents Cards</button>
            </div>

            <div className="search-btn">
                <input type="text" className="search-input" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}></input>
                <button type="submit" className="search-btn" onClick={()=>{
                    const filterResto = fullRestoList.filter((x)=>{
                        return x.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setListOfResto(filterResto);
                }}>Search</button>
            </div>
            </div>
            <div className="content">
                    {/* <RestoCard result={obj[0]}/>
                    <RestoCard result={obj[1]}/>
                    <RestoCard result={obj[2]}/>
                    <RestoCard result={obj[3]}/>
                    <RestoCard result={obj[4]}/>
                    <RestoCard result={obj[5]}/>
                    <RestoCard result={obj[6]}/>
                    <RestoCard result={obj[7]}/>
                    <RestoCard result={obj[8]}/>
                    <RestoCard result={obj[9]}/> */}
                    {
                        listOfResto?.map((x)=>(
                         <Link key ={x.info.id} to={"/menu/"+ x.info.id}>
                            {(x?.info?.veg == true) ?<VegDisplayed result={x}/> : <RestoCard  result={x}/>}
                        </Link>
                        ))
                    }
                    
                </div>    
            </div>
        
    )
}

export default Body;