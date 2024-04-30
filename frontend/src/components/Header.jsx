import React, { useContext } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from 'react-router-dom'
import { mainContext } from '@/context/mainProvider'

const Header = () => {
    const {user, saldo} = useContext(mainContext)
    const navigate = useNavigate()

    const getFirstName = user?.firstName.charAt(0).toUpperCase()
    const getLastName = user?.lastName.charAt(0).toUpperCase()
    const avatarFallback = getFirstName?.concat(getLastName)

    const navigateSettings = () => {
        navigate('/settings')
    }

    return (
        <section className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Hey {user?.username}</p>
            <div className='flex gap-4 items-center'>
                <p className='text-l font-medium'><span>{saldo}</span> $</p>
                <Avatar variant='default' onClick={navigateSettings}>
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