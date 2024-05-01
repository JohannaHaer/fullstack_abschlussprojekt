import { mainContext } from "@/context/mainProvider"
import { useContext } from "react"

export const register = async (values) => {
    const {status, setStatus} = useContext(mainContext)
    // console.log(values);
    // console.log(JSON.stringify(values));
    console.log('test')
    const responseRegister = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
    })
    .then(async(response)=>{
        return responseRegister
        // const buffer = await response
        // setStatus(buffer)
    })

}