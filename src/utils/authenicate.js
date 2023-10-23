import { getToken } from "./storage"


export const isAuthenicated =()=>{
    const token = getToken()
    if(!token){
        return false;
    }
   return true;
}