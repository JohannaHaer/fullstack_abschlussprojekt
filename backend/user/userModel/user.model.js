import mongoose, { Schema } from "mongoose";


const userSchema =new Schema({
    username:{
        type:String,
        required:true,
    },
    passwordHash:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        required:true,
    },
    emailVerified:{
        type: Boolean,
        default: false,
    },
    pictureUrl:{
        type: String,
        default:'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg',
    },
    transactions:{
        expenses:[{
            id:{
                type: String
            },
            amount:{
                type: Number,
                // required: true,
            },
            category:{
                type: String,
                // required: true,
            },
            description:{
                type: String,
                // required: true,
            }
        }],
        income:[{
            id:{
                type: String
            },
            amount:{
                type: Number,
                // required: true,
            },
            category:{
                type: String,
                // required: true,
            },
            description:{
                type: String,
                // required: true,
            }
        }]
    }
})

export const User = mongoose.model("User", userSchema, "Users");



// categories:

// income :
// salary
// dividenden
// mieteinnahmen 
// sidehusstle
// pension
// sugardaddy/mommy money
// illegal money
// zuschüsse




// expense:
// food 
// electronics
// clothes
// insurance
// rent
// car
// sluts
// drugs and soft drugs
// lifestyle
// style
// vacation/holiday

