import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";


interface IProps{
    children:ReactNode
}
const PrivateRoute = ({children}:IProps) => {
    const location = useLocation();

    const {user,isLoading}=useAppSelector((state)=>state.user)

    if(isLoading){
        return <p>Loading</p>
    }
    if(!user.email && !isLoading){
      return  <Navigate to='/login'  state={{ from: location }} replace />
    }

    return children
};

export default PrivateRoute;