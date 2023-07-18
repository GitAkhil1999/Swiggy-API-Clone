import {useState,useEffect} from 'react'
import { FETCH_MENU_URL } from '../config'


const useRestaurents = (resId)=>{

    const[restaurent,setRestaurent] = useState({})

    useEffect(()=>{
    getRestaurentInfo()
    },[])

    async function getRestaurentInfo(){
    const data =await fetch(FETCH_MENU_URL+resId)
    const json =await data.json() 
    

    setRestaurent(json?.data?.cards[0]?.card?.card?.info)
    
     
}
    return restaurent
}
export default useRestaurents

