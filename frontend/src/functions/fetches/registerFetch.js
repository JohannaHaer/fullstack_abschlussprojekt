export const register = async (values) => {
    let status
    const responseRegister = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
    })
    .then(async(response)=>{
        status = response
    })
    return status
}