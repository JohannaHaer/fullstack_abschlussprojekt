import React, { useState } from 'react'
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
import { toast } from "@/components/ui/use-toast"
// import { login } from '@/functions/loginFetch'

const formSchema = z.object({
    email: z.string(),
    password: z.string()
})


const LoginForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })

    const navigateHome = () => {
        navigate('/')
    }

    // function onSubmit(values) {
    //     return login(values) && navigateHome
    //     console.log(values)
    // }

    return (
        <>
            <Form {...form}>
                <form className="space-y-8 flex flex-col">
                    {/* onSubmit={form.handleSubmit(onSubmit)} */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Password" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg'>Login</Button>
                </form>
            </Form>
        </>
    )
}

export default LoginForm