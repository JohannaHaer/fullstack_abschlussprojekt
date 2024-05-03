import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import SettingsForm from '@/components/SettingsForm'
import HeaderNormal from '../components/header/HeaderNormal'
import { useNavigate } from 'react-router-dom'
import { mainContext } from '@/context/mainProvider'

const Settings = () => {
    const {user} = useContext(mainContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])

    return (
        <>
        <HeaderNormal/>
        {/* <section className='py-5 px-4 h-dvh'> */}
            <h1>Settings</h1>
        {/* </section> */}
        <SettingsForm />
        

        <NavBar/>
        </>
    )
}

export default Settings