import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuthInfo = () => {
    const Context = useContext(AuthContext)
    return Context
};

export default useAuthInfo;