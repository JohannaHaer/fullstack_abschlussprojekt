import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import LogoNormal from '../components/logo/LogoNormal'

const Settings = () => {
    return (
        <>
        <LogoNormal/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
            <h1>Settings</h1>
        </section>
        <NavBar/>
        </>
    )
}

export default Settings