import React, { useContext, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
"use client"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useNavigate } from 'react-router-dom'
import { register } from '@/functions/registerFetch'
import { mainContext } from '@/context/mainProvider'

const formSchema = z.object({
    type: 'income',
    category: z.string(),
    amount: z.number(),
    description: z.string(),
    date: z.string(),
    time: z.string()
})

const AddIncomeForm = () => {
    const {user} = useContext(mainContext)
    const [date, setDate] = React.useState()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: 'income',
            category: "",
            amount: "",
            description: "",
            date: "",
            time: ""
        },
    })

    return (
        <section className='py-5'>
            <Form {...form} >
                <form className="space-y-8 flex flex-col">
                {/* onSubmit={form.handleSubmit(onSubmit)} */}
                <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Description" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Amount" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger>Category</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Salary</DropdownMenuItem>
                            <DropdownMenuItem>Bonus</DropdownMenuItem>
                            <DropdownMenuItem>Pocket money</DropdownMenuItem>
                            <DropdownMenuItem>Repayment</DropdownMenuItem>
                            <DropdownMenuItem>Part-time job</DropdownMenuItem>
                            <DropdownMenuItem>Sales</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <Button type="submit" className='text-lg' id='transactionButton'>Add Income</Button>
                </form>
            </Form>
        </section>
    )
}

export default AddIncomeForm