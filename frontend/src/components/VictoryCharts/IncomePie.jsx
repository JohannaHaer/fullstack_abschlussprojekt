import { mainContext } from '@/context/mainProvider'
import React, { useContext } from 'react'
import { VictoryPie } from 'victory'

const IncomePie = () => {
    const {user} = useContext(mainContext)
    // console.log(user);
    const transactions = user?.transactions
    // console.log('trans', transactions);
    const incomeArray = []
    const clearedIncomeArray = []
    transactions?.map((transaction) => {
        if(transaction.type == 'income') {
            incomeArray.push({x: transaction.category, y: transaction.amount})
        }
    })
    user?.incomeCategories?.map((category) => {
        let categoryAmount = 0
        incomeArray.map((income) => {
            if(income.x == category.categoryName) {
                // console.log(income.x, category.categoryName);
                // console.log(income.y);
                categoryAmount = categoryAmount + income.y
            }
            // console.log('test', categoryAmount, category.categoryName);
            // clearedIncomeArray.push(categoryAmount)
        })
        if(categoryAmount > 0) {
            clearedIncomeArray.push({x: category.categoryName, y: categoryAmount})
        }
    })

    console.log('cleared', clearedIncomeArray);
    
    // console.log('incomeArray', incomeArray);

    return (
        <>
            <VictoryPie data = {clearedIncomeArray}/>
        </>
    )
}

export default IncomePie