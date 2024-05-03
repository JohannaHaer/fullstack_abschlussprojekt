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
                transactionArray.push({category: transaction.category, amount: transaction.amount, type: transaction.type})
            } 
        })

        user?.expenseCategories?.map((category) => {
            let categoryAmount = 0
            let type = ''
            transactionArray.map((income) => {
                if(income.category == category.categoryName) {
                    categoryAmount = categoryAmount + income.amount
                    type = income.type
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({imgUrl: category.imgUrl, categoryName: category.categoryName, amount: categoryAmount, sign: '-', type: type})
            }
        })
    } else if (type == 'income') {
        transactions?.map((transaction) => {
            if(transaction.type == 'income') {
                transactionArray.push({category: transaction.category, amount: transaction.amount, type: transaction.type})
            } 
        })

        user?.incomeCategories?.map((category) => {
            let categoryAmount = 0
            let type = ''
            transactionArray.map((income) => {
                if(income.category == category.categoryName) {
                    categoryAmount = categoryAmount + income.amount
                    type = income.type
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({imgUrl: category.imgUrl, categoryName: category.categoryName, amount: categoryAmount, sign: '', type: type})
            }
        })
    }

    return (
        <section className='flex flex-col w-full pb-16'>
            <h2 className="text-xl font-bold self-start">Total {type} transactions</h2>
            {clearedTransactionArray.map((transaction) => {
                return(
                    <div key={transaction.categoryName} className='grid grid-cols-6 pt-8 items-center'>
                        {transaction.type === 'income' 
                        ? <div className='w-10 h-10 p-2 rounded-full flex justify-center items-center bg-gradient-to-b from-[#FFDE59] to-[#FF9900]'>
                            <img src={transaction.imgUrl} alt=""/>
                        </div>
                        : <div className='w-10 h-10 p-2 rounded-full flex justify-center items-center bg-gradient-to-b from-[#44BBFE] to-[#1E78FE]'>
                            <img src={transaction.imgUrl} alt=""/>
                        </div>
                        }
                        <h3 className='text-l font-bold col-span-3'>{transaction.categoryName}</h3>
                        <p className='text-l font-bold text-[#0097B2] dark:text-[#FFDE59] justify-self-end col-span-2'>{transaction.sign} $ {transaction.amount}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default TotalTransactions