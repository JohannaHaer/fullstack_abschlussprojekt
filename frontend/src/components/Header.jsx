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

    return (
        <section className='flex justify-between items-center'>
            <h1>Hallo {user?.username}</h1>
            <p>Saldo</p>
            <Avatar variant='default'>
                <AvatarImage id='avatar' src='' />
                <AvatarFallback><img src='https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg' alt=""/></AvatarFallback>
            </Avatar>
        </section>
    )
}

export default Header