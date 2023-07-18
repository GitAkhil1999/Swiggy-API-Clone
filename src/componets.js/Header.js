
import { useState,useContext } from "react"
import {Link} from "react-router-dom"
import {Logo} from "./config"
import useOnline from "./utils/useOnline"
import UserContext from "./utils/userContext"
import { useSelector } from "react-redux"



// jsx expression
const tittle =(
    <img className="h-24 p-2" alt="logo" src={Logo}/>
    ) 
    
    
    // HEADER COMPONENT
    const Header = ()=>{
        const [isLogedin,setIslogedin] = useState(true)

        const isOnline = useOnline()
        const {user} = useContext(UserContext)
        

        const cartItems = useSelector(store=>store.cart.items)


    return(
        <div className=" flex justify-between bg-pink-100 shadow-lg">
             {tittle }
             <div >
                <ul className="flex py-7  ">
                <Link to="/"><li className="px-2">Home</li> </Link>
                <Link to="/about"><li className="px-2">About</li></Link> 
                <Link to='/cart'><li className="px-2">Cart-{cartItems.length}</li></Link> 
                <Link to='/instamart'><li className="px-2">Instamart</li></Link> 
                <Link to='/instamart2'><li className="px-2">Instamart2</li></Link> 
                <h1 className="px-2">{isOnline?"❤" :"😔"}</h1>
              </ul>
             </div >
             <h1 className="font-semibold py-7" >{user.name}</h1>   
            
            {
              isLogedin? <button onClick={()=>setIslogedin(false)}>Logout</button>:<button onClick={()=>setIslogedin(true)}>Login</button>
             }  
        </div>  
    )
    }

    export default Header
    