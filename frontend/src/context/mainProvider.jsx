import { getUser } from '@/functions/userDataFetch'
import React, { createContext, useEffect, useState } from 'react'
export const mainContext = createContext()
const MainProvider = ({children}) => {
    const [user, setUser] = useState()
    const [saldo, setSaldo] = useState()
    const [allIncome, setAllIncome] = useState()
    const [allExpenses, setAllExpenses] = useState()

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser()
            setUser(userData)
        }
        getUserData()
    }, [])

    useEffect(() => {
        let sum = 0
        let difference = 0
        const transactions = user?.transactions
        transactions?.map((transaction) => {
            if(transaction.type == 'income') {
                sum = sum + transaction.amount
                // console.log(transaction.amount, sum, '+');
            } else if (transaction.type == 'expense') {
                difference = difference + transaction.amount
                // console.log(transaction.amount, sum, '-');
            }
            setSaldo(sum - difference)
            setAllIncome(sum)
            setAllExpenses(difference)
        })
    }, [user])

    return (
        <mainContext.Provider value={{user, saldo, allIncome, allExpenses}}>
        {children}
        </mainContext.Provider>
    )
}

export default MainProvider