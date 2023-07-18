import React, { lazy, useState, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./componets.js/Header";
import Footer from "./componets.js/Footer";
import Body from "./componets.js/Body";
import About from "./componets.js/About";
import Contact from "./componets.js/contact";
import Error from "./componets.js/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurntDetails from "./componets.js/RestaurantDetails";
import Instamart from "./componets.js/Instamart";
import UserContext from "./componets.js/utils/userContext";
import store from "./componets.js/utils/store";
import { Provider } from "react-redux";
import Cart from "./componets.js/Cart";



const Instamart2 = lazy(()=>import('./componets.js/2instamart'))

const AppLayout = ()=>{

const [user,setUser] = useState({
   name:'Akhil Kumar',
   email:'akhil@gmail.com'
})

   return(
   <Provider store={store}>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <Header/>
    <Outlet/>
    <Footer />
    </UserContext.Provider>
    </Provider>
     )       
}

const appRouter = createBrowserRouter([
   {
      path:'/',
      element:<AppLayout/>,
     errorElement:<Error/>,
     children:[
      {
         path:'/',
         element:<Body user={{name:'akhil',place:'pathanamthitta'}} />
      },
      {
         path:'/about',
         element:<About/>
      },
      {
         path:'/contact',
         element:<Contact/>
      },
      {
         path:'/restaurent/:resId',
         element:<RestaurntDetails/>
      },
      {
         path:'/instamart',
         element:<Instamart/>
      },
      {
         path:'/instamart2',
         element:<Suspense fallback={<h1>Loading....</h1>}>
         <Instamart2/>
         </Suspense>
      },
      {
         path:'/cart',
         element:<Cart/>
      }

     ]
   },
])
      
const root =  ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router = {appRouter}/>)    