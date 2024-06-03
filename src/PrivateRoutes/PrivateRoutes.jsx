import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PropTypes from "prop-types";
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoutes = ({children}) => {

    const location = useLocation();
    const { user , loading } = useContext(AuthContext);

    if(loading){
        return <h1>Loading...</h1>
    }

    if(user?.email){
        return children
    }

    return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoutes;