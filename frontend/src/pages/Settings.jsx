import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import LogoNormal from '../components/logo/LogoNormal'
import SettingsForm from '@/components/SettingsForm'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const Settings = () => {
    return (
        <>
        <LogoNormal/>
        {/* <section className='py-5 px-4 h-dvh'> */}
            <Header/>
            <h1>Settings</h1>
        {/* </section> */}
        <SettingsForm />
        
        {/* <Button type="submit" className='text-lg' id='transactionButton'>Add Income</Button> */}

        <NavBar/>
        </>
    )
}

export default Settings