
import { IMG_CDN_URL } from "./config"
import { useContext } from "react"
import UserContext from "./utils/userContext"

const RestoruntCard = ({name,cloudinaryImageId,cuisines,avgRating})=>{

    const {user,setUser}= useContext(UserContext)

    return(
    <div  className="w-56 p-5 m-3 shadow-lg hover:bg-slate-100">
         <img  src={IMG_CDN_URL+
         cloudinaryImageId}/>  
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>{avgRating} stars</h5> 
        <h5 className="font-normal">{user.name} - {user.email}</h5>
      
    </div>
    )
}
 
export default RestoruntCard
