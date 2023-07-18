import { IMG_CDN_URL } from "./config"

const FoodItem = ({name,price,category,description,imageId})=>{


    return(
        <div className="p-5 m-5 w-56">
         <img src={IMG_CDN_URL +imageId }/>
         <div className="p-2">
        <h1 className="font-semibold">{name}</h1>
        <h1>{category}</h1>
        <h1 className="font-semibold">Price:{price}</h1>
        <h5 className="text-sm" >{description}</h5>
        </div>
        </div>
    )
}

export default FoodItem