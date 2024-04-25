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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { register } from '@/functions/registerFetch'


const SetupAccountForm = () => {

    const [imageSelected, setImageSelected] = useState(null)
    const navigate = useNavigate()

    const getImage = (event) => {
        const image = event.target.files[0]
        setImageSelected(URL.createObjectURL(image))
    }

    const navigateHome = () => {
        if(imageSelected != null){
        navigate('/')
    }
    }
    
    return (
        <>
            <Form>
                <form onSubmit={navigateHome} className="space-y-8 flex flex-col items-center">
                    <div className="grid w-full max-w-sm items-center justify-center gap-1.5">
                        <Avatar variant='preview'>
                            <AvatarImage id='avatar' src={imageSelected} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Label htmlFor="picture" className='text-start'>Profile picture</Label>
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