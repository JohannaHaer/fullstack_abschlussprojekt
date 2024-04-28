import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUser } from '@/functions/userDataFetch'

const Header = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser()
            setUser(userData)
        }
        getUserData()
    }, [])

    const getFirstName = user?.firstName.charAt(0).toUpperCase()
    const getLastName = user?.lastName.charAt(0).toUpperCase()
    const avatarFallback = getFirstName?.concat(getLastName)

    return (
        <section className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Hey {user?.username}</h1>
            <div className='flex gap-4 items-center'>
                <p className='text-l font-medium'>Saldo</p>
                <Avatar variant='default'>
                    <AvatarImage id='avatar' src='' />
                    <AvatarFallback>
                        <div className='w-10 h-10 rounded-full bg-grey border-2 flex justify-center items-center font-bold'>{avatarFallback}</div>
                    </AvatarFallback>
                </Avatar>
            </div>
        </section>
    )
}

export default Header