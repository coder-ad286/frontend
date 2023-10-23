
export const setToken =(uid)=>{
    localStorage.setItem('token',uid)
}
export const getToken =()=>{
    return localStorage.getItem('token');
}

export const removeToken=()=>{
    localStorage.removeItem('token');
}