import { useAuth } from "../hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoutes = () => {
    const {isAuthenticated, token} = useAuth();
    console.log(`isAuthenticated: ${isAuthenticated}`)
    if(!isAuthenticated && !token){
        return <Navigate to="/login" replace/>
    } 

  return <Outlet/>
}
