import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer"
import useRestaurents from "./utils/useRestaurents";
import useRestaurentMenu from "./utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurntDetails = ()=>{
    const params = useParams()
    const {resId} = params


    // restaurent state
    const restaurent = useRestaurents(resId)
  
    // menu state
    const menu = useRestaurentMenu(resId)
    console.log(menu,'mmmmm');
   
    
    const dispatch = useDispatch()


    const addFoodItem = (item)=>{
    dispatch(addItem(item))
    }
   
if(!restaurent) return(<Shimmer/>)

    return  (

        <>
       
        <div className=" p-5 m-5 flex ">
        <div >
            <h1>RestaurentId:{resId}</h1>
           
            <img className="py-2" src={IMG_CDN_URL+restaurent.cloudinaryImageId}/>
            <h2 className="font-bold text-lg">{restaurent.name}</h2>
            <h2 className="font-medium">{restaurent.areaName}</h2>
            <h3 className="font-medium">{restaurent.city}</h3>
            <h3 className="font-medium">{restaurent.avgRating}</h3>
            <h3 className="font-medium">{restaurent.costForTwoMessage}</h3>
        </div>
       
        <div className="p-5 m-5  " >
            <h1 className="font-semibold  ">Menu</h1>
        <ul className="py-2  ">

            {
              
            Object.values(menu).map((item)=>{
               console.log(item);
              return(
                <h1 key={item.card.info.id}> {item.card.info.name }
                 <button className="font-medium text-sm m-2 bg-blue-100 rounded-md"
                 onClick={()=>addFoodItem(item)}>ADD ITEM</button></h1>
              )  
            })
            }  
        </ul>
        </div>
        </div>
        </>
       
    )
}

export default RestaurntDetails