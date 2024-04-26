import bcrypt from "bcrypt";
import express from "express";
import { User } from "../userModel/user.model.js";


export const userRouter = express.Router();


export const register = async (req,res)=>{
    try {
        const checkNameStatus = res.locals.checkNameStatus
        const checkEmailStatus = res.locals.checkEmailStatus
        console.log(checkNameStatus, checkEmailStatus)
        if(checkNameStatus == "ok" && checkEmailStatus == "ok"){
            const { username, password, email } = req.body;
            if (!username || !password || !email) {
                res.sendStatus(403);
                return;
            }  
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const user = await User.create({ username, passwordHash: hash, email });
            res.json(user);
        }else{
            res.json({checkNameStatus:checkNameStatus,checkMailStatus:checkEmailStatus})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}



//Prüft ob der username schonmal verwendet wurde

export const checkRepeatName = async (req,res)=>{
    const { username } = req.body;
    try {
        const user = await User.findOne({ username }).lean();
        if (user) {
        res.json({ checkNameStatus: "username already exists" });
        } else {
        res.json({ checkNameStatus: "ok" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


//Prüft ob die Email schonmal verwendet wurde

export const checkRepeatEmail = async(req,res)=>{

    const { email } = req.body;
    try {
        const user = await User.findOne({ email }).lean();
        if (user) {
        res.json({ checkMailStatus: "email already exists" });
        } else {
        res.json({ checkMailStatus: "ok" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}




// userRouter.post("/register", mult.none(), async (req, res) => {
//     try {
//         const { username, password, email } = req.body;
//         if (!username || !password || !email) {
//             res.sendStatus(403);
//             return;
//         }  
//         const salt = await bcrypt.genSalt();
//         const hash = await bcrypt.hash(password, salt);
//         const user = await User.create({ username, password: hash, email });
//         res.json(user);
//     } catch (error) {
//         //!addErrorStatus
//         // res.status(401).send("Authentification needed");
//     }
// });

//Prüft ob der username schonmal verwendet wurde

// userRouter.post("/checkRepeatName", mult.none(), async (req, res) => {
//     const { username } = req.body;
//     try {
//         const user = await User.findOne({ username }).lean();
//         if (user) {
//         res.json({ checkNameStatus: "username already exists" });
//         } else {
//         res.json({ checkNameStatus: "ok" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// //Prüft ob die Email schonmal verwendet wurde


// userRouter.post("/checkRepeatEmail", mult.none(), async (req, res) => {
//     const { email } = req.body;
//     try {
//         const user = await User.findOne({ email }).lean();
//         if (user) {
//         res.json({ checkMailStatus: "email already exists" });
//         } else {
//         res.json({ checkMailStatus: "ok" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });  