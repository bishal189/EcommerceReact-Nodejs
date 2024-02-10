import React from 'react'
import { useEffect,useState } from 'react';
import apiClient from '../utils/api-client';
const useData = (endpoints,config,deps) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        apiClient
          .get(endpoints,config)
          .then((res) =>{
            setData(res.data)
            setLoading(false)
        } )
          .catch((err) => {
            setError(err.message) 
            setLoading(false)});
      },deps? deps:[]);
    
    return{
        data,
        error,
        loading
      }

}


export default useData
