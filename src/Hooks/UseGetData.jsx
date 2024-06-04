import React, { useEffect, useState } from 'react';
import useSecureAxios from './useSecureAxios';

const UseGetData = (url, credentials) => {
    const [ data , setData ] = useState([]);
    const axios = useSecureAxios()
    useEffect(()=>{
        axios.get(url, {withCredentials: credentials})
        .then(res => {
            setData(res.data)
        })
    },[])
    return data;
};

export default UseGetData;