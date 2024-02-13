import apiClient from "../utils/api-client"

export  function orderAPI(){
    return apiClient.get("/order")
}