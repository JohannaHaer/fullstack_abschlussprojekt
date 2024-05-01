import { mainContext } from '@/context/mainProvider'
import React, { useContext } from 'react'

const ReportForm = ({type}) => {
    const {user} = useContext(mainContext)

    const transactions = user?.transactions
    const transactionArray = []
    const clearedTransactionArray = []

    

    if(type == 'expense') {
        transactions?.map((transaction) => {
            if(transaction.type == 'expense') {
                transactionArray.push({x: transaction.category, y: transaction.amount})
            } 
        })

        user?.expenseCategories?.map((category) => {
            let categoryAmount = 0
            transactionArray.map((income) => {
                if(income.x == category.categoryName) {
                    categoryAmount = categoryAmount + income.y
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({a: category.imgUrl, b: category.categoryName, c: categoryAmount, d: '-'})
            }
        })
    } else if (type == 'income') {
        transactions?.map((transaction) => {
            if(transaction.type == 'income') {
                transactionArray.push({x: transaction.category, y: transaction.amount})
            } 
        })

        user?.incomeCategories?.map((category) => {
            let categoryAmount = 0
            transactionArray.map((income) => {
                if(income.x == category.categoryName) {
                    categoryAmount = categoryAmount + income.y
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({a: category.imgUrl, b: category.categoryName, c: categoryAmount, d: ''})
            }
        })
    }
    return (
        <section className='flex flex-col w-full pb-16'>
            <h2 className="text-xl font-bold self-start">Total {type} transactions</h2>
            {clearedTransactionArray.map((transaction) => {
                return(
                    <div key={transaction.b} className='grid grid-cols-5 pt-8'>
                        <img src={transaction.a} alt=""/>
                        <h3 className='text-l font-bold col-span-3'>{transaction.b}</h3>
                        <p className='text-l font-bold text-[#0097B2] dark:text-[#FFDE59] justify-self-end'>{transaction.d} $ {transaction.c}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ReportForm