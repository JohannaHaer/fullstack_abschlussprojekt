export const login = async (values) => {
    // console.log(values);
    // console.log(JSON.stringify(values));
    const responseLogin = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
        credentials: 'include'
    })
}