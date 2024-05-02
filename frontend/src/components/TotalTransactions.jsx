import { mainContext } from '@/context/mainProvider'
import React, { useContext } from 'react'

const TotalTransactions = ({type}) => {
    const {user} = useContext(mainContext)

    const transactions = user?.transactions
    const transactionArray = []
    const clearedTransactionArray = []

    if(type == 'expense') {
        transactions?.map((transaction) => {
            if(transaction.type == 'expense') {
                transactionArray.push({category: transaction.category, amount: transaction.amount})
            } 
        })

        user?.expenseCategories?.map((category) => {
            let categoryAmount = 0
            transactionArray.map((income) => {
                if(income.category == category.categoryName) {
                    categoryAmount = categoryAmount + income.amount
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({imgUrl: category.imgUrl, categoryName: category.categoryName, amount: categoryAmount, sign: '-'})
            }
        })
    } else if (type == 'income') {
        transactions?.map((transaction) => {
            if(transaction.type == 'income') {
                transactionArray.push({category: transaction.category, amount: transaction.amount})
            } 
        })

        user?.incomeCategories?.map((category) => {
            let categoryAmount = 0
            transactionArray.map((income) => {
                if(income.category == category.categoryName) {
                    categoryAmount = categoryAmount + income.amount
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({imgUrl: category.imgUrl, categoryName: category.categoryName, amount: categoryAmount, sign: ''})
            }
        })
    }
    return (
        <section className='flex flex-col w-full pb-16'>
            <h2 className="text-xl font-bold self-start">Total {type} transactions</h2>
            {clearedTransactionArray.map((transaction) => {
                return(
                    <div key={transaction.categoryName} className='grid grid-cols-5 pt-8'>
                        <img src={transaction.imgUrl} alt=""/>
                        <h3 className='text-l font-bold col-span-3'>{transaction.categoryName}</h3>
                        <p className='text-l font-bold text-[#0097B2] dark:text-[#FFDE59] justify-self-end'>{transaction.sign} $ {transaction.amount}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default TotalTransactions