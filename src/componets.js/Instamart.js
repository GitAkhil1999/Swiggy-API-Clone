
import { useState } from "react"

const Section = ({tittle,description,isvisible,setIsvisible})=>{


    return(
        <div className="border border-black m-3 " >
         <h1 className="font-semibold py-3" >{tittle}</h1>
         { isvisible?  <button onClick={()=>{setIsvisible(false)}} className="font-semibold cursor-pointer underline">Hide</button>
         :<button onClick={()=>{setIsvisible(true)}} className="font-semibold cursor-pointer underline">Show</button>}
          {isvisible && <p className="p-2">{description}</p>}
           
        </div>
    )
}


const Instamart = ()=>{
 
    const [sectionConfig,setSectionConfig] = useState({
        showAbout : true,
        showTeam  : false,
        showProduct: true 
    })
    return(
        <div className="p-5 m-5">
        <h1 className="font-extrabold text-5xl">ites intamart</h1>
        <h1 className="font-bold">100 of components inside the instamart. ites a seperate bunler. but i didn't build the lay loading</h1>
        {/* <instaMart/>
        <DetailsofInstamart/>
        <Produc/>
        <TeamInstarmart/> */}
    <Section tittle={'AboutInstamart'} 
    description={'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    isvisible={sectionConfig.showAbout}
    setIsvisible={()=>{
        setSectionConfig({
            showAbout : true,
            showTeam  : false,
            showProduct: false 
        })
    }}
    />
     
    <Section tittle={'TeamInstamart'} 
    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
       }
     isvisible={sectionConfig.showProduct}
     setIsvisible={()=>{
        setSectionConfig({
            showAbout : false,
            showTeam  : false,
            showProduct: true 
        })
    }}/>
     
    <Section tittle={'product'} 
    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
       }
     isvisible={sectionConfig.showTeam}
     setIsvisible={()=>{
        setSectionConfig({
            showAbout : false,
            showTeam  : false,
            showProduct: true 
        })
    }}/>
     
       
        </div>
    )
}

export default Instamart