import { useNavigate } from 'react-router-dom'
//!not testet
export const logout = async(values)=>{
    const navigate = useNavigate()
    try{
        fetch(import.meta.env.VITE_BACKEND_URL + "/user/logout", {credentials:'include', withCredentials:true})
        navigate('/')
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}