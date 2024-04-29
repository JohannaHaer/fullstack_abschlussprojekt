import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LogoExpenses from "@/components/logo/LogoExpenses";
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Toggle from '@/components/Toggle'
import { Button } from '@/components/ui/button'

const AddExpenses = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <>
            <LogoExpenses/>
            <section className='px-4 py-5 h-dvh'>
            <Header/>
            <Card className="py-14 h-dvh w-full " >
                <CardHeader className="h-3/6 w-full flex flex-col gap-12">
                    <Card className=" bg-accent rounded-lg " >
                        <p className='px-4 py-4'>you got this!!!</p>
                    </Card>
                </CardHeader>
                <CardContent className="w-full flex flex-col gap-5">
                    <Card className=" bg-accent rounded-lg  " >
                        <input className='w-full text-slate-950' type="number" name="input_amount" id="input_amount" placeholder="type in the amount. exp. ($6.000)"/>
                    </Card>
                        
                    <p>Category</p>
                    <Card className=" bg-accent rounded-lg  " >
                    </Card>
                    <div id="TIMEDATE_frame"className='flex gap-4'>
                            <Card id="card_date"className=" bg-accent rounded-lg w-full" >
                                <p className='px-4 py-4'>DATE</p>
                                <input className='w-full text-slate-9' type="date" name="input_date" id="input_date" />
                            </Card>
                            <Card id="card_time"className=" bg-accent rounded-lg  w-full" >
                                <p className='px-4 py-4'>TIME</p>
                                <input className="text-slate-950 w-full"type="time" name="input_time" id="input_time" />
                            </Card>
                    </div>
                </CardContent>
            </Card>
                    <div  id ="Button_Parent"className='flex justify-center items-center'>
                    <   Button>SEND OR SEND</Button>
                    </div>
            </section>
            <NavBar/>
        </>
    )  

}

export default AddExpenses;