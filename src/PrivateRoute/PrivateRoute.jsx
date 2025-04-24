import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";


const PrivateRoute = ({children}) => {
    const {users,loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log(location)
    
    if(loading) return <Loading/>
    if(users) return children;

    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;