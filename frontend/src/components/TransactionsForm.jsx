// ! In this form, all transaction data is transferred from the backend to the frontend and processed so that it is available to the user
// This jsx is connected to the Transaction.jsx
import { mainContext } from "@/context/mainProvider"
import React, { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import Bin from '@/assets/img/muelleimer.png'
import EditTransaction from "./EditTransaction"
import DeleteTransaction from "./DeleteTransaction"

const TransactionsForm = () => {
    const {user} = useContext(mainContext)
    const [deleteCard, setDeleteCard] = useState(false)
    const [deleteTransaction, setDeleteTransaction] = useState('')

    // Query of user data via mainProvider from the backend and storage of expense and income categories
    const transactions = user?.transactions
    const expenseCategories = user?.expenseCategories
    const incomeCategories = user?.incomeCategories

    let categoryImagesArray = []
    let transactionArray = []
    const transactionDateArray = []

    // To store the collected image information of the categories, the expense and income categories with name and imageUrl are stored in the categoryImagesArray
    incomeCategories?.map((incomeCategory) => {
        categoryImagesArray.push({categoryName: incomeCategory.categoryName, imageUrl: incomeCategory.imageUrl})
    })

    expenseCategories?.map((expenseCategory) => {
        categoryImagesArray.push({categoryName: expenseCategory.categoryName, imageUrl: expenseCategory.imageUrl})
    })

    // The transactions of a user are extended by the images collected in the categoryImagesArray by comparing the category name. This is saved in the transactionArray
    transactions?.map((transaction) => {
        categoryImagesArray?.map((categoryImage) => {
            if (categoryImage.categoryName == transaction.category) {
                transactionArray.push({type: transaction.type, category: transaction.category, categoryImage: categoryImage.imageUrl, amount: transaction.amount, date: transaction.date, description: transaction.description, _id: transaction._id})
            }
        })
    })

    // As the date does not fit the format as it should be displayed in the app, it is sorted here 
    transactions?.map((transaction) => {
        let transactionDate = transaction.date.slice(0, 10)
        transactionDateArray.push(transactionDate)
        transactionDateArray.sort().reverse()
    })

    // In order for transactions from a tag to be displayed together, all duplicate data must be removed
    const uniqueDateArray = [...new Set(transactionDateArray)]

    // If the date of a transaction matches a date from the reduced data set (uniqueDateArray), it is added to this data set. A day of the week is also added to the data set
    const transactionsByDay = uniqueDateArray.map((date)=>{
        const transactions = transactionArray?.filter((transaction)=>(transaction.date.slice(0,10) === date))
        const dates = new Date(date).toString()
        const day = dates.slice(0,4)
        return {date: date, transactions, day: day}
    })

    //A pop-up window opens so that a transaction can be deleted. The deletion can be confirmed or cancelled in this window. The DeleteTransaction component provides the functionalities for this and gets the unique transaction id
    const handleDeleteButton = ( deleteTransaction_id) => {
        setDeleteCard(true)
        setDeleteTransaction(deleteTransaction_id.toString())
    }
    console.log('delete', deleteTransaction);
    
    return (
        <section className='flex flex-col pb-16'>
            <div className={deleteCard ? 'flex' : 'hidden'}><DeleteTransaction setDeleteCard={setDeleteCard} deleteTransaction={deleteTransaction}/></div>
            {transactionsByDay?.map((transactionDate) => {
                return (
                    <div key={transactionDate.date}>
                        <h2 className="text-l font-bold pt-5">{transactionDate.day} {transactionDate.date}</h2>
                        <hr/>
                        {transactionDate?.transactions?.map((transaction) => {
                            return (
                                <div key={transaction._id} className="grid grid-cols-6 py-2">
                                    {transaction.type === 'income' 
                                    ? <div className='w-10 h-10 p-2 rounded-full flex justify-center items-center bg-gradient-to-b from-[#FFDE59] to-[#FF9900]'>
                                        <img src={transaction.imgUrl} alt=""/>
                                    </div>
                                    : <div className='w-10 h-10 p-2 rounded-full flex justify-center items-center bg-gradient-to-b from-[#44BBFE] to-[#1E78FE]'>
                                        <img src={transaction.imgUrl} alt=""/>
                                    </div>
                                    }
                                    <div className="felx flex-col col-span-2">
                                        <h3 className='text-l font-bold'>{transaction.category}</h3>
                                        <p>{transaction.description}</p>
                                    </div>
                                    {transaction.type === 'income' 
                                    ? <p className='col-span-2 text-l font-bold text-[#06434E] dark:text-[#FFDE59] justify-self-end'>$ {transaction.amount}</p> 
                                    : <p className='col-span-2 text-l font-bold text-[#0097B2] dark:text-[#1A96B2] justify-self-end'>- $ {transaction.amount}</p>
                                    }
                                    <Button id='deleteButton' variant='round' size='delete' className='justify-self-end' onClick={() => handleDeleteButton(transaction?._id)}><img src={Bin} alt="" className="w-8"/></Button>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}

export default TransactionsForm