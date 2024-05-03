import NavBar from "@/components/NavBar";
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import AddTransactionForm from "@/components/AddTransactionForm";
import HeaderAddExpense from "@/components/header/HeaderAddExpenses";

const AddExpenses = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <>
            <HeaderAddExpense/>
            <section className='px-4 py-5 h-dvh'>
                <h1 className="text-2xl text-center font-bold pt-10 text-[#0097B2] dark:text-[#FFDE59]">Add Expense</h1>
                <AddTransactionForm type={'expense'}/>
            </section>
            <NavBar/>
        </>
    )  

}

export default AddExpenses;