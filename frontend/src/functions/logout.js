export const logout = async(values)=>{
    try{

    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}