import apiClient from "./api-client";

import React from 'react'

const setAuthToken = (token) => {
    if(token){
        apiClient.defaults.headers.common['x-auth-token']=token
    }else{
        delete apiClient.defaults.headers.common['x-auth-token']
    }
  
}

export default setAuthToken