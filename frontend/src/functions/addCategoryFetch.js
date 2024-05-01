//!not testet




//*es muss ein username im cookies.token gespeichert sein und es können categoryName, color, imgUrl übergeben werden um eine kategorie hinzuzufügen
export const addIncomeCategory = async(values)=>{
    try{
        const responseIncomeCategory = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addIncomeCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const addExpenseCategory = async(values)=>{
    try{
        const responseExpenseCategory = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addExpenseCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}