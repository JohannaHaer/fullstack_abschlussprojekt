import React from 'react'
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LogoNormal from "@/components/logo/LogoNormal";
import TransactionsForm from '@/components/TransactionsForm';

const Transaction = () => {

    return ( 
        <>
        <LogoNormal/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
            <h1 className="text-2xl text-center font-bold pt-10 text-[#0097B2] dark:text-[#FFDE59]">All Transactions</h1>
            <TransactionsForm/>
        </section>
        <NavBar/>
        </>
    );
}

export default Transaction;