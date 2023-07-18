
import { useState,useEffect } from "react"
import { Menu_URL } from "../config"

const useRestaurentMenu = (resId)=>{

 const [menu,setMenu] = useState({})

useEffect(()=>{
    getRestaurents()
},[])
     
 // swiggy menu api call
    async function getRestaurents(){
    const data =await fetch(Menu_URL+resId)
    const json = await data.json() 
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards)
   
    
}
return menu
}

export default  useRestaurentMenu