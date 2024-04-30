import { mainContext } from '@/context/mainProvider'
import React, { useContext } from 'react'
import { VictoryPie } from 'victory'

const IncomePie = () => {
    const {user} = useContext(mainContext)
    console.log(user);
    const transactions = user?.transactions
    console.log('trans', transactions);
    const incomeArray = []
    const clearedIncomeArray = []
    const transactionMap = transactions?.map((transaction) => {
        if(transaction.type == 'income') {
            incomeArray.push({x: transaction.category, y: transaction.amount})
            // incomeArray.map((income) => {
            //     if(income.x == transaction.category) {
            //         console.log('test', income.x);
            //     }
            // })
        }
    })
    console.log('incomeArray', incomeArray);
    
    const category = incomeArray.map((item) => item.x)
    const duplicate = category.some((item, index) => {
        return(
            category.indexOf(item) != index
        )
    })
    console.log(duplicate);
    return (
        <>
            <VictoryPie data = {incomeArray}/>
        </>
    )
}

export default IncomePie