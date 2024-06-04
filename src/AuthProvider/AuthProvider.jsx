import React, { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
import axios from 'axios';

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
            const email = currentUser?.email || user?.email;
            const loggedUser = {email: email}
            if(currentUser){
                axios.post("https://car-doctor-server-ashy-beta.vercel.app/jwt", loggedUser, {withCredentials: true})
                .then((res) => {
                  const result = res.data;
                  console.log(result)
                  if(result.success){
                    setUser(currentUser);
                    setLoading(false);
                  }
                })
                .catch(err => {
                    console.log(err.message);
                })
                
            }
            else{
                axios.post("https://car-doctor-server-ashy-beta.vercel.app/logout", loggedUser ,{withCredentials: true})
                .then(res => {
                    const result = res.data;
                    console.log(result)
                    if(result.success){
                        setUser(null);
                        setLoading(false);
                    }
                })
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