import axios from 'axios';
import React, { useEffect } from 'react';
import useAuthInfo from './useAuthInfo';
import { useNavigate } from 'react-router-dom';

const secureAxios = axios.create({
    baseURL: 'https://car-doctor-server-ashy-beta.vercel.app',
    withCredentials: true
})

const useSecureAxios = () => {
    const { logOut } = useAuthInfo();
    const navigate = useNavigate()
    useEffect(()=>{
        secureAxios.interceptors.response.use(res=>{
            return res;
        }, err =>{
            if(err.response.status === 401 || err.response.status === 403) {
                logOut()
                .then(()=> {
                    navigate('/')
                })
            }
        })
    },[])
    return secureAxios;
};

export default useSecureAxios;