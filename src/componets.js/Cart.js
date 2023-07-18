import FoodItem from "./foodItemCard"
import { useSelector } from "react-redux"



const Cart = ()=>{

    const cartItems = useSelector(store=>store.cart.items)
    
    console.log(cartItems,'hddh');

    return(
        <div className="bg-white ">
        {
            cartItems.map((items)=>{
             return(
                <FoodItem key={items.card.info.id} {...items.card.info}/>
             )
            })
        }
       
        </div>
    )
}       

export default Cart