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
    FormLabel,
    FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioItem,
    DropdownMenuRadioGroup
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
import { register } from '@/functions/fetches/registerFetch'
import { mainContext } from '@/context/mainProvider'
import { addExpense, addIncome } from '@/functions/fetches/addTransactionsFetches'

const formSchema = z.object({
    category: z.string(),
    amount: z.string(),
    description: z.string(),
    date: z.date(),
})

const AddExpenseForm = ({type}) => {
    const [date, setDate] = React.useState()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: "",
            amount: "",
            description: "",
            date: ""
        },
    })

    const onSubmit = (values) => {
        if(type == 'expense') {
            addExpense(values) 
        } else if ( type == 'income') {
            addIncome(values)
        }
    }

    return (
        <section className='py-5'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
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
                    <FormField
                        control={form.control} 
                        name="category"
                        render={({ field }) => (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Category</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuRadioGroup selected={field.value} onValueChange={field.onChange}>
                                        <DropdownMenuRadioItem value="food">Food</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="technic">Technic</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="clothing">Clothing</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="rental">Rental</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="insurance">Insurance</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="leisure">Leisure</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='transactionButton'>Add Expense</Button>
                </form>
            </Form>
        </section>
    )
}

export default AddExpenseForm