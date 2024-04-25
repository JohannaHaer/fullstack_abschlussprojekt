import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom'
// import { register } from '@/functions/registerFetch'


const SetupAccountForm = () => {

    const [imageSelected, setImageSelected] = useState(null)
    const navigate = useNavigate()

    const navigateHome = () => {
        if(imageSelected != null){
        navigate('/')
    }
    }

    const getImage = (event) => {
        const image = event.target.files
        setImageSelected(image)
        console.log('klappt');
    }
    
    return (
        <>
            <Form className="space-y-8 flex flex-col">
                <form onSubmit={navigateHome}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" onChange={getImage}/>
                    </div>
                    <div className='flex gap-5'>
                        <Button type="submit" variant='secondary' className='text-lg' onClick={navigateHome}>Skip</Button>
                        <Button type="submit" className='text-lg'>Add Image</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default SetupAccountForm