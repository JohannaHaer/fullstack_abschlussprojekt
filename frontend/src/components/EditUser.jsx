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
import { addExpenseCategory, addIncomeCategory } from '@/functions/fetches/addCategoryFetch'
import { editUser } from '@/functions/fetches/editUserFetches'





const usernameFormSchema = z.object({
    username: z.string()
})

const emailFormSchema = z.object({
    email: z.string()
})


const EditUser = ({type}) => {
    const usernameForm = useForm({
        resolver: zodResolver(usernameFormSchema),
        defaultValues: {
            username: ""
        },
    })

    const emailForm = useForm({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            email: ""
        },
    })
    const handleEditUserSubmit = (values) =>{
        editUser(values)
        location.reload()
    }

    return (
        <div>
            
            <Form {...usernameForm} >
                <form onSubmit={usernameForm.handleSubmit(handleEditUserSubmit)} className="space-y-6 flex flex-col">
                <FormField
                        control={usernameForm.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>new Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="new Username" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='transactionButton'>Change Username</Button>
                </form>
            </Form>
            <Form {...emailForm} >
                <form onSubmit={emailForm.handleSubmit(handleEditUserSubmit)} className="space-y-6 flex flex-col">
                <FormField
                        control={emailForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>new Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="new Email" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='transactionButton'>Change Email</Button>
                </form>
            </Form>
        </div>
    )
}

export default EditUser
