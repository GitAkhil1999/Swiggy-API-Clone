
import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const error = useRouteError()
    const {status,statusText} = error
    console.log(error,'error');
    console.log(status , 'errrrrrrr');
    return(
        <div>
              <h1>OOPS sothing wrong!!</h1>
              <p>{ statusText + ":"  + status}</p>
        </div>
      
    )
}

export default Error