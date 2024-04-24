import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
// import { register } from '@/functions/registerFetch'

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string(),
    password: z.string()
})

const RegisterForm = () => {

    const [isChecked, setIsChecked] = useState(false)


    let toggle = () => {
        let registerButton = document.querySelector('#registerButton')
        if(isChecked == false) {
            registerButton.setAttribute("disabled", "disabled")
        } else {
            registerButton.removeAttribute("disabled")
        }
    }

    console.log(isChecked);
    const handleCheckbox = () => {
        setIsChecked(!isChecked)
        toggle()
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })
    
    // function onSubmit(values) {
    //     register(values)
    //     console.log(values)
    // }

    return (
        <>
            <Form {...form}>
                <form  className="space-y-8 flex flex-col">
                    {/* onSubmit={form.handleSubmit(onSubmit)} */}
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Username" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <div className='flex items-center gap-1'>
                        <Checkbox onCheckedChange={handleCheckbox}/>
                        <p>Agree to our <span className='font-bold'>Terms and Services</span></p>
                    </div>
                    <Button type="submit" id='registerButton'>Register now</Button>
                </form>
            </Form>
        </>
    )
}

export default RegisterForm