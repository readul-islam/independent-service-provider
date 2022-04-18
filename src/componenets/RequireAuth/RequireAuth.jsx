import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const RequireAuth = ({children}) => {
    const [user, loading, ] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return  <p className="pt-28 flex  justify-center text-white text-2xl">Loading...</p>
    }
    if(!user){

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
    
};

export default RequireAuth;