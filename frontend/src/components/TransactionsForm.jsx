import { mainContext } from "@/context/mainProvider"
import React, { useContext } from "react"
import { Button } from "@/components/ui/button"
import Bin from '@/assets/img/muelleimer.png'

const TransactionsForm = () => {
    const {user} = useContext(mainContext)

    const transactions = user?.transactions
    const expenseCategories = user?.expenseCategories
    const incomeCategories = user?.incomeCategories

    let categoryImages = []
    let transactionArray = []
    let dateArray = []
    const transactionDateArray = []

    incomeCategories?.map((incomeCategory) => {
        categoryImages.push({categoryName: incomeCategory.categoryName, imageUrl: incomeCategory.imageUrl})
    })

    expenseCategories?.map((expenseCategory) => {
        categoryImages.push({categoryName: expenseCategory.categoryName, imageUrl: expenseCategory.imageUrl})
    })

    transactions?.map((transaction) => {
        categoryImages?.map((categoryImage) => {
            if (categoryImage.categoryName == transaction.category) {
                transactionArray.push({type: transaction.type, category: transaction.category, categoryImage: categoryImage.imageUrl, amount: transaction.amount, date: transaction.date, description: transaction.description, _id: transaction._id})
            }
        })
    })

    transactions?.map((transaction) => {
        let transactionDate = transaction.date.slice(0, 10)
        transactionDateArray.push(transactionDate)
        transactionDateArray.sort().reverse()
    })

    const uniqueDateArray = [...new Set(transactionDateArray)]

    uniqueDateArray?.map((date) => {
        dateArray.push({date: date})
        
    })



    return (
        <section className='flex flex-col pb-16 relative'>
            <div className="z-10 border top-1/3 fixed ">
                <p className="text-center">Are you sure you want to delete this element?</p>
            </div>
            {dateArray?.map((transactionDate) => {
                return (
                    <React.Fragment key={transactionDate.date}>
                        
                        <h2 className="text-l font-bold pt-5">{transactionDate.date}</h2>
                        <hr/>
                        {transactionArray?.map((transaction) => {
                            if (transaction.date.slice(0, 10) == transactionDate.date) {
                                if (transaction.type == 'income') {
                                    return (
                                        <div key={transactionDate._id} className="grid grid-cols-6 py-2">
                                            <img src={transaction.imgUrl} alt="" />
                                            <div className="felx flex-col col-span-3">
                                                <h3 className='text-l font-bold'>{transaction.category}</h3>
                                                <p>{transaction.description}</p>
                                            </div>
                                            <p className='text-l font-bold text-[#06434E] dark:text-[#FFDE59] justify-self-end'>$ {transaction.amount}</p>
                                            <Button id='deleteButton' variant='round' size='delete' className='justify-self-end self-center'><img src={Bin} alt="" className="w-8"/></Button>
                                        </div>
                                )} else {
                                    return (
                                        <div key={transactionDate._id} className="grid grid-cols-6 py-2">
                                            <img src={transaction.imgUrl} alt="" />
                                            <div className="felx flex-col col-span-3">
                                                <h3 className='text-l font-bold'>{transaction.category}</h3>
                                                <p>{transaction.description}</p>
                                            </div>
                                            <p className='text-l font-bold text-[#0097B2] dark:text-[#1A96B2] justify-self-end'>- $ {transaction.amount}</p>
                                            <Button id='deleteButton' variant='round' size='delete' className='justify-self-end self-center'><img src={Bin} alt="" className="w-8"/></Button>
                                        </div>
                                    )}
                                }
                        })}
                    </React.Fragment>
                )
            })}
        </section>
    )
}

export default TransactionsForm