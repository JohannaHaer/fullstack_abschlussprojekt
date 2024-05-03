import React, { useContext } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {useNavigate} from 'react-router-dom'
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
import { login } from '@/functions/fetches/loginFetch'
import { mainContext } from '@/context/mainProvider'

const formSchema = z.object({
    email: z.string(),
    password: z.string()
})


const LoginForm = () => {
    const {setLoad} = useContext(mainContext)
    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const navigateHome = () => {
        navigate('/home')
    }

     //*in resp ist jetzt die gesamte response und mit resp.json() kann die fehlermeldung ausgelesen werden
    const onSubmit = async (values) => {
        const resp = await login(values) 
        if(await resp.status==200){
            setLoad(true)
            navigateHome()
        }
    }

    const navigateForgotPassword = () => {
        navigate('/forgot-password')
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
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
                                <span onClick={navigateForgotPassword} className='flex justify-end'>Forgot Password</span>
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