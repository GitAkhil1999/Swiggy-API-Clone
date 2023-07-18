
import { useContext } from "react"
import UserContext from "./utils/userContext"
const Footer = ()=>{

const {user} = useContext(UserContext)
    return(
        <div>
            <h1 className="font-semibold p-5 m-5 ">This app is reared by {user.name} - {user.email}</h1>
        <h1 className=" p-5 m-5 font-semibold">Footer is powerd by {user.name}</h1>
        
        </div>
    )
}

export default Footer