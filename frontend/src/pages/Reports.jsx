import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import LogoNormal from "@/components/logo/LogoNormal"
import { mainContext } from '@/context/mainProvider'
import React, { useContext } from 'react'
import ReportForm from "@/components/ReportForm"
 

const Reports = () => {
    // const {user} = useContext(mainContext)
    // console.log(user);

    // const transactions = user?.transactions
    // console.log('transactionDate', transactions);
    // const monthlyDates = []
    // transactions?.map((transaction) => {
    //     let oldDate = transaction.date
    //     let newDate = oldDate.slice(0, 7)
    //     if(newDate )
    //     monthlyDates.push({date: newDate})
    // })
    // console.log(monthlyDates);

    // const year = (new Date()).getFullYear();
    // const month = (new Date()).getMonth()
    // console.log(month);
    // console.log(year);
    // const years = Array.from(new Array(5),( val, index) => year - index);
    // console.log(years);
 
    return ( 
        <>
        <LogoNormal/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
                <h1 className="text-2xl text-center font-bold pt-10 text-[#0097B2] dark:text-[#FFDE59]">Report</h1>
                <ReportForm/>
        </section>
        <NavBar/>
        </>
    )
}

export default Reports