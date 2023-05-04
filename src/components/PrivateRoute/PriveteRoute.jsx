import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user){
        // Navigate({to: '/login'})
    }
    return (
        <div>
            { children}
        </div>
    );
};

export default PriveteRoute;