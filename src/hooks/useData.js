import React from 'react'
import { useEffect,useState } from 'react';
import apiClient from '../utils/api-client';
const useData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        apiClient
          .get(url)
          .then((res) =>{
            setData(res.data)
            setLoading(false)
        } )
          .catch((err) => {
            setError(err.message) 
            setLoading(false)});
      }, []);
    
    return{
        data,
        error,
        loading
      }

}


export default useData
