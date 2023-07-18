import resurentList from "./config"
import RestoruntCard from "./RestaurentCard"
import { useState ,useEffect,useContext} from "react"
import Shimmer from "./Shimmer"
import {Link} from 'react-router-dom'
import { filterData } from "./utils/helper"
import useOnline from "./utils/useOnline"
import UserContext from "./utils/userContext"


const Body = ()=>{

    
    const [allRestaurents, setallRestaurents] = useState([])
    const [filterdRestaurants, setFilterdRestaurents] = useState([])
    const [searchText,setSearchText] = useState("")
    const {user,setUser}= useContext(UserContext)
   

    useEffect(()=>{
        getRestaurents()
    },[])   
         
    // swiggy api call
        async function getRestaurents(){
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setFilterdRestaurents(json?.data?.cards[2]?.data?.data?.cards)
        setallRestaurents(json?.data?.cards[2]?.data?.data?.cards)
        
       
    }
   
//    create a custoom hook for login
    const isOnline = useOnline()
    if(!isOnline){
        return(<h1>pleas🔴e check your internet connectons..</h1>)
    }
    
    // if(!allRestaurents==null) return null
    if(filterdRestaurants?.length==0) {
       return(<Shimmer />) 
    }

    return (
         <>
        <div className="serch p-5 bg-slate-500 shadow-md m-5">
            <input type="text" className=" focus:bg-slate-200"
             placeholder="search" value={searchText} 
             onChange={(e)=>setSearchText(e.target.value)}  
           /> 

          <button className="p-2 m-2 bg-purple-900 rounded-md text-white hover:bg-slate-600" 
          onClick={()=>{
            // filtering data with name
              const data=  filterData(searchText,allRestaurents)
              setFilterdRestaurents(data)
             }} >Search</button>

        <input value={user.name} onChange={e=>setUser({
            name:e.target.value,
            email:'new email'
        })}></input>
        </div>
           
        <div className="p flex flex-wrap">
       {
       
        filterdRestaurants?.map((resurentList)=>{
        return  <Link to={"/restaurent/"+resurentList.data.id} key={resurentList.data.id} > 
        <RestoruntCard  {...resurentList?.data}  /></Link>
        })
       }
     
            
        </div>
        </>
    )
   
}


export default Body