//!not testet

import { useNavigate } from 'react-router-dom'

//* der cookie (cookies.token) wird gelöscht
//* dadurch wird der user ausgeloggt
//* mit useNavigate wird der user zurück zur home geleitet
export const logout = async()=>{
    const navigate = useNavigate()
    try{
        fetch(import.meta.env.VITE_BACKEND_URL + "/user/logout", {credentials:'include', withCredentials:true})
        navigate('/')
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}