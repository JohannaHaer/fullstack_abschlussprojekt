import React from 'react'
import NavBar from '../components/NavBar'
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
import HeaderNormal from '../components/header/HeaderNormal'

const Settings = () => {
    return (
        <>
        <HeaderNormal/>
      
        <SettingsForm />
        

        <NavBar/>
        </>
    )
}

export default Settings