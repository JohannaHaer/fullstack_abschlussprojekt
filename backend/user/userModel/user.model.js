import mongoose, { Schema } from "mongoose";

const defaultExpenseCategories = [
    {categoryName:'essen',color:'red', imgUrl:'www.blödertest.de'},
    {categoryName:'technik',color:'blue', imgUrl:'www.blödertest.de'},
    {categoryName:'kleidung',color:'green', imgUrl:'www.blödertest.de'},
    {categoryName:'miete',color:'violet', imgUrl:'www.blödertest.de'},
    {categoryName:'versicherung',color:'yellow', imgUrl:'www.blödertest.de'},
    {categoryName:'freizeit',color:'orange', imgUrl:'www.blödertest.de'},
]

const defaultIncomeCategories = [
    {categoryName:'Gehalt',color:'red', imgUrl:'www.blödertest.de'},
    {categoryName:'Bonus',color:'blue', imgUrl:'www.blödertest.de'},
    {categoryName:'Taschengeld',color:'green', imgUrl:'www.blödertest.de'},
    {categoryName:'Rückzahlung',color:'violet', imgUrl:'www.blödertest.de'},
    {categoryName:'Nebenjob',color:'yellow', imgUrl:'www.blödertest.de'},
    {categoryName:'Verkäufe',color:'orange', imgUrl:'www.blödertest.de'},
]

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
    transactions:[{
        id:{
            type:String
        },
        type:{
            type:String
        },
        category:{
            type:String
        },
        amount:{
            type:String
        },
        description:{
            type:String
        },
        date:{
            type:String
            //type:Date
        },
        time:{
            type:String
            //tpye:Date
        },
    }],
//     transactions:{
//         expenses:[{
//             id:{
//                 type: String
//             },
//             amount:{
//                 type: Number,
//                 // required: true,
//             },
//             category:{
//                 type: String,
//                 // required: true,
//             },
//             description:{
//                 type: String,
//                 // required: true,
//             },
//             //!tapes korrekt?
//             date:{
//                 type:String,
//                 // type: Date,
//             },
//             time:{
//                 type:String
//                 // type:Date,
//             }
//         }
// ],
//         income:[{
//             id:{
//                 type: String
//             },
//             amount:{
//                 type: Number,
//                 // required: true,
//             },
//             category:{
//                 type: String,
//                 // required: true,
//             },
//             description:{
//                 type: String,
//                 // required: true,
//             }
//         }]
//     },
    expenseCategories:{
        type:[{
            categoryName:{
                type:String,
            },
            color:{
                type:String,
                default:"green",
            },
            imgUrl:{
                type:String,
            }
        }],
        default:defaultExpenseCategories
},
incomeCategories:{
    type:[{
        categoryName:{
            type:String,
        },
        color:{
            type:String,
            default:"green",
        },
        imgUrl:{
            type:String,
        }
    }],
    default:defaultIncomeCategories
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

