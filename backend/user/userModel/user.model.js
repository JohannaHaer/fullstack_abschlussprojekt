import mongoose, { Schema } from "mongoose";

const defaultExpenseCategories = [
    {categoryName:'Food',color:'red', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913283/Zm9vZF9zcndzdG8=/drilldown'},
    {categoryName:'Technology',color:'blue', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913288/dGVjaF9wenZ2ZG4=/drilldown'},
    {categoryName:'Clothing',color:'green', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913295/Y2xvdGhlc19yOTlub2M=/drilldown'},
    {categoryName:'Rental',color:'violet', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913301/bWlldGVfdWlyMnNr/drilldown'},
    {categoryName:'Insurance',color:'yellow', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913306/dmVyc2ljaGVydW5nX2t4YWg0cg==/drilldown'},
    {categoryName:'Leisure',color:'orange', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913312/ZHJhY2hlbl9qZ2pvbm0=/drilldown'},
]

const defaultIncomeCategories = [
    {categoryName:'Salary',color:'red', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913257/c2FsYXJ5X2lpbGljcw==/drilldown'},
    {categoryName:'Bonus',color:'blue', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913231/Qm9udXNfaTF3eDBz/drilldown'},
    {categoryName:'Pocket money',color:'green', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913262/cG9ja2V0TW9uZXlfZnVlbHc1/drilldown'},
    {categoryName:'Cashback',color:'violet', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913268/Y2FzaGJhY2tfZXpkZXZk/drilldown'},
    {categoryName:'Part-time job',color:'yellow', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913277/cGFydC10aW1lX2hrNHhldQ==/drilldown'},
    {categoryName:'Sales',color:'orange', imgUrl:'https://res-console.cloudinary.com/dvuefu0mx/thumbnails/v1/image/upload/v1714913226/c2FsZXNfeHF1ODFx/drilldown'},
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

