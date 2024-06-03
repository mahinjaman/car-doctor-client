import React, { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser ] = useState(null);
    const [loading , setLoading] = useState(true);


    // Create user with emails and password

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }


    // Sign in with email password

    const signIn = ( email, password ) =>{
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password)
    }

    // LogOut User
    const logOut = () => {
        setLoading(true);
        return signOut(Auth);
    }

    const AuthInfo = {
      createUser,
      signIn,
      logOut,
      user,
      loading
    };


    // set user

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth, currentUser =>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
            else{
                setUser(null);
                setLoading(false);
            }
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    console.log(user);

    return <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;