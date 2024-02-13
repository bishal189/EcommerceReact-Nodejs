import apiClient from "../utils/api-client";


function addToCartAPI(id,quantity){
   return  apiClient.post(`/cart/${id}`,
    {quantity:quantity})

}
export default addToCartAPI