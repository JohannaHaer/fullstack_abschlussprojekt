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
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from 'react-router-dom'
import { register } from '@/functions/registerFetch'
import { mainContext } from "@/context/mainProvider"
import { useContext } from "react"

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string().min(2).max(50),
    email: z.string(),
    password: z.string()
})

const RegisterForm = () => {
    const {status, setStatus} = useContext(mainContext)
    const [isChecked, setIsChecked] = useState(false)
    const navigate = useNavigate()

    let toggle = () => {
        let registerButton = document.querySelector('#registerButton')
        if(isChecked === true) {
            registerButton.setAttribute("disabled", "disabled")
            
        } else {
            registerButton.removeAttribute("disabled")
        }
    }

    const handleCheckbox = () => {
        setIsChecked(!isChecked)
        toggle()
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        },
    })

    const navigateSetupAccount = () => {
        navigate('/setup-account')
    }

    const navigateTermsServices = () => {
        navigate('/terms-and-services')
    }

    const onSubmit = async(values) => {
        const resp = await register(values) 
        console.log(resp)
        // navigateSetupAccount()
    }

    return (
        <>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
                <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="First name" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Last name" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                        <p>Agree to our <span className='font-bold' onClick={navigateTermsServices}>Terms and Services</span></p>
                    </div>
                    <Button type="submit" id='registerButton' disabled={!isChecked} className='text-lg'>Register now</Button>
                </form>
            </Form>
        </>
    )
}

export default RegisterForm