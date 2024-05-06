import mongoose, { Schema } from "mongoose";

const defaultExpenseCategories = [
    {categoryName:'Food',color:'red', imgUrl:'www.blödertest.de'},
    {categoryName:'Technology',color:'blue', imgUrl:'www.blödertest.de'},
    {categoryName:'Clothing',color:'green', imgUrl:'www.blödertest.de'},
    {categoryName:'Rental',color:'violet', imgUrl:'www.blödertest.de'},
    {categoryName:'Insurance',color:'yellow', imgUrl:'www.blödertest.de'},
    {categoryName:'Leisure',color:'orange', imgUrl:'www.blödertest.de'},
]

const defaultIncomeCategories = [
    {categoryName:'Salary',color:'red', imgUrl:'www.blödertest.de'},
    {categoryName:'Bonus',color:'blue', imgUrl:'www.blödertest.de'},
    {categoryName:'Pocket money',color:'green', imgUrl:'www.blödertest.de'},
    {categoryName:'Cashback',color:'violet', imgUrl:'www.blödertest.de'},
    {categoryName:'Part-time job',color:'yellow', imgUrl:'www.blödertest.de'},
    {categoryName:'Sales',color:'orange', imgUrl:'www.blödertest.de'},
]

const userSchema =new Schema({
    username:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
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
    verificationCode:{
        type:String,
        default:""
    },
    pictureUrl:{
        type: String,
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
            type:Number
        },
        description:{
            type:String
        },
        date:{
            // type:String
            type:String
        },
    }],
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
                default: 'www.blödertest.de'
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
                default: 'www.blödertest.de'
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

