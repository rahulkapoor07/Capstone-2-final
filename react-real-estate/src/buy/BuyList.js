import React,{useContext, useEffect} from "react";
import BuyCard from "./BuyCard";
import UserContext from "../useContext/UserContext";
import {v4 as uuid} from "uuid";
import "./BuyList.css";

const BuyList = ()=>{
    const { buyHomeData, buyHomes, message, setMessage, cityStateData } = useContext(UserContext); 
    
    useEffect(()=>{
        if(!cityStateData){
            const data = {"state_code":"CA","city":"yuba city"};
        buyHomes({...data});
        }
        
    },[]);

    useEffect(()=>{
        if(message){
            alert("Home has been added to Wishlist, please visit saved homes to view!");
            setMessage(false);
        }
    })
  
    return (
        <div className="container BuyList mt-5">
            <div className="row justify-content-center">
            {buyHomeData? buyHomeData.map(data => (
                <BuyCard key={uuid()} status={data.status} property_id={data.property_id}
                primary_photo={data.primary_photo} address={data.address}
                photos ={data.photos} home_details={data.home_details}
                home_description={data.home_description} home_price = {data.home_list_price}
                street_view={data.street_view} fav_heart = {data.fav_heart} />
            )) : <div style={{"fontSize":"3.5rem"}}>Loading...</div>}
            </div>
        </div>
    )
}

export default BuyList;