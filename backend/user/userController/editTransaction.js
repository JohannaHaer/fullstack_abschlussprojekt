import { User } from "../userModel/user.model.js";

export const editTransaction= async(req,res)=>{
    console.log('test')
    try{
        const {category, amount, description, date} = req.body
        const username = '322test23324'// await jwt.decode(req.cookies.token).username
        const transactionId = '66311185d3feeb9ff0291e6f'//req.params.id
        const user = await User.findOneAndUpdate(
            { 
                username: username, 
                "transactions._id": transactionId // Überprüfen Sie, ob die Transaktion in den Benutzerdaten vorhanden ist
            },
            {
                $set: { 
                    "transactions.$.category": category, // Aktualisieren Sie die Kategorie der Transaktion
                    "transactions.$.amount": amount, // Aktualisieren Sie den Betrag der Transaktion (falls erforderlich)
                    "transactions.$.description": description, // Aktualisieren Sie die Beschreibung der Transaktion (falls erforderlich)
                    "transactions.$.date": date, // Aktualisieren Sie das Datum der Transaktion (falls erforderlich)
                }
            },
            { new: true } // Gib das aktualisierte Benutzerdokument zurück
        )
        res.json(user)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}