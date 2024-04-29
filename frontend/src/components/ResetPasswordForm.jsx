import React from 'react'
import { useNavigate } from 'react-router-dom'
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
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
 
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const formSchema = z.object({
    password: z.string(),
    confirmPassword: z.string()
})

const ResetPasswordForm = () => {
    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: ""
        }
    })

    const navigateLogin = () => {
        navigate('/login')
    }

    // onSubmit = (values) => {
    //     login(values) 
    //     navigateLogin()
    // }

    let toggle = () => {
        let changePWButton = document.querySelector('#changePWButton')
        if(FormField["password"] === FormField["confirmPassword"]) {
            changePWButton.setAttribute("disabled", "disabled")
            console.log('yeah');
            
        } else {
            changePWButton.removeAttribute("disabled")
            console.log('no');
        }
    }

    return (
        <>
            <Form {...form}>
                <form className="space-y-8 flex flex-col">
                    {/* onSubmit={form.handleSubmit(onSubmit)} */}
                    <div className='self-center py-5'>
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} required>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="New password" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Confirm password" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='changePWButton'>Set new password</Button>
                </form>
            </Form>
        </>
    )
}

export default ResetPasswordForm