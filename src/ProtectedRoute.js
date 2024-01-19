import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"
const NxtProtectedRoute=()=>{
   const jwtToken=Cookies.get('jwt_token')
   if (jwtToken===undefined)
   {
    return <Navigate to='/login'/>
   }
   return <Outlet/>

}
export default NxtProtectedRoute
